import "server-only";
import type { Lead } from "@/lib/lead-status";

/** Thin Supabase REST client for the leads table (service key, server only). */
function config() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  return url && key ? { url, key } : null;
}

export async function queryLeads(query: string): Promise<Lead[] | null> {
  const db = config();
  if (!db) return null;
  const res = await fetch(`${db.url}/rest/v1/leads?${query}`, { headers: { apikey: db.key }, cache: "no-store" });
  if (!res.ok) return null;
  const rows = (await res.json()) as Partial<Lead>[];
  // Rows from before the CRM migration have no followups column.
  return rows.map((r) => ({ ...r, followups: r.followups ?? [] }) as Lead);
}

export async function patchLead(id: number, patch: Record<string, unknown>): Promise<boolean> {
  const db = config();
  if (!db) return false;
  const res = await fetch(`${db.url}/rest/v1/leads?id=eq.${id}`, {
    method: "PATCH",
    headers: { apikey: db.key, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify(patch),
  });
  return res.ok;
}
