-- Newer Supabase projects don't grant new public objects to service_role
-- automatically. The site's server (secret key = service_role) inserts into
-- blog_views and reads blog_view_stats, so grant exactly that. anon and
-- authenticated stay locked out.

grant insert, select on public.blog_views to service_role;
grant select on public.blog_view_stats to service_role;
