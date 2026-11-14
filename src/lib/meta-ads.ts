import "server-only";
import { sbWrite } from "@/lib/supabase";

/**
 * Pulls daily campaign insights from the Meta Marketing API into
 * public.ad_insights. Env: META_ADS_TOKEN (system-user token with ads_read) and
 * META_AD_ACCOUNT_ID (the act_… id or just its digits).
 */
const API = "https://graph.facebook.com/v21.0";

export type AdInsightRow = {
  campaign_id: string;
  day: string;
  account: string;
  campaign_name: string;
  spend: number;
  impressions: number;
  reach: number;
  clicks: number;
  conversations: number;
  updated_at: string;
};

type Insight = {
  campaign_id: string;
  campaign_name: string;
  date_start: string;
  spend?: string;
  impressions?: string;
  reach?: string;
  inline_link_clicks?: string;
  actions?: { action_type: string; value: string }[];
};
type Page = { data?: Insight[]; paging?: { next?: string }; error?: { message: string } };

const num = (v?: string) => (v === undefined || v === "" ? 0 : Number(v) || 0);
const MESSAGING = /messaging_conversation_started/;

export function metaConfig() {
  const token = process.env.META_ADS_TOKEN;
  const digits = (process.env.META_AD_ACCOUNT_ID ?? "").replace(/\D/g, "");
  return token && digits ? { token, account: `act_${digits}` } : null;
}

const ymd = (d: Date) => d.toISOString().slice(0, 10);

export async function syncMetaAds(days = 30): Promise<{ ok: boolean; rows: number; error?: string }> {
  const cfg = metaConfig();
  if (!cfg) return { ok: false, rows: 0, error: "META_ADS_TOKEN atau META_AD_ACCOUNT_ID belum diisi." };

  const until = new Date();
  const since = new Date(until.getTime() - (Math.max(1, days) - 1) * 86_400_000);
  const range = encodeURIComponent(JSON.stringify({ since: ymd(since), until: ymd(until) }));
  const fields = "campaign_id,campaign_name,spend,impressions,reach,inline_link_clicks,actions";

  const insights: Insight[] = [];
  let next: string | null =
    `${API}/${cfg.account}/insights?level=campaign&time_increment=1&time_range=${range}&fields=${fields}&limit=500&access_token=${cfg.token}`;
  try {
    for (let i = 0; i < 20 && next; i++) {
      const res: Response = await fetch(next, { signal: AbortSignal.timeout(25_000) });
      const page = (await res.json()) as Page;
      if (page.error) return { ok: false, rows: 0, error: page.error.message };
      insights.push(...(page.data ?? []));
      next = page.paging?.next ?? null;
    }
  } catch (e) {
    return { ok: false, rows: 0, error: (e as Error).message };
  }

  const now = new Date().toISOString();
  const rows: AdInsightRow[] = insights.map((i) => ({
    campaign_id: i.campaign_id,
    day: i.date_start,
    account: cfg.account,
    campaign_name: i.campaign_name,
    spend: num(i.spend),
    impressions: num(i.impressions),
    reach: num(i.reach),
    clicks: num(i.inline_link_clicks),
    conversations: (i.actions ?? []).filter((a) => MESSAGING.test(a.action_type)).reduce((m, a) => Math.max(m, num(a.value)), 0),
    updated_at: now,
  }));

  for (let s = 0; s < rows.length; s += 500) {
    const ok = await sbWrite("ad_insights", "POST", rows.slice(s, s + 500), "on_conflict=campaign_id,day", "resolution=merge-duplicates,return=minimal");
    if (!ok) return { ok: false, rows: s, error: "Gagal menyimpan ke Supabase. Pastikan migrasi ads sudah dijalankan." };
  }
  return { ok: true, rows: rows.length };
}
