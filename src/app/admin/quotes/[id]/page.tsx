import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, Mail } from "lucide-react";
import { getSession } from "@/lib/admin-auth";
import { siteConfig } from "@/config/site";
import { billableParts, clientLink, computeTotals, idr, invoiceNumber, planOf, quoteNumber, quoteStatusLabel, type Invoice, type Quote } from "@/lib/quote";
import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "../../shell";
import { getSiteData } from "@/lib/site-content";
import { QuoteEditor } from "../quote-editor";
import { createInvoice } from "../../invoices/actions";
import { documentsOf } from "@/lib/storage";
import type { Subscription } from "@/lib/subscriptions";
import { ProjectPanel } from "./project-panel";
import { reviewQuote, sendContract, sendQuote } from "../actions";

const dateId = (iso: string) => new Date(iso).toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta", day: "numeric", month: "long", year: "numeric" });

export default async function QuotePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ notice?: string; type?: string; edit?: string }>;
}) {
  const gate = await adminGate(["owner", "sales"]);
  if (gate) return gate;
  const session = await getSession();
  if (!session) return null;

  const id = Number((await params).id);
  if (!Number.isInteger(id) || id <= 0) notFound();
  const q = (await sbSelect<Quote>("quotes", `select=*&id=eq.${id}`))?.[0];
  if (!q || (session.role === "sales" && q.sales_id !== session.id)) notFound();

  const { notice, type, edit } = await searchParams;
  const totals = computeTotals(q.items, Number(q.discount_pct), Number(q.tax_pct));
  const owner = session.role === "owner";
  const editable = q.status === "draft" || q.status === "rejected" || (edit === "1" && q.status !== "pending");
  const released = q.status === "approved" || q.status === "sent";
  // Site settings, invoices, documents and subscriptions do not depend on each other: fetch them together.
  const [site, invoicesRaw, docs, subsRaw] = await Promise.all([
    getSiteData(),
    owner && released ? sbSelect<Invoice>("invoices", `select=*&quote_id=eq.${q.id}`) : Promise.resolve([] as Invoice[]),
    released && q.accepted_at ? documentsOf(q.id) : Promise.resolve([]),
    owner && released && q.accepted_at ? sbSelect<Subscription>("subscriptions", `select=*&quote_id=eq.${q.id}&order=created_at.asc`) : Promise.resolve([] as Subscription[]),
  ]);
  const invoices = invoicesRaw ?? [];
  const subs = subsRaw ?? [];
  const parts = released ? billableParts(q) : [];

  return (
    <AdminShell active="quotes" title={`Penawaran ${quoteNumber(q)}`} subtitle={`${q.client_name}${q.client_company ? ` · ${q.client_company}` : ""}`}>
      {notice ? <p className={`sn-notice ${type === "err" ? "err" : ""}`}>{notice}</p> : null}

      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap", marginBottom: "1rem" }}>
        <span className={`sn-badge sn-${q.status}`}>{quoteStatusLabel[q.status]}</span>
        <Link href="/admin/quotes" className="sn-link">
          ← Semua penawaran
        </Link>
      </div>

      {q.review_note && q.status === "rejected" ? (
        <p className="sn-notice err">
          <strong>Catatan dari owner:</strong> {q.review_note}
        </p>
      ) : null}
      {q.review_note && q.status === "approved" ? (
        <p className="sn-notice">
          <strong>Catatan owner:</strong> {q.review_note}
        </p>
      ) : null}

      {owner && q.status === "pending" ? (
        <section className="sn-card" style={{ padding: "1.25rem", marginBottom: "1.5rem", borderLeft: "4px solid var(--sn-warning)" }}>
          <h3 style={{ marginBottom: "0.6rem" }}>Menunggu persetujuanmu</h3>
          <form action={reviewQuote} style={{ display: "flex", flexDirection: "column", gap: "0.6rem", maxWidth: "34rem" }}>
            <input type="hidden" name="id" value={q.id} />
            <textarea name="note" rows={2} maxLength={1000} className="sn-input" placeholder="Catatan (wajib bila minta revisi)" />
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button name="decision" value="approve" className="sn-btn sn-btn-primary">
                Setujui
              </button>
              <button name="decision" value="reject" className="sn-btn">
                Minta revisi
              </button>
            </div>
          </form>
        </section>
      ) : null}

      {released ? (
        <section className="sn-card" style={{ padding: "1.25rem", marginBottom: "1.5rem", borderLeft: "4px solid var(--sn-success)" }}>
          <h3 style={{ marginBottom: "0.4rem" }}>Disetujui{q.approved_at ? ` pada ${dateId(q.approved_at)}` : ""}</h3>
          <p className="sn-muted" style={{ marginBottom: "0.8rem" }}>
            {q.sent_at ? `Terkirim ke ${q.client_email} pada ${dateId(q.sent_at)}.` : "Unduh PDF atau kirim langsung ke email klien."}
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <a className="sn-btn" href={`/admin/quotes/${q.id}/pdf`}>
              <Download size={14} /> Unduh Proposal
            </a>
            <a className="sn-btn" href={`/admin/quotes/${q.id}/contract`}>
              <Download size={14} /> Unduh Perjanjian
            </a>
            <form action={sendQuote}>
              <input type="hidden" name="id" value={q.id} />
              <button className="sn-btn sn-btn-primary" disabled={!q.client_email}>
                <Mail size={14} /> {q.status === "sent" ? "Kirim ulang" : "Kirim ke email klien"}
              </button>
            </form>
            <form action={sendContract}>
              <input type="hidden" name="id" value={q.id} />
              <button className="sn-btn" disabled={!q.client_email}>
                <Mail size={14} /> Kirim perjanjian ke klien
              </button>
            </form>
            {q.status !== "pending" ? (
              <Link href={`/admin/quotes/${q.id}?edit=1`} className="sn-btn">
                Ubah (perlu persetujuan ulang)
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}

      {released ? (
        <section className="sn-card" style={{ padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h3 style={{ marginBottom: "0.4rem" }}>Halaman klien</h3>
          {q.share_token ? (
            <p style={{ marginBottom: "0.6rem" }}>
              <code style={{ userSelect: "all", wordBreak: "break-all" }}>{clientLink(siteConfig.url, q.share_token)}</code>
            </p>
          ) : (
            <p className="sn-muted" style={{ marginBottom: "0.6rem" }}>
              Tautan klien aktif setelah migrasi database portal klien dijalankan.
            </p>
          )}
          <p className="sn-muted" style={{ marginBottom: "0.4rem" }}>
            Klien bisa melihat proposal, menyetujui, mengunduh perjanjian, dan melihat invoice di tautan ini.
          </p>
          <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
            <li>{q.viewed_at ? `Dibuka klien pertama kali ${dateId(q.viewed_at)}` : "Belum dibuka klien"}</li>
            <li>{q.accepted_at ? `Disetujui oleh ${q.accepted_name} pada ${dateId(q.accepted_at)}` : "Belum disetujui klien"}</li>
            {q.client_note ? <li>Catatan klien: {q.client_note}</li> : null}
          </ul>
        </section>
      ) : null}

      {released && q.accepted_at ? <ProjectPanel q={q} owner={owner} docs={docs} subs={subs} /> : null}

      {owner && released && parts.length ? (
        <section className="sn-card" style={{ padding: "1.25rem", marginBottom: "1.5rem" }}>
          <h3 style={{ marginBottom: "0.6rem" }}>Termin & invoice</h3>
          <div style={{ display: "grid", gap: "0.6rem" }}>
            {parts.map((p) => {
              const inv = invoices.find((i) => i.seq === p.seq && i.status !== "void");
              return (
                <div key={p.seq} style={{ display: "flex", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                  <div>
                    <strong>{p.label}</strong>
                    <div className="sn-muted">{idr(p.amount)}</div>
                  </div>
                  {inv ? (
                    <Link href="/admin/invoices?s=all" className={`sn-badge ${inv.status === "paid" ? "sn-approved" : "sn-pending"}`}>
                      {invoiceNumber(inv)} · {inv.status === "paid" ? "Lunas" : "Belum dibayar"}
                    </Link>
                  ) : (
                    <form action={createInvoice}>
                      <input type="hidden" name="quote_id" value={q.id} />
                      <input type="hidden" name="seq" value={p.seq} />
                      <input type="hidden" name="return" value={`/admin/quotes/${q.id}`} />
                      <button className="sn-btn">Terbitkan invoice</button>
                    </form>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {editable ? (
        <QuoteEditor
          pricing={site.pricing}
          ppn={site.tax.pkp ? site.tax.ppnRate : 0}
          pph23={site.tax.pph23Note}
          promo={site.promo}
          initial={{
            id: q.id,
            lead_id: q.lead_id,
            client_name: q.client_name,
            client_email: q.client_email ?? "",
            client_company: q.client_company ?? "",
            items: q.items,
            discount_pct: Number(q.discount_pct),
            tax_pct: Number(q.tax_pct),
            valid_until: q.valid_until ?? "",
            terms: q.terms ?? "",
            payment_plan: planOf(q),
          }}
        />
      ) : (
        <section className="sn-card">
          <div className="sn-table-wrap">
            <table className="sn-table">
              <thead>
                <tr>
                  <th>Deskripsi</th>
                  <th>Qty</th>
                  <th>Harga satuan</th>
                  <th style={{ textAlign: "right" }}>Jumlah</th>
                </tr>
              </thead>
              <tbody>
                {q.items.map((it, i) => (
                  <tr key={i}>
                    <td>
                      {it.name}
                      {it.note ? <div className="sn-muted">{it.note}</div> : null}
                    </td>
                    <td>{it.qty}</td>
                    <td>{idr(it.unit_price)}</td>
                    <td style={{ textAlign: "right" }}>{idr(it.qty * it.unit_price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="sn-totals" style={{ padding: "1.25rem 1.5rem" }}>
            <span className="sn-muted">Subtotal</span>
            <span style={{ textAlign: "right" }}>{idr(totals.subtotal)}</span>
            {totals.discount ? (
              <>
                <span className="sn-muted">Diskon {Number(q.discount_pct)}%</span>
                <span style={{ textAlign: "right" }}>-{idr(totals.discount)}</span>
              </>
            ) : null}
            {totals.tax ? (
              <>
                <span className="sn-muted">PPN {Number(q.tax_pct)}%</span>
                <span style={{ textAlign: "right" }}>{idr(totals.tax)}</span>
              </>
            ) : null}
            <strong>Total</strong>
            <strong style={{ textAlign: "right", fontSize: "1.15rem" }}>{idr(totals.total)}</strong>
          </div>
          {q.terms ? <p className="sn-muted" style={{ padding: "0 1.5rem 1.5rem", whiteSpace: "pre-wrap" }}>{q.terms}</p> : null}
        </section>
      )}
    </AdminShell>
  );
}
