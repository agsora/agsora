import "server-only";
import { emailInvoice } from "@/lib/invoice-mail";
import type { Invoice, Quote } from "@/lib/quote";
import { sbInsert, sbSelect, sbUpdate } from "@/lib/supabase";

export type Subscription = {
  id: number;
  quote_id: number;
  label: string;
  amount: number;
  period: "monthly" | "yearly";
  next_bill: string;
  active: boolean;
  created_at: string;
};

export const periodLabel = { monthly: "per bulan", yearly: "per tahun" } as const;

const day = (offset: number) => new Date(Date.now() + offset * 86_400_000).toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });

/** The same day one period later (end-of-month safe: 31 Jan + 1 month = 28/29 Feb). */
function addPeriod(date: string, period: Subscription["period"]) {
  const [y, m, d] = date.split("-").map(Number);
  const months = period === "yearly" ? 12 : 1;
  const target = new Date(Date.UTC(y, m - 1 + months, 1));
  const last = new Date(Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0)).getUTCDate();
  target.setUTCDate(Math.min(d, last));
  return target.toISOString().slice(0, 10);
}

/**
 * Issue the invoice of every active subscription whose bill date is within 3 days, email it to the client,
 * and move the bill date one period ahead. Safe to run more than once a day: the date moves before the next run.
 */
export async function billDueSubscriptions(): Promise<{ issued: number; failed: number[] }> {
  const due = (await sbSelect<Subscription>("subscriptions", `select=*&active=eq.true&next_bill=lte.${day(3)}`)) ?? [];
  let issued = 0;
  const failed: number[] = [];
  for (const s of due) {
    const moved = await sbUpdate<Subscription>("subscriptions", { next_bill: addPeriod(s.next_bill, s.period) }, `id=eq.${s.id}&next_bill=eq.${s.next_bill}`);
    if (!moved?.length) continue; // another run already billed this period
    const periodName = new Date(`${s.next_bill}T00:00:00+07:00`).toLocaleDateString("id-ID", { month: "long", year: "numeric", timeZone: "Asia/Jakarta" });
    const inv = (
      await sbInsert<Invoice>("invoices", {
        quote_id: s.quote_id,
        seq: null,
        subscription_id: s.id,
        label: `${s.label} (${s.period === "yearly" ? "tahun" : "periode"} ${periodName})`,
        amount: s.amount,
        due_date: s.next_bill,
      })
    )?.[0];
    if (!inv) {
      failed.push(s.id);
      continue;
    }
    issued++;
    const q = (await sbSelect<Quote>("quotes", `select=*&id=eq.${s.quote_id}`))?.[0];
    if (q?.client_email) await emailInvoice(inv, q, false);
  }
  return { issued, failed };
}
