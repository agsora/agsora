-- Allow the tax settings row (PKP status, PPN rate, NPWP) in site_content.
alter table public.site_content drop constraint if exists site_content_key_check;
alter table public.site_content
  add constraint site_content_key_check check (key in ('pricing', 'service_prices', 'contact', 'proposal', 'tax'));
