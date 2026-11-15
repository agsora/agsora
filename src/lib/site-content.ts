import "server-only";
import { defaultSiteData, type SiteData } from "@/config/site-data";

export const SITE_CONTENT_TAG = "site-content";

type Row = { key: keyof SiteData | "service_prices"; value: unknown };

/**
 * Website content with the owner's overrides applied. Cached and tagged, so a dashboard save
 * (revalidateTag) updates the live site without a redeploy. Falls back to the codebase defaults
 * when Supabase is not configured or the table does not exist yet.
 */
export async function getSiteData(): Promise<SiteData> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return defaultSiteData;

  try {
    const res = await fetch(`${url}/rest/v1/site_content?select=key,value`, {
      headers: { apikey: key },
      next: { tags: [SITE_CONTENT_TAG], revalidate: 300 },
    });
    if (!res.ok) return defaultSiteData;
    const rows = (await res.json()) as Row[];
    const data: SiteData = { ...defaultSiteData };
    for (const { key: k, value } of rows) {
      if (k === "pricing" && Array.isArray(value)) data.pricing = value as SiteData["pricing"];
      else if (k === "service_prices" && value && typeof value === "object") data.servicePrices = { ...data.servicePrices, ...(value as Record<string, number>) };
      else if (k === "contact" && value && typeof value === "object") data.contact = { ...data.contact, ...(value as object) };
      else if (k === "proposal" && value && typeof value === "object") data.proposal = { ...data.proposal, ...(value as object) };
    }
    return data;
  } catch {
    return defaultSiteData;
  }
}
