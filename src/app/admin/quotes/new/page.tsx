import { getSession } from "@/lib/admin-auth";
import { DEFAULT_TERMS } from "@/lib/quote";
import { nowMs } from "@/lib/lead-status";
import { queryLeads } from "@/lib/leads-db";
import { AdminShell, adminGate } from "../../shell";
import { getSiteData } from "@/lib/site-content";
import { adminQuote } from "@/lib/admin-quote";
import { QuoteEditor } from "../quote-editor";

export default async function NewQuotePage({ searchParams }: { searchParams: Promise<{ lead?: string; parent?: string; notice?: string; type?: string }> }) {
  const gate = await adminGate(["owner", "sales"]);
  if (gate) return gate;
  const session = await getSession();
  if (!session) return null;

  const { lead: leadParam, parent: parentParam, notice, type } = await searchParams;
  // Extra work on an existing agreement: the new quote becomes an addendum of the parent.
  const parent = parentParam ? await adminQuote(parentParam) : null;
  const leadId = Number(leadParam);
  // Prefill from a lead; a sales agent can only use their own.
  const lead =
    Number.isInteger(leadId) && leadId > 0
      ? (await queryLeads(`select=*&id=eq.${leadId}${session.role === "sales" ? `&assigned_to=eq.${session.id}` : ""}`))?.[0]
      : undefined;

  const site = await getSiteData();
  const validUntil = new Date(nowMs() + 14 * 86_400_000).toISOString().slice(0, 10);

  return (
    <AdminShell active="quotes" title="Penawaran baru" subtitle={parent ? `Addendum untuk ${parent.client_company || parent.client_name}` : lead ? `Untuk ${lead.name}` : undefined}>
      {notice ? <p className={`sn-notice ${type === "err" ? "err" : ""}`}>{notice}</p> : null}
      <QuoteEditor
        pricing={site.pricing}
        ppn={site.tax.pkp ? site.tax.ppnRate : 0}
        pph23={site.tax.pph23Note}
          promo={site.promo}
        initial={{
          lead_id: parent?.lead_id ?? lead?.id ?? null,
          parent_id: parent?.id ?? null,
          client_name: parent?.client_name ?? lead?.name ?? "",
          client_email: parent?.client_email ?? lead?.email ?? "",
          client_company: parent?.client_company ?? lead?.company ?? "",
          items: [],
          discount_pct: 0,
          tax_pct: 0,
          valid_until: validUntil,
          terms: DEFAULT_TERMS,
          payment_plan: "50-50",
        }}
      />
    </AdminShell>
  );
}
