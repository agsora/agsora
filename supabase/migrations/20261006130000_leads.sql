-- Contact-form leads. Written only by the site's server (/api/lead) with the
-- secret key, so a lead is kept even when the visitor never sends the
-- WhatsApp message. RLS is on with no policies: the public API can neither
-- read nor write it.

create table public.leads (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 1 and 120),
  company text check (char_length(company) <= 160),
  email text not null check (char_length(email) between 3 and 200),
  phone text not null check (char_length(phone) between 3 and 40),
  need text check (char_length(need) <= 120),
  budget text check (char_length(budget) <= 120),
  description text not null check (char_length(description) between 1 and 4000),
  -- Pricing items the visitor picked (from the price cards or estimator).
  plan text check (char_length(plan) <= 300),
  -- Page the visitor came from, e.g. /services/erp.
  source_page text check (char_length(source_page) <= 300),
  locale text not null check (locale in ('id', 'en', 'zh')),
  status text not null default 'new' check (status in ('new', 'contacted', 'won', 'lost')),
  created_at timestamptz not null default now()
);

comment on table public.leads is 'Contact-form submissions. Written by /api/lead.';

create index leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;
revoke all on public.leads from anon, authenticated;
grant insert, select, update on public.leads to service_role;
