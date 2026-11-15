-- Client portal link per quote, client acceptance, invoices per payment instalment, and the promo setting.

alter table public.quotes
  add column if not exists share_token text not null unique default replace(gen_random_uuid()::text, '-', ''),
  add column if not exists viewed_at timestamptz,
  add column if not exists accepted_at timestamptz,
  add column if not exists accepted_name text check (char_length(accepted_name) <= 160),
  add column if not exists client_note text check (char_length(client_note) <= 1500);

create table if not exists public.invoices (
  id bigint generated always as identity primary key,
  quote_id bigint not null references public.quotes (id) on delete cascade,
  -- Which instalment: 1..3 for project terms, 0 for the subscription services bill.
  seq int not null check (seq between 0 and 3),
  label text not null check (char_length(label) <= 200),
  amount bigint not null check (amount >= 0),
  due_date date not null,
  status text not null default 'unpaid' check (status in ('unpaid', 'paid', 'void')),
  paid_at timestamptz,
  sent_at timestamptz,
  last_reminder_at timestamptz,
  created_at timestamptz not null default now(),
  unique (quote_id, seq)
);
create index if not exists invoices_status_due_idx on public.invoices (status, due_date);

alter table public.invoices enable row level security;
revoke all on public.invoices from anon, authenticated;
grant select, insert, update, delete on public.invoices to service_role;
grant usage, select on all sequences in schema public to service_role;

alter table public.site_content drop constraint if exists site_content_key_check;
alter table public.site_content
  add constraint site_content_key_check check (key in ('pricing', 'service_prices', 'contact', 'proposal', 'tax', 'promo'));
