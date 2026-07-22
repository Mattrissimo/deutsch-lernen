const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

const json = (body: Record<string, unknown>, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {...corsHeaders, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store'},
});

const requestWindows = new Map<string, {startedAt: number; count: number}>();

function withinRateLimit(userId: string) {
  const now = Date.now();
  const current = requestWindows.get(userId);
  if (!current || now - current.startedAt > 60 * 60 * 1000) {
    requestWindows.set(userId, {startedAt: now, count: 1});
    return true;
  }
  if (current.count >= 120) return false;
  current.count += 1;
  return true;
}

async function safetyIdentifier(userId: string) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(userId));
  return `learner_${Array.from(new Uint8Array(bytes)).slice(0, 12).map(value => value.toString(16).padStart(2, '0')).join('')}`;
}

function instructionsFor(scenario: string) {
  if (scenario === 'site-audit') {
    return '你是资深“德语作为外语”课程设计师。请用简体中文审计一个面向中国 A1 学习者、目标是在德国生活和经营店铺的网站。只依据用户提供的匿名数据，不要臆造。先给总体判断，再按高、中、低优先级列出 5 个不足；每项写明学习影响和一个具体改法；最后给下一版最应先做的 3 件事。直接、具体、可执行。';
  }
  const scenarioNames: Record<string, string> = {
    intro: '自我介绍',
    store: '店铺接待',
    price: '报价与付款',
    directions: '问路',
    free: '自由对话',
  };
  return `你是耐心、严格的德语老师，学生母语是中文，当前水平 A1，练习场景是“${scenarioNames[scenario] || scenarioNames.free}”。先判断学生的德语是否自然、语法是否正确。回复格式固定为：第一行给 1 至 2 句自然德语并继续对话；第二行用简体中文解释；第三行以“纠正：”开头，只指出最重要的一个错误并给正确说法，如果没有错误就写“纠正：这句正确，再试着说得更完整”。不要使用学生尚未需要的复杂术语，不要一次提多个问题。`;
}

function extractReply(data: Record<string, unknown>) {
  const output = Array.isArray(data.output) ? data.output : [];
  return output.flatMap((item) => {
    if (!item || typeof item !== 'object' || !Array.isArray((item as {content?: unknown[]}).content)) return [];
    return ((item as {content: Array<{type?: string; text?: string}>}).content || [])
      .filter(part => part?.type === 'output_text' && typeof part.text === 'string')
      .map(part => part.text || '');
  }).join('\n').trim();
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', {headers: corsHeaders});
  if (request.method === 'GET') return json({ok: true, service: 'german-teacher', configured: Boolean(Deno.env.get('OPENAI_API_KEY')), loginRequired: true});
  if (request.method !== 'POST') return json({error: 'Method not allowed'}, 405);

  const authorization = request.headers.get('Authorization') || '';
  if (!authorization.startsWith('Bearer ')) return json({error: '请先登录后再使用在线 AI 德语老师。'}, 401);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');
  const openAiKey = Deno.env.get('OPENAI_API_KEY');
  if (!supabaseUrl || !supabaseAnonKey || !openAiKey) return json({error: 'AI 服务尚未完成管理员配置。'}, 503);

  const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {headers: {Authorization: authorization, apikey: supabaseAnonKey}});
  if (!userResponse.ok) return json({error: '登录已过期，请重新登录。'}, 401);
  const user = await userResponse.json();
  if (!user?.id) return json({error: '无法确认登录账号。'}, 401);
  if (!withinRateLimit(user.id)) return json({error: '本小时 AI 使用次数已用完，请稍后再试。'}, 429);

  let payload: {scenario?: unknown; messages?: unknown};
  try {
    payload = await request.json();
  } catch {
    return json({error: '请求格式不正确。'}, 400);
  }
  const scenario = typeof payload.scenario === 'string' ? payload.scenario.slice(0, 40) : 'free';
  const rawMessages = Array.isArray(payload.messages) ? payload.messages : [];
  const messages = rawMessages.slice(-8).flatMap((message) => {
    if (!message || typeof message !== 'object') return [];
    const role = (message as {role?: unknown}).role === 'assistant' ? 'assistant' : 'user';
    const content = typeof (message as {content?: unknown}).content === 'string' ? (message as {content: string}).content.trim().slice(0, 15000) : '';
    return content ? [{role, content}] : [];
  });
  if (!messages.length) return json({error: '请先输入要练习或评估的内容。'}, 400);

  const openAiResponse = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {Authorization: `Bearer ${openAiKey}`, 'Content-Type': 'application/json'},
    body: JSON.stringify({
      model: Deno.env.get('OPENAI_MODEL') || 'gpt-5.6-luna',
      instructions: instructionsFor(scenario),
      input: messages,
      reasoning: {effort: 'low'},
      text: {verbosity: 'low'},
      max_output_tokens: scenario === 'site-audit' ? 1400 : 500,
      safety_identifier: await safetyIdentifier(user.id),
    }),
  });
  if (!openAiResponse.ok) {
    console.error('OpenAI Responses API error', openAiResponse.status);
    return json({error: '在线 AI 暂时无法回答，网站已保留离线老师作为备用。'}, 502);
  }
  const data = await openAiResponse.json();
  const reply = extractReply(data);
  if (!reply) return json({error: '在线 AI 没有返回可显示的内容。'}, 502);
  return json({reply});
});
