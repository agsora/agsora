import "server-only";

/** Minimal Supabase REST helper (service key, server only) for the dashboard tables. */
function config() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  return url && key ? { url, key } : null;
}

export const supabaseConfigured = () => config() !== null;

/** GET rows; null when Supabase is not configured or the request fails. */
export async function sbSelect<T>(table: string, query = ""): Promise<T[] | null> {
  const db = config();
  if (!db) return null;
  const res = await fetch(`${db.url}/rest/v1/${table}?${query}`, { headers: { apikey: db.key }, cache: "no-store" });
  return res.ok ? ((await res.json()) as T[]) : null;
}

/** INSERT / PATCH / DELETE; returns true on success. `prefer` e.g. "resolution=merge-duplicates". */
export async function sbWrite(
  table: string,
  method: "POST" | "PATCH" | "DELETE",
  body: unknown,
  query = "",
  prefer = "return=minimal"
): Promise<boolean> {
  const db = config();
  if (!db) return false;
  const res = await fetch(`${db.url}/rest/v1/${table}${query ? `?${query}` : ""}`, {
    method,
    headers: { apikey: db.key, "Content-Type": "application/json", Prefer: prefer },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  return res.ok;
}
