-- Blog readership: one row per article open, written only by the site's
-- server (/api/blog-view) with the secret key. RLS is on with no policies,
-- so the public API can neither read nor write it.

create table public.blog_views (
  id bigint generated always as identity primary key,
  slug text not null check (char_length(slug) between 1 and 200),
  -- Indonesian title at the time of the open, so the stats read without
  -- having to look slugs up in the codebase.
  title text not null check (char_length(title) <= 300),
  locale text not null check (locale in ('id', 'en', 'zh')),
  -- Random ID kept in the reader's browser; identifies a browser, not a person.
  visitor_id uuid,
  viewed_at timestamptz not null default now()
);

comment on table public.blog_views is
  'One row each time a blog article is opened. Written by /api/blog-view.';

create index blog_views_slug_viewed_at_idx
  on public.blog_views (slug, viewed_at desc);

alter table public.blog_views enable row level security;
revoke all on public.blog_views from anon, authenticated;

-- Per-article summary: how many opens, how many different readers, and
-- when it was last opened (Jakarta time).
create view public.blog_view_stats
with (security_invoker = true) as
select
  slug,
  max(title) as title,
  count(*) as total_opens,
  count(distinct visitor_id) as unique_readers,
  count(*) filter (where locale = 'id') as opens_id,
  count(*) filter (where locale = 'en') as opens_en,
  count(*) filter (where locale = 'zh') as opens_zh,
  max(viewed_at) as last_opened_at,
  to_char(max(viewed_at) at time zone 'Asia/Jakarta', 'DD-MM-YYYY HH24:MI')
    || ' WIB' as last_opened_wib
from public.blog_views
group by slug
order by last_opened_at desc;

comment on view public.blog_view_stats is
  'Opens, unique readers, and last open time (WIB) per blog article.';

revoke all on public.blog_view_stats from anon, authenticated;
