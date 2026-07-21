-- 在 Supabase SQL Editor 中执行一次。
-- 前端只需要 Project URL 和 publishable/anon key；绝不要把 service_role key 放进 HTML。
create table if not exists public.learner_wordbooks (
  user_id uuid primary key references auth.users(id) on delete cascade,
  wordbook jsonb not null default '[]'::jsonb,
  progress jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- 已经创建过旧表时，用这一句补上完整学习进度列。
alter table public.learner_wordbooks
  add column if not exists progress jsonb not null default '{}'::jsonb;

alter table public.learner_wordbooks enable row level security;
alter table public.learner_wordbooks force row level security;

revoke all on table public.learner_wordbooks from anon;
grant select, insert, update on table public.learner_wordbooks to authenticated;

drop policy if exists "read own wordbook" on public.learner_wordbooks;
create policy "read own wordbook" on public.learner_wordbooks
for select to authenticated using (auth.uid() = user_id);

drop policy if exists "insert own wordbook" on public.learner_wordbooks;
create policy "insert own wordbook" on public.learner_wordbooks
for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "update own wordbook" on public.learner_wordbooks;
create policy "update own wordbook" on public.learner_wordbooks
for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
