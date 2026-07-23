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
  if (current.count >= 60) return false;
  current.count += 1;
  return true;
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', {headers: corsHeaders});
  const paidTtsEnabled = Deno.env.get('ENABLE_PAID_TTS') === 'true';
  if (request.method === 'GET') return json({ok: true, service: 'german-tts', enabled: paidTtsEnabled, zeroCostMode: !paidTtsEnabled, loginRequired: true});
  if (request.method !== 'POST') return json({error: 'Method not allowed'}, 405);
  if (!paidTtsEnabled) return json({error: '当前为零付费语音模式，请使用公开真人录音或设备德语语音。'}, 503);

  const authorization = request.headers.get('Authorization') || '';
  if (!authorization.startsWith('Bearer ')) return json({error: '请先登录后再使用自然语音。'}, 401);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');
  const openAiKey = Deno.env.get('OPENAI_API_KEY');
  if (!supabaseUrl || !supabaseAnonKey || !openAiKey) return json({error: '语音服务尚未完成管理员配置。'}, 503);

  const userResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
    headers: {Authorization: authorization, apikey: supabaseAnonKey},
  });
  if (!userResponse.ok) return json({error: '登录已过期，请重新登录。'}, 401);
  const user = await userResponse.json();
  if (!user?.id) return json({error: '无法确认登录账号。'}, 401);
  if (!withinRateLimit(user.id)) return json({error: '本小时朗读次数已用完，请稍后再试。'}, 429);

  let payload: {text?: unknown; speed?: unknown};
  try {
    payload = await request.json();
  } catch {
    return json({error: '请求格式不正确。'}, 400);
  }
  const text = typeof payload.text === 'string' ? payload.text.trim() : '';
  const speed = Math.max(0.55, Math.min(1.25, Number(payload.speed) || 1));
  if (!text || text.length > 700) return json({error: '每次请输入 1–700 个字符。'}, 400);

  const speechResponse = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {Authorization: `Bearer ${openAiKey}`, 'Content-Type': 'application/json'},
    body: JSON.stringify({
      model: Deno.env.get('TTS_MODEL') || 'tts-1-hd',
      voice: Deno.env.get('TTS_VOICE') || 'cedar',
      input: text,
      speed,
      response_format: 'mp3',
    }),
  });
  if (!speechResponse.ok || !speechResponse.body) {
    console.error('TTS provider error', speechResponse.status, await speechResponse.text());
    return json({error: '自然语音暂时生成失败，请稍后重试。'}, 502);
  }

  return new Response(speechResponse.body, {
    status: 200,
    headers: {...corsHeaders, 'Content-Type': 'audio/mpeg', 'Cache-Control': 'private, max-age=3600'},
  });
});
