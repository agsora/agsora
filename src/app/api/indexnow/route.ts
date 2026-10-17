import sitemap from "@/app/sitemap";
import { submitToIndexNow } from "@/lib/indexnow";

/**
 * Daily IndexNow ping, run by Vercel Cron (see vercel.json). Sends every
 * sitemap URL whose lastmod falls in the last few days, so new articles and
 * edited pages reach Bing without anyone submitting them by hand. The window
 * is wider than a day so a missed or failed run is caught by the next one.
 *
 * Vercel sends "Authorization: Bearer $CRON_SECRET" when that env var is set;
 * set it to keep anyone else from triggering the ping. ?all=1 resubmits the
 * whole sitemap and only works with the secret.
 */
const RECENT_DAYS = 3;

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const authorized = Boolean(secret) && request.headers.get("authorization") === `Bearer ${secret}`;
  if (secret && !authorized) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const all = authorized && new URL(request.url).searchParams.get("all") === "1";
  const since = Date.now() - RECENT_DAYS * 24 * 60 * 60 * 1000;
  const urls = sitemap()
    .filter((entry) => all || new Date(entry.lastModified ?? 0).getTime() >= since)
    .map((entry) => entry.url);

  const result = urls.length ? await submitToIndexNow(urls) : { submitted: 0, status: [] };
  return Response.json(
    { ...result, window: all ? "all" : `${RECENT_DAYS} days` },
    { headers: { "Cache-Control": "no-store" } }
  );
}
