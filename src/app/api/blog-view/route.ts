import { getPostBySlug, isPostAvailable } from "@/config/blog";
import { isLocale } from "@/i18n/routing";
import { clientIp, rateLimit } from "@/lib/rate-limit";

/**
 * Records one blog article open in Supabase (table `blog_views`, summarised
 * by the `blog_view_stats` view). Called from the article page on mount.
 *
 * Writes go through here, with the secret key, rather than straight from the
 * browser: the table stays closed to the public API, and only slugs that
 * exist in the requested language get recorded.
 *
 * Needs SUPABASE_URL and SUPABASE_SECRET_KEY. Without them (local dev, say)
 * this quietly does nothing.
 */

const BOT = /bot|crawl|spider|slurp|headless|lighthouse|curl|wget|python|node-fetch|axios/i;

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function POST(request: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return new Response(null, { status: 204 });

  // Bots and floods would inflate the public view counts and the table.
  if (BOT.test(request.headers.get("user-agent") ?? "")) return new Response(null, { status: 204 });
  if (!rateLimit(`view:${clientIp(request)}`, 30, 60_000)) return new Response(null, { status: 429 });

  let body: { slug?: unknown; locale?: unknown; visitorId?: unknown };
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const { slug, locale, visitorId } = body;
  if (typeof slug !== "string" || typeof locale !== "string" || !isLocale(locale)) {
    return new Response(null, { status: 400 });
  }
  const post = getPostBySlug(slug);
  if (!post || !isPostAvailable(post, locale)) {
    return new Response(null, { status: 404 });
  }

  const res = await fetch(`${url}/rest/v1/blog_views`, {
    method: "POST",
    headers: {
      apikey: key,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      slug: post.slug,
      title: post.title,
      locale,
      visitor_id: typeof visitorId === "string" && UUID.test(visitorId) ? visitorId : null,
    }),
  });

  if (!res.ok) {
    console.error("blog-view insert failed", res.status);
    return new Response(null, { status: 502 });
  }
  return new Response(null, { status: 204 });
}
