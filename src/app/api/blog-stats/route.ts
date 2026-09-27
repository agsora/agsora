import type { BlogStat } from "@/lib/blog-analytics";

/**
 * Public per-article view counts for the blog archive: how many times each
 * post has been opened (all languages together) and when it was last opened.
 * Reads the `blog_view_stats` view with the secret key; exposes only those
 * two numbers per slug, never the underlying rows.
 *
 * Never cached: a reader who opens a post and comes straight back expects
 * to see their view counted. The query is one small aggregate, so running it
 * per archive visit is cheap.
 */

export async function GET() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return Response.json({});

  const res = await fetch(
    `${url}/rest/v1/blog_view_stats?select=slug,total_opens,last_opened_at`,
    { headers: { apikey: key }, cache: "no-store" }
  );
  if (!res.ok) {
    console.error("blog-stats read failed", res.status, await res.text());
    return Response.json({}, { status: 502 });
  }

  const rows: { slug: string; total_opens: number; last_opened_at: string }[] =
    await res.json();
  const stats: Record<string, BlogStat> = Object.fromEntries(
    rows.map((r) => [r.slug, { views: Number(r.total_opens), lastViewedAt: r.last_opened_at }])
  );

  return Response.json(stats, { headers: { "Cache-Control": "no-store" } });
}
