/** Pure helpers: KPI math and rule-based recommendations over ad_insights rows. */
export type InsightRow = {
  campaign_id: string;
  campaign_name: string;
  day: string;
  spend: number;
  impressions: number;
  reach: number;
  clicks: number;
  conversations: number;
};

export type Totals = {
  spend: number;
  impressions: number;
  reach: number;
  clicks: number;
  conversations: number;
  ctr: number | null;
  cpc: number | null;
  cpm: number | null;
  costPerConv: number | null;
};

const ratio = (a: number, b: number) => (b > 0 ? a / b : null);

export function totals(rows: InsightRow[]): Totals {
  const t = { spend: 0, impressions: 0, reach: 0, clicks: 0, conversations: 0 };
  for (const r of rows) {
    t.spend += Number(r.spend);
    t.impressions += Number(r.impressions);
    t.reach += Number(r.reach);
    t.clicks += Number(r.clicks);
    t.conversations += Number(r.conversations);
  }
  return {
    ...t,
    ctr: ratio(t.clicks * 100, t.impressions),
    cpc: ratio(t.spend, t.clicks),
    cpm: ratio(t.spend * 1000, t.impressions),
    costPerConv: ratio(t.spend, t.conversations),
  };
}

export type CampaignStat = Totals & { id: string; name: string; frequency: number | null };

export function byCampaign(rows: InsightRow[]): CampaignStat[] {
  const groups = new Map<string, InsightRow[]>();
  for (const r of rows) groups.set(r.campaign_id, [...(groups.get(r.campaign_id) ?? []), r]);
  return [...groups.entries()]
    .map(([id, list]) => {
      const t = totals(list);
      // Reach is per day here, so frequency is approximated as impressions / reach summed over days.
      return { ...t, id, name: list[list.length - 1].campaign_name, frequency: ratio(t.impressions, t.reach) };
    })
    .sort((a, b) => b.spend - a.spend);
}

export type Recommendation = { level: "bad" | "warn" | "good"; text: string };

const idr = (n: number) => `Rp${Math.round(n).toLocaleString("id-ID")}`;

export function recommendations(cur: InsightRow[], prev: InsightRow[]): Recommendation[] {
  const out: Recommendation[] = [];
  const t = totals(cur);
  const p = totals(prev);
  const campaigns = byCampaign(cur);

  for (const c of campaigns) {
    if (c.spend >= 100_000 && c.conversations === 0) {
      out.push({ level: "bad", text: `"${c.name}" menghabiskan ${idr(c.spend)} tanpa satu pun percakapan. Hentikan atau ganti penawaran dan kreatifnya.` });
    }
    if (c.impressions >= 1000 && c.ctr !== null && c.ctr < 1) {
      out.push({ level: "warn", text: `CTR "${c.name}" hanya ${c.ctr.toFixed(2)}%. Uji headline dan gambar baru agar iklan lebih menarik.` });
    }
    if (c.frequency !== null && c.frequency > 3) {
      out.push({ level: "warn", text: `Frekuensi "${c.name}" ${c.frequency.toFixed(1)}x: audiens mulai jenuh (ad fatigue). Ganti kreatif atau perluas audiens.` });
    }
  }

  if (t.costPerConv !== null && p.costPerConv !== null && t.costPerConv > p.costPerConv * 1.3) {
    out.push({
      level: "bad",
      text: `Biaya per percakapan naik ${Math.round((t.costPerConv / p.costPerConv - 1) * 100)}% (${idr(p.costPerConv)} → ${idr(t.costPerConv)}) dibanding periode sebelumnya.`,
    });
  }
  if (t.spend > 0 && p.spend > 0 && t.spend > p.spend * 1.5 && t.conversations <= p.conversations) {
    out.push({ level: "warn", text: `Belanja iklan naik ${Math.round((t.spend / p.spend - 1) * 100)}% tetapi percakapan tidak ikut naik. Tinjau ulang campaign yang baru dibesarkan.` });
  }

  const best = campaigns
    .filter((c) => c.conversations >= 3 && c.costPerConv !== null)
    .sort((a, b) => a.costPerConv! - b.costPerConv!)[0];
  if (best && t.costPerConv !== null && best.costPerConv! < t.costPerConv * 0.8) {
    out.push({ level: "good", text: `"${best.name}" paling efisien (${idr(best.costPerConv!)} per percakapan, rata-rata ${idr(t.costPerConv)}). Pertimbangkan menambah budgetnya.` });
  }

  if (!out.length && t.spend > 0) out.push({ level: "good", text: "Tidak ada masalah yang terdeteksi pada periode ini." });
  return out;
}
