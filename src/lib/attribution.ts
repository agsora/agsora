/**
 * First-touch attribution: where a visitor first came from (UTM tags, referrer, landing page).
 * Captured once per browser by <AttributionCapture /> and sent with every lead, so the dashboard
 * can show which channel (ads, Instagram, Google...) brings clients.
 */
export type Attribution = {
  source?: string;
  medium?: string;
  campaign?: string;
  referrer?: string;
  landing?: string;
  at?: string;
};

const KEY = "agsora-attr";

/** Browser only. Keeps the first visit; a later visit that carries UTM tags (a new ad click) replaces it. */
export function captureAttribution() {
  try {
    const url = new URL(window.location.href);
    const utm = (k: string) => url.searchParams.get(`utm_${k}`)?.slice(0, 100) || undefined;
    const tagged = utm("source") || url.searchParams.get("gclid") || url.searchParams.get("fbclid");
    if (localStorage.getItem(KEY) && !tagged) return;
    let referrer: string | undefined;
    try {
      const r = document.referrer ? new URL(document.referrer) : null;
      referrer = r && r.host !== url.host ? r.host : undefined;
    } catch {
      referrer = undefined;
    }
    const data: Attribution = {
      source: utm("source") ?? (url.searchParams.get("gclid") ? "google-ads" : url.searchParams.get("fbclid") ? "facebook" : undefined),
      medium: utm("medium"),
      campaign: utm("campaign"),
      referrer,
      landing: url.pathname.slice(0, 200),
      at: new Date().toISOString(),
    };
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* storage blocked: no attribution */
  }
}

export function readAttribution(): Attribution | undefined {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : undefined;
  } catch {
    return undefined;
  }
}

/** Server side: keep only short string fields. */
export function cleanAttribution(v: unknown): Attribution | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Record<string, unknown>;
  const out: Attribution = {};
  for (const k of ["source", "medium", "campaign", "referrer", "landing", "at"] as const) {
    if (typeof o[k] === "string" && o[k]) out[k] = (o[k] as string).slice(0, 200);
  }
  return Object.keys(out).length ? out : null;
}

/** A short channel name for reports: utm source, else the referring site, else "langsung". */
export function channelOf(a: Attribution | null | undefined): string {
  if (!a) return "tidak diketahui";
  if (a.source) return a.medium ? `${a.source} / ${a.medium}` : a.source;
  if (a.referrer) {
    const r = a.referrer.replace(/^www\./, "");
    if (/google\./.test(r)) return "google (organik)";
    if (/instagram|facebook|fb\.|t\.co|tiktok|linkedin|youtube/.test(r)) return r;
    return r;
  }
  return "langsung";
}
