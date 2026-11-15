import { emailInvoice } from "@/lib/invoice-mail";
import { notifyOwner } from "@/lib/mail";
import { idr, invoiceNumber, type Invoice, type Quote } from "@/lib/quote";
import { billDueSubscriptions } from "@/lib/subscriptions";
import { sbSelect } from "@/lib/supabase";

export const maxDuration = 60;

/**
 * Daily billing job, run by Vercel Cron (see vercel.json):
 * 1. issues the invoices of subscriptions (maintenance, hosting, SEO) whose bill date is within 3 days;
 * 2. reminds clients of invoices due within 2 days or overdue, at most once every 3 days;
 * 3. sends the owner a short summary of overdue invoices.
 * Closed without CRON_SECRET, like the Meta Ads sync.
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }

  const billing = await billDueSubscriptions();

  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
  const soon = new Date(Date.now() + 2 * 86_400_000).toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
  const due = (await sbSelect<Invoice>("invoices", `select=*&status=eq.unpaid&due_date=lte.${soon}`)) ?? [];
  const cutoff = Date.now() - 3 * 86_400_000;
  let sent = 0;
  const failed: number[] = [];
  for (const inv of due) {
    if (inv.last_reminder_at && new Date(inv.last_reminder_at).getTime() > cutoff) continue;
    const q = (await sbSelect<Quote>("quotes", `select=*&id=eq.${inv.quote_id}`))?.[0];
    if (!q?.client_email) continue;
    const err = await emailInvoice(inv, q, true);
    if (err) failed.push(inv.id);
    else sent++;
  }

  const overdue = due.filter((i) => i.due_date < today);
  if (overdue.length) {
    await notifyOwner(
      `${overdue.length} invoice lewat jatuh tempo`,
      overdue.map((i) => `${invoiceNumber(i)} · ${idr(Number(i.amount))} · jatuh tempo ${i.due_date}`).join("\n"),
    );
  }

  return Response.json({ subscriptionsBilled: billing.issued, subscriptionFailures: billing.failed, checked: due.length, remindersSent: sent, failed }, { headers: { "Cache-Control": "no-store" } });
}
