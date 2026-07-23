const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};

const json = (body: Record<string, unknown>, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {...corsHeaders, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store'},
});

type ChatMessage = {role: 'user' | 'assistant'; content: string};
type CachedReply = {expiresAt: number; reply: string};

const requestWindows = new Map<string, {startedAt: number; count: number}>();
const replyCache = new Map<string, CachedReply>();
const REQUESTS_PER_USER_PER_HOUR = 60;
const CACHE_TTL_MS = 10 * 60 * 1000;

function selectedProvider() {
  const requested = (Deno.env.get('AI_PROVIDER') || 'gemini').trim().toLowerCase();
  return requested === 'openai' ? 'openai' : 'gemini';
}

function providerConfiguration() {
  const provider = selectedProvider();
  const configured = provider === 'gemini'
    ? Boolean(Deno.env.get('GEMINI_API_KEY'))
    : Boolean(Deno.env.get('OPENAI_API_KEY'));
  return {
    provider,
    configured,
    model: provider === 'gemini'
      ? Deno.env.get('GEMINI_MODEL') || 'gemini-3.5-flash'
      : Deno.env.get('OPENAI_MODEL') || 'gpt-5.6-luna',
  };
}

function withinRateLimit(userId: string) {
  const now = Date.now();
  const current = requestWindows.get(userId);
  if (!current || now - current.startedAt > 60 * 60 * 1000) {
    requestWindows.set(userId, {startedAt: now, count: 1});
    return true;
  }
  if (current.count >= REQUESTS_PER_USER_PER_HOUR) return false;
  current.count += 1;
  return true;
}

async function stableHash(value: string) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return Array.from(new Uint8Array(bytes)).map(item => item.toString(16).padStart(2, '0')).join('');
}

async function safetyIdentifier(userId: string) {
  return `learner_${(await stableHash(userId)).slice(0, 24)}`;
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

function normaliseMessages(rawMessages: unknown) {
  const messages = Array.isArray(rawMessages) ? rawMessages : [];
  return messages.slice(-8).flatMap((message): ChatMessage[] => {
    if (!message || typeof message !== 'object') return [];
    const role = (message as {role?: unknown}).role === 'assistant' ? 'assistant' : 'user';
    const rawContent = (message as {content?: unknown}).content;
    const content = typeof rawContent === 'string' ? rawContent.trim().slice(0, 15000) : '';
    return content ? [{role, content}] : [];
  });
}

function extractOpenAiReply(data: Record<string, unknown>) {
  const output = Array.isArray(data.output) ? data.output : [];
  return output.flatMap((item) => {
    if (!item || typeof item !== 'object' || !Array.isArray((item as {content?: unknown[]}).content)) return [];
    return ((item as {content: Array<{type?: string; text?: string}>}).content || [])
      .filter(part => part?.type === 'output_text' && typeof part.text === 'string')
      .map(part => part.text || '');
  }).join('\n').trim();
}

function extractGeminiReply(data: Record<string, unknown>) {
  const candidates = Array.isArray(data.candidates) ? data.candidates : [];
  return candidates.flatMap((candidate) => {
    if (!candidate || typeof candidate !== 'object') return [];
    const content = (candidate as {content?: {parts?: Array<{text?: unknown}>}}).content;
    return Array.isArray(content?.parts)
      ? content.parts.filter(part => typeof part?.text === 'string').map(part => String(part.text))
      : [];
  }).join('\n').trim();
}

async function callGemini(model: string, apiKey: string, scenario: string, messages: ChatMessage[]) {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
    method: 'POST',
    headers: {'x-goog-api-key': apiKey, 'Content-Type': 'application/json'},
    signal: AbortSignal.timeout(45_000),
    body: JSON.stringify({
      system_instruction: {parts: [{text: instructionsFor(scenario)}]},
      contents: messages.map(message => ({
        role: message.role === 'assistant' ? 'model' : 'user',
        parts: [{text: message.content}],
      })),
      generationConfig: {
        maxOutputTokens: scenario === 'site-audit' ? 1400 : 500,
        thinkingConfig: {thinkingLevel: 'low'},
      },
    }),
  });
  if (!response.ok) {
    console.error('Gemini API error', response.status);
    throw new Error('免费 AI 当前额度不足或暂时不可用');
  }
  return extractGeminiReply(await response.json());
}

async function callOpenAi(model: string, apiKey: string, userId: string, scenario: string, messages: ChatMessage[]) {
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json'},
    signal: AbortSignal.timeout(45_000),
    body: JSON.stringify({
      model,
      instructions: instructionsFor(scenario),
      input: messages,
      reasoning: {effort: 'low'},
      text: {verbosity: 'low'},
      max_output_tokens: scenario === 'site-audit' ? 1400 : 500,
      safety_identifier: await safetyIdentifier(userId),
    }),
  });
  if (!response.ok) {
    console.error('OpenAI Responses API error', response.status);
    throw new Error('付费 AI 暂时无法回答');
  }
  return extractOpenAiReply(await response.json());
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', {headers: corsHeaders});
  const configuration = providerConfiguration();
  if (request.method === 'GET') return json({
    ok: true,
    service: 'german-teacher',
    configured: configuration.configured,
    provider: configuration.configured ? configuration.provider : 'offline',
    requestedProvider: configuration.provider,
    freeTierPreferred: configuration.provider === 'gemini',
    loginRequired: true,
  });
  if (request.method !== 'POST') return json({error: 'Method not allowed'}, 405);

  const authorization = request.headers.get('Authorization') || '';
  if (!authorization.startsWith('Bearer ')) return json({error: '请先登录后再使用在线 AI 德语老师。'}, 401);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');
  if (!supabaseUrl || !supabaseAnonKey) return json({error: '账号服务尚未完成配置。'}, 503);
  if (!configuration.configured) {
    const message = configuration.provider === 'gemini'
      ? '免费 AI 尚未配置，网站已自动使用离线老师。'
      : '在线 AI 尚未配置，网站已自动使用离线老师。';
    return json({error: message, provider: 'offline'}, 503);
  }

  const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {headers: {Authorization: authorization, apikey: supabaseAnonKey}});
  if (!userResponse.ok) return json({error: '登录已过期，请重新登录。'}, 401);
  const user = await userResponse.json();
  if (!user?.id) return json({error: '无法确认登录账号。'}, 401);
  if (!withinRateLimit(user.id)) return json({error: '本小时免费 AI 使用次数已用完，请稍后再试；其他学习功能不受影响。'}, 429);

  let payload: {scenario?: unknown; messages?: unknown};
  try {
    payload = await request.json();
  } catch {
    return json({error: '请求格式不正确。'}, 400);
  }
  const scenario = typeof payload.scenario === 'string' ? payload.scenario.slice(0, 40) : 'free';
  const messages = normaliseMessages(payload.messages);
  if (!messages.length) return json({error: '请先输入要练习或评估的内容。'}, 400);

  const cacheKey = await stableHash(JSON.stringify({provider: configuration.provider, model: configuration.model, scenario, messages}));
  const cached = replyCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return json({reply: cached.reply, provider: configuration.provider, cached: true});
  if (cached) replyCache.delete(cacheKey);

  try {
    const reply = configuration.provider === 'gemini'
      ? await callGemini(configuration.model, Deno.env.get('GEMINI_API_KEY') || '', scenario, messages)
      : await callOpenAi(configuration.model, Deno.env.get('OPENAI_API_KEY') || '', user.id, scenario, messages);
    if (!reply) return json({error: '在线 AI 没有返回可显示的内容。'}, 502);
    replyCache.set(cacheKey, {reply, expiresAt: Date.now() + CACHE_TTL_MS});
    if (replyCache.size > 200) {
      for (const [key, value] of replyCache) if (value.expiresAt <= Date.now()) replyCache.delete(key);
    }
    return json({reply, provider: configuration.provider, cached: false});
  } catch (error) {
    console.error('AI provider request failed', configuration.provider, error instanceof Error ? error.message : 'unknown error');
    return json({error: error instanceof Error ? error.message : '在线 AI 暂时不可用，已切换到离线老师。'}, 502);
  }
});
