-- Payment schedule per quote: two instalments (50/50, default) or three (30/50/20).
alter table public.quotes
  add column if not exists payment_plan text not null default '50-50';

alter table public.quotes drop constraint if exists quotes_payment_plan_check;
alter table public.quotes
  add constraint quotes_payment_plan_check check (payment_plan in ('50-50', '30-50-20'));
