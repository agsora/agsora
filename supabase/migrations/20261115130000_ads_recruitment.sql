-- Dashboard modules: Meta Ads insights (pulled by /api/ads/sync) and recruitment.
-- Written only by the site's server with the secret key; RLS on, no policies.

-- Daily campaign figures from the Meta Marketing API, one row per campaign per day.
create table public.ad_insights (
  campaign_id text not null,
  day date not null,
  account text not null,
  campaign_name text not null,
  spend numeric not null default 0,
  impressions bigint not null default 0,
  reach bigint not null default 0,
  clicks bigint not null default 0,
  -- Conversations started (WhatsApp / Messenger) reported by Meta.
  conversations int not null default 0,
  updated_at timestamptz not null default now(),
  primary key (campaign_id, day)
);
create index ad_insights_day_idx on public.ad_insights (day desc);

create table public.jobs (
  id bigint generated always as identity primary key,
  title text not null check (char_length(title) between 1 and 160),
  department text check (char_length(department) <= 120),
  status text not null default 'open' check (status in ('open', 'closed')),
  created_at timestamptz not null default now()
);

create table public.candidates (
  id bigint generated always as identity primary key,
  job_id bigint not null references public.jobs (id) on delete cascade,
  name text not null check (char_length(name) between 1 and 160),
  email text check (char_length(email) <= 200),
  phone text check (char_length(phone) <= 40),
  cv_url text check (char_length(cv_url) <= 500),
  source text check (char_length(source) <= 120),
  stage text not null default 'applied'
    check (stage in ('applied', 'screening', 'interview', 'test', 'offer', 'hired', 'rejected')),
  interview_at timestamptz,
  notes text check (char_length(notes) <= 2000),
  created_at timestamptz not null default now()
);
create index candidates_job_idx on public.candidates (job_id);
create index candidates_stage_idx on public.candidates (stage);

alter table public.ad_insights enable row level security;
alter table public.jobs enable row level security;
alter table public.candidates enable row level security;
revoke all on public.ad_insights, public.jobs, public.candidates from anon, authenticated;
grant select, insert, update, delete on public.ad_insights, public.jobs, public.candidates to service_role;
grant usage, select on all sequences in schema public to service_role;
