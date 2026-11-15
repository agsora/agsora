import "server-only";
import { getSession } from "@/lib/admin-auth";
import type { Quote } from "@/lib/quote";
import { sbSelect } from "@/lib/supabase";

/** The quote behind an admin download route, if the signed-in user may see it (owner: any, sales: own). */
export async function adminQuote(rawId: string, released = true): Promise<Quote | null> {
  const session = await getSession();
  if (!session) return null;
  const id = Number(rawId);
  if (!Number.isInteger(id) || id <= 0) return null;
  const q = (await sbSelect<Quote>("quotes", `select=*&id=eq.${id}`))?.[0];
  if (!q || (session.role === "sales" && q.sales_id !== session.id)) return null;
  if (released && q.status !== "approved" && q.status !== "sent") return null;
  return q;
}
