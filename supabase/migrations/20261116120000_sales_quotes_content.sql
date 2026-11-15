-- Sales agents, quotes (price offers that the owner approves) and the content calendar.
-- Written only by the site's server with the secret key; RLS on, no policies.

create table public.sales_users (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 1 and 120),
  username text not null unique check (username ~ '^[a-z0-9._-]{3,40}$'),
  -- scrypt$<salt hex>$<hash hex>
  password_hash text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Who works a lead, and what the client wants (the sales worksheet notes).
alter table public.leads
  add column assigned_to bigint references public.sales_users (id) on delete set null,
  add column wishes text check (char_length(wishes) <= 3000);
create index leads_assigned_idx on public.leads (assigned_to);

create table public.quotes (
  id bigint generated always as identity primary key,
  lead_id bigint references public.leads (id) on delete set null,
  -- null when the owner wrote the quote.
  sales_id bigint references public.sales_users (id) on delete set null,
  client_name text not null check (char_length(client_name) between 1 and 160),
  client_email text check (char_length(client_email) <= 200),
  client_company text check (char_length(client_company) <= 160),
  -- [{ "name": text, "qty": int, "unit_price": bigint, "note": text }, ...]
  items jsonb not null default '[]'::jsonb,
  discount_pct numeric not null default 0 check (discount_pct between 0 and 100),
  tax_pct numeric not null default 0 check (tax_pct between 0 and 100),
  valid_until date,
  terms text check (char_length(terms) <= 3000),
  status text not null default 'draft' check (status in ('draft', 'pending', 'approved', 'rejected', 'sent')),
  review_note text check (char_length(review_note) <= 1000),
  approved_at timestamptz,
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index quotes_sales_idx on public.quotes (sales_id);
create index quotes_status_idx on public.quotes (status);

create table public.content_items (
  id bigint generated always as identity primary key,
  publish_date date not null,
  channel text not null check (char_length(channel) <= 60),
  format text check (char_length(format) <= 60),
  title text not null check (char_length(title) between 1 and 200),
  caption text check (char_length(caption) <= 4000),
  status text not null default 'idea' check (status in ('idea', 'draft', 'review', 'approved', 'published')),
  pic text check (char_length(pic) <= 120),
  link text check (char_length(link) <= 500),
  created_at timestamptz not null default now()
);
create index content_items_date_idx on public.content_items (publish_date);

alter table public.sales_users enable row level security;
alter table public.quotes enable row level security;
alter table public.content_items enable row level security;
revoke all on public.sales_users, public.quotes, public.content_items from anon, authenticated;
grant select, insert, update, delete on public.sales_users, public.quotes, public.content_items to service_role;
grant usage, select on all sequences in schema public to service_role;
