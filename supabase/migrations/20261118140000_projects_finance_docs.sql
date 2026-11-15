-- Project progress, handover (BAST), uploaded documents, subscriptions (recurring bills), expenses,
-- lead attribution and the portfolio setting. Run after 20261118130000_client_portal_invoices_promo.sql.

-- Project progress and handover on the quote.
alter table public.quotes
  add column if not exists project_stage text check (project_stage in ('kickoff', 'analisis', 'pengembangan', 'uat', 'golive', 'selesai')),
  -- [{ "at": iso, "stage": text, "note": text }, ...]
  add column if not exists project_log jsonb not null default '[]'::jsonb,
  add column if not exists contract_active_at timestamptz,
  add column if not exists bast_at timestamptz,
  -- An addendum (extra work) is a quote that points at the original agreement.
  add column if not exists parent_id bigint references public.quotes (id) on delete set null;

-- Files: signed agreements, signed handover, others. Stored in the private "documents" storage bucket.
create table if not exists public.documents (
  id bigint generated always as identity primary key,
  quote_id bigint not null references public.quotes (id) on delete cascade,
  kind text not null check (kind in ('contract', 'bast', 'other')),
  uploaded_by text not null check (uploaded_by in ('client', 'owner')),
  filename text not null check (char_length(filename) <= 200),
  path text not null check (char_length(path) <= 300),
  size_bytes int,
  created_at timestamptz not null default now()
);
create index if not exists documents_quote_idx on public.documents (quote_id);

insert into storage.buckets (id, name, public)
values ('documents', 'documents', false)
on conflict (id) do nothing;

-- Subscription bills (maintenance, hosting, SEO) that issue an invoice every period.
create table if not exists public.subscriptions (
  id bigint generated always as identity primary key,
  quote_id bigint not null references public.quotes (id) on delete cascade,
  label text not null check (char_length(label) <= 200),
  amount bigint not null check (amount > 0),
  period text not null check (period in ('monthly', 'yearly')),
  next_bill date not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Invoices can now also come from a subscription; instalment invoices keep one per (quote, seq).
alter table public.invoices drop constraint if exists invoices_quote_id_seq_key;
alter table public.invoices alter column seq drop not null;
alter table public.invoices drop constraint if exists invoices_seq_check;
alter table public.invoices add constraint invoices_seq_check check (seq is null or seq between 0 and 3);
alter table public.invoices add column if not exists subscription_id bigint references public.subscriptions (id) on delete set null;
create unique index if not exists invoices_quote_seq_uidx on public.invoices (quote_id, seq) where seq is not null;

-- Company expenses, optionally tied to a project.
create table if not exists public.expenses (
  id bigint generated always as identity primary key,
  spent_on date not null,
  category text not null check (char_length(category) <= 60),
  vendor text check (char_length(vendor) <= 120),
  amount bigint not null check (amount > 0),
  note text check (char_length(note) <= 500),
  quote_id bigint references public.quotes (id) on delete set null,
  created_at timestamptz not null default now()
);
create index if not exists expenses_date_idx on public.expenses (spent_on);

-- Where a lead came from: utm_source/medium/campaign, referrer and landing page.
alter table public.leads add column if not exists attribution jsonb;

alter table public.documents enable row level security;
alter table public.subscriptions enable row level security;
alter table public.expenses enable row level security;
revoke all on public.documents, public.subscriptions, public.expenses from anon, authenticated;
grant select, insert, update, delete on public.documents, public.subscriptions, public.expenses to service_role;
grant usage, select on all sequences in schema public to service_role;

alter table public.site_content drop constraint if exists site_content_key_check;
alter table public.site_content
  add constraint site_content_key_check check (key in ('pricing', 'service_prices', 'contact', 'proposal', 'tax', 'promo', 'portfolio'));
