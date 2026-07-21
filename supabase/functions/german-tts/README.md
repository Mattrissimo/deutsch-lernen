# German natural voice function

This Supabase Edge Function keeps the speech-provider key off the GitHub Pages frontend.

Required secret:

```text
OPENAI_API_KEY=your server-side key
```

Optional secrets:

```text
TTS_MODEL=tts-1-hd
TTS_VOICE=cedar
```

Deploy from the repository root with the Supabase CLI:

```text
supabase functions deploy german-tts --no-verify-jwt
```

The function validates the caller's Supabase access token itself, limits requests per signed-in user, accepts only 1–700 characters, and never exposes the provider key to the browser.
