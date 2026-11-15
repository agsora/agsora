import "server-only";
import { commissionFor } from "@/config/agent-program";
import type { Invoice, Quote } from "@/lib/quote";
import { sbSelect } from "@/lib/supabase";

export type Agent = {
  id: number;
  candidate_id: number | null;
  code: string;
  name: string;
  phone: string | null;
  email: string | null;
  city: string | null;
  rate_full: number;
  rate_reduced: number;
  monthly_target: number;
  status: "active" | "inactive";
  joined_at: string;
  created_at: string;
};

export type Payout = { id: number; agent_id: number; period: string; revenue: number; rate: number; amount: number; paid_at: string };

/** "2026-11" in Jakarta time. */
export const periodOf = (iso: string) => new Date(iso).toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" }).slice(0, 7);

/** The month before a "YYYY-MM" period. */
export function previousPeriod(period: string) {
  const [y, m] = period.split("-").map(Number);
  return m === 1 ? `${y - 1}-12` : `${y}-${String(m - 1).padStart(2, "0")}`;
}

/**
 * Revenue an agent brought in one month: payments actually received (paid invoices) on the deals attributed to the
 * agent, before VAT. Commission follows money in the bank, never signed-but-unpaid work.
 */
export async function agentMonth(agents: Agent[], period: string) {
  const [y, m] = period.split("-").map(Number);
  const start = `${period}-01T00:00:00+07:00`;
  const end = m === 12 ? `${y + 1}-01-01T00:00:00+07:00` : `${y}-${String(m + 1).padStart(2, "0")}-01T00:00:00+07:00`;
  const [quotes, invoices, payouts] = await Promise.all([
    sbSelect<Quote & { agent_id: number | null }>("quotes", "select=id,agent_id,tax_pct,client_name,client_company,created_at&agent_id=not.is.null"),
    sbSelect<Invoice>("invoices", `select=id,quote_id,amount,paid_at&status=eq.paid&paid_at=gte.${encodeURIComponent(start)}&paid_at=lt.${encodeURIComponent(end)}`),
    sbSelect<Payout>("agent_payouts", `select=*&period=eq.${period}`),
  ]);
  const byQuote = new Map((quotes ?? []).map((q) => [q.id, q]));
  return agents.map((agent) => {
    const deals = (invoices ?? []).filter((i) => byQuote.get(i.quote_id)?.agent_id === agent.id);
    const revenue = Math.round(deals.reduce((sum, i) => sum + Number(i.amount) / (1 + Number(byQuote.get(i.quote_id)?.tax_pct ?? 0) / 100), 0));
    return {
      agent,
      revenue,
      payments: deals.length,
      ...commissionFor(revenue, agent),
      payout: (payouts ?? []).find((p) => p.agent_id === agent.id) ?? null,
      quotes: (quotes ?? []).filter((q) => q.agent_id === agent.id),
    };
  });
}
