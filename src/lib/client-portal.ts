import "server-only";
import type { Invoice, Quote } from "@/lib/quote";
import { sbSelect } from "@/lib/supabase";

const TOKEN = /^[a-f0-9]{32}$/;

/** The quote behind a public client link. Only released (approved or sent) quotes are visible to clients. */
export async function quoteByToken(token: string): Promise<Quote | null> {
  if (!TOKEN.test(token)) return null;
  const q = (await sbSelect<Quote>("quotes", `select=*&share_token=eq.${token}`))?.[0];
  if (!q || (q.status !== "approved" && q.status !== "sent")) return null;
  return q;
}

export async function invoicesOf(quoteId: number): Promise<Invoice[]> {
  return (await sbSelect<Invoice>("invoices", `select=*&quote_id=eq.${quoteId}&order=seq.asc`)) ?? [];
}
