-- Recruitment repair + the sales agent programme.
-- Safe to run even if 20261115130000_ads_recruitment.sql never ran: every table and column is created only if missing.

create table if not exists public.jobs (
  id bigint generated always as identity primary key,
  title text not null check (char_length(title) between 1 and 160),
  department text check (char_length(department) <= 120),
  status text not null default 'open' check (status in ('open', 'closed')),
  created_at timestamptz not null default now()
);

create table if not exists public.candidates (
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
create index if not exists candidates_job_idx on public.candidates (job_id);

-- Public job posts on the careers page.
alter table public.jobs
  add column if not exists kind text not null default 'employee' check (kind in ('employee', 'agent')),
  add column if not exists location text check (char_length(location) <= 120),
  add column if not exists summary text check (char_length(summary) <= 400),
  add column if not exists description text check (char_length(description) <= 6000),
  add column if not exists published boolean not null default false;

-- What applicants tell us on the web form.
alter table public.candidates
  add column if not exists city text check (char_length(city) <= 120),
  add column if not exists experience text check (char_length(experience) <= 2000),
  add column if not exists network text check (char_length(network) <= 2000),
  add column if not exists applied_via text not null default 'manual' check (applied_via in ('manual', 'web')),
  -- Structured answers from the careers form (education, availability, sales experience, segments...).
  add column if not exists answers jsonb;

-- Sales agents: independent partners paid by commission only.
create table if not exists public.agents (
  id bigint generated always as identity primary key,
  candidate_id bigint references public.candidates (id) on delete set null,
  code text not null unique check (code ~ '^AG-[0-9]{3,5}$'),
  name text not null check (char_length(name) between 1 and 160),
  phone text check (char_length(phone) <= 40),
  email text check (char_length(email) <= 200),
  city text check (char_length(city) <= 120),
  -- Commission: full rate when the month's collected revenue reaches the target, reduced rate otherwise.
  rate_full numeric not null default 10 check (rate_full between 0 and 50),
  rate_reduced numeric not null default 5 check (rate_reduced between 0 and 50),
  monthly_target bigint not null default 100000000 check (monthly_target >= 0),
  status text not null default 'active' check (status in ('active', 'inactive')),
  joined_at date not null default current_date,
  created_at timestamptz not null default now()
);

-- Which agent brought a deal.
alter table public.quotes add column if not exists agent_id bigint references public.agents (id) on delete set null;
create index if not exists quotes_agent_idx on public.quotes (agent_id);

-- Commission paid per agent per month (a record of what was paid out).
create table if not exists public.agent_payouts (
  id bigint generated always as identity primary key,
  agent_id bigint not null references public.agents (id) on delete cascade,
  period text not null check (period ~ '^[0-9]{4}-[0-9]{2}$'),
  revenue bigint not null,
  rate numeric not null,
  amount bigint not null,
  paid_at timestamptz not null default now(),
  unique (agent_id, period)
);

alter table public.jobs enable row level security;
alter table public.candidates enable row level security;
alter table public.agents enable row level security;
alter table public.agent_payouts enable row level security;
revoke all on public.jobs, public.candidates, public.agents, public.agent_payouts from anon, authenticated;
grant select, insert, update, delete on public.jobs, public.candidates, public.agents, public.agent_payouts to service_role;
grant usage, select on all sequences in schema public to service_role;
