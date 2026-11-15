import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, Mail } from "lucide-react";
import { getSession } from "@/lib/admin-auth";
import { computeTotals, idr, quoteNumber, quoteStatusLabel, type Quote } from "@/lib/quote";
import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "../../shell";
import { QuoteEditor } from "../quote-editor";
import { reviewQuote, sendQuote } from "../actions";

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
              <Download size={14} /> Unduh PDF
            </a>
            <form action={sendQuote}>
              <input type="hidden" name="id" value={q.id} />
              <button className="sn-btn sn-btn-primary" disabled={!q.client_email}>
                <Mail size={14} /> {q.status === "sent" ? "Kirim ulang" : "Kirim ke email klien"}
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

      {editable ? (
        <QuoteEditor
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
