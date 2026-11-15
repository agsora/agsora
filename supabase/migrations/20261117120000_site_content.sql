-- Editable website content (prices, contact details, proposal text). Each row overrides a default from the codebase.
create table public.site_content (
  key text primary key check (key in ('pricing', 'service_prices', 'contact', 'proposal')),
  value jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;
revoke all on public.site_content from anon, authenticated;
grant select, insert, update, delete on public.site_content to service_role;
