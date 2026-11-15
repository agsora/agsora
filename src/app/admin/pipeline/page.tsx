import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { billableParts, computeTotals, idr, quoteNumber, type Invoice, type Quote } from "@/lib/quote";
import { channelOf, type Attribution } from "@/lib/attribution";
import { nowMs, waLink } from "@/lib/lead-status";
import { queryLeads } from "@/lib/leads-db";
import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "../shell";

type Card = { key: string; title: string; sub: string; value: number; href: string; flag?: string; wa?: string };

const dayAge = (iso: string | null | undefined, now: number) => (iso ? Math.floor((now - new Date(iso).getTime()) / 86_400_000) : 0);

/** Every deal from first contact to the last payment, derived from leads, quotes and invoices. */
export default async function PipelinePage() {
  const gate = await adminGate();
  if (gate) return gate;
  const now = nowMs();

  const quotes = (await sbSelect<Quote>("quotes", "select=*&order=created_at.desc&limit=300")) ?? [];
  const invoices = (await sbSelect<Invoice>("invoices", "select=*&status=neq.void&limit=1000")) ?? [];
  const leads = (await queryLeads("select=*&status=in.(new,contacted)&order=created_at.desc&limit=200")) ?? [];
  // Lead sources over the last 180 days: how many leads each channel brought and how many were won.
  const since = new Date(now - 180 * 86_400_000).toISOString();
  const recent = ((await queryLeads(`select=id,status,attribution&created_at=gte.${since}&limit=2000`)) ?? []) as unknown as { id: number; status: string; attribution?: Attribution | null }[];
  const wonLeadIds = new Set<number>();
  const sources = new Map<string, { leads: number; won: number }>();
  const quotedLeadIds = new Set(quotes.map((q) => q.lead_id).filter((x): x is number => x !== null));

  const cols: { title: string; hint: string; cards: Card[] }[] = [
    { title: "Lead", hint: "Belum ada penawaran", cards: [] },
    { title: "Penawaran disusun", hint: "Draft atau menunggu persetujuan owner", cards: [] },
    { title: "Terkirim", hint: "Menunggu keputusan klien", cards: [] },
    { title: "Disetujui", hint: "Menunggu uang muka", cards: [] },
    { title: "Berjalan", hint: "Sudah ada pembayaran", cards: [] },
    { title: "Lunas", hint: "Semua termin dibayar", cards: [] },
  ];

  for (const l of leads) {
    if (quotedLeadIds.has(l.id)) continue;
    const age = dayAge(l.created_at, now);
    cols[0].cards.push({ key: `l${l.id}`, title: l.name, sub: `${l.company ? `${l.company} · ` : ""}${age} hari${l.need ? ` · ${l.need}` : ""}`, value: Number(l.deal_value ?? 0), href: "/admin/leads", wa: waLink(l.phone) });
  }

  for (const q of quotes) {
    const value = computeTotals(q.items, Number(q.discount_pct), Number(q.tax_pct)).total;
    // Only project instalments decide the stage; recurring subscription bills do not.
    const inv = invoices.filter((i) => i.quote_id === q.id && i.seq !== null);
    const parts = billableParts(q).length;
    const paid = inv.filter((i) => i.status === "paid").length;
    const base = { key: `q${q.id}`, title: q.client_company || q.client_name, value, href: `/admin/quotes/${q.id}` };
    const label = quoteNumber(q);

    if (q.status === "draft" || q.status === "pending" || q.status === "rejected") {
      cols[1].cards.push({ ...base, sub: `${label} · ${q.status === "pending" ? "menunggu persetujuan" : q.status === "rejected" ? "perlu revisi" : "draft"}` });
    } else if (!q.accepted_at) {
      const sentAge = dayAge(q.sent_at ?? q.approved_at, now);
      const flag = q.client_note ? "Klien minta perubahan" : !q.sent_at ? "Belum dikirim" : !q.viewed_at && sentAge >= 2 ? "Belum dibuka" : q.viewed_at && sentAge >= 3 ? "Dibuka, belum setuju" : undefined;
      cols[2].cards.push({ ...base, sub: `${label} · ${q.sent_at ? `${sentAge} hari sejak dikirim` : "disetujui owner"}`, flag });
    } else if (paid === 0) {
      cols[3].cards.push({ ...base, sub: `${label} · disetujui ${dayAge(q.accepted_at, now)} hari lalu`, flag: inv.length ? undefined : "Belum ada invoice" });
    } else if (paid < parts) {
      cols[4].cards.push({ ...base, sub: `${label} · ${paid}/${parts} termin lunas` });
    } else {
      cols[5].cards.push({ ...base, sub: `${label} · lunas` });
    }
  }

  for (const q of quotes) if (q.lead_id && q.accepted_at) wonLeadIds.add(q.lead_id);
  for (const l of recent) {
    const key = channelOf(l.attribution);
    const row = sources.get(key) ?? { leads: 0, won: 0 };
    row.leads++;
    if (l.status === "won" || wonLeadIds.has(l.id)) row.won++;
    sources.set(key, row);
  }
  const sourceRows = [...sources.entries()].sort((a, b) => b[1].leads - a[1].leads);

  const open = [1, 2, 3, 4].reduce((s, i) => s + cols[i].cards.reduce((a, c) => a + c.value, 0), 0);
  const won = cols[5].cards.reduce((a, c) => a + c.value, 0);

  return (
    <AdminShell active="pipeline" title="Pipeline Penjualan" subtitle="Dari lead sampai lunas, otomatis dari data lead, penawaran, dan invoice">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
        <div className="sn-card" style={{ padding: "1rem 1.25rem" }}>
          <span className="sn-muted">Nilai pipeline berjalan</span>
          <h3>{idr(open)}</h3>
        </div>
        <div className="sn-card" style={{ padding: "1rem 1.25rem" }}>
          <span className="sn-muted">Sudah lunas</span>
          <h3>{idr(won)}</h3>
        </div>
      </div>
      {sourceRows.length ? (
        <section className="sn-card" style={{ padding: "1rem 1.25rem", marginBottom: "1.25rem" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>Sumber lead (180 hari)</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {sourceRows.map(([name, r]) => (
              <span key={name} className="sn-badge sn-new">
                {name}: {r.leads} lead · {r.won} deal
              </span>
            ))}
          </div>
        </section>
      ) : null}
      <div className="sn-board">
        {cols.map((col) => (
          <div key={col.title} className="sn-column">
            <div className="sn-column-head">
              <div>
                <strong>{col.title}</strong>
                <div className="sn-muted">{col.hint}</div>
              </div>
              <span className="sn-badge sn-new">{col.cards.length}</span>
            </div>
            {col.cards.length === 0 ? <p className="sn-muted" style={{ padding: "0.5rem" }}>Kosong.</p> : null}
            {col.cards.slice(0, 40).map((c) => (
              <div key={c.key} className={`sn-card sn-kcard ${c.flag ? "due" : ""}`}>
                <Link href={c.href} className="sn-link">
                  <strong>{c.title}</strong>
                </Link>
                <div className="sn-muted">{c.sub}</div>
                {c.value ? <div style={{ marginTop: "0.3rem", fontWeight: 600 }}>{idr(c.value)}</div> : null}
                {c.flag ? <div style={{ marginTop: "0.3rem", color: "var(--sn-danger)", fontWeight: 600, fontSize: "0.85rem" }}>{c.flag}</div> : null}
                {c.wa && col.title === "Lead" ? (
                  <a className="sn-btn sn-btn-sm" style={{ marginTop: "0.5rem" }} href={c.wa} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
