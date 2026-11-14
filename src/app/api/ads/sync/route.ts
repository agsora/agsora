import { syncMetaAds } from "@/lib/meta-ads";

export const maxDuration = 60;

/**
 * Daily Meta Ads pull, run by Vercel Cron (see vercel.json). Vercel sends
 * "Authorization: Bearer $CRON_SECRET" when that env var is set; without a
 * secret the endpoint is closed, since it spends Meta API quota.
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }
  const result = await syncMetaAds(7);
  return Response.json(result, { status: result.ok ? 200 : 502, headers: { "Cache-Control": "no-store" } });
}
