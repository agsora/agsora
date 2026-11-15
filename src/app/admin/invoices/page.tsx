import Link from "next/link";
import { Download } from "lucide-react";
import { idr, invoiceNumber, quoteNumber, type Invoice, type Quote } from "@/lib/quote";
import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "../shell";
import { markPaid, sendInvoice, voidInvoice } from "./actions";

const dateId = (iso: string) => new Date(iso).toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta", day: "numeric", month: "short", year: "numeric" });
const today = () => new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });

export default async function InvoicesPage({ searchParams }: { searchParams: Promise<{ notice?: string; type?: string; s?: string }> }) {
  const gate = await adminGate();
  if (gate) return gate;
  const { notice, type, s } = await searchParams;
  const filter = s === "paid" ? "paid" : s === "all" ? "all" : "unpaid";

  const rows = (await sbSelect<Invoice>("invoices", `select=*&status=neq.void${filter === "all" ? "" : `&status=eq.${filter}`}&order=due_date.asc&limit=300`)) ?? [];
  const quotes = new Map(((await sbSelect<Quote>("quotes", "select=id,client_name,client_company,client_email,created_at")) ?? []).map((q) => [q.id, q]));

  const now = today();
  const open = rows.filter((r) => r.status === "unpaid");
  const overdue = open.filter((r) => r.due_date < now);
  const sum = (l: Invoice[]) => l.reduce((a, r) => a + Number(r.amount), 0);

  const tab = (key: string, label: string) => (
    <Link href={`/admin/invoices?s=${key}`} className={`sn-btn ${filter === key ? "sn-btn-primary" : ""}`}>
      {label}
    </Link>
  );

  return (
    <AdminShell active="invoices" title="Invoice & Pembayaran" subtitle="Tagihan per termin dari penawaran yang disetujui. Pengingat jatuh tempo dikirim otomatis tiap hari.">
      {notice ? <p className={`sn-notice ${type === "err" ? "err" : ""}`}>{notice}</p> : null}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
        <div className="sn-card" style={{ padding: "1rem 1.25rem" }}>
          <span className="sn-muted">Belum dibayar</span>
          <h3>{idr(sum(open))}</h3>
        </div>
        <div className="sn-card" style={{ padding: "1rem 1.25rem" }}>
          <span className="sn-muted">Lewat jatuh tempo</span>
          <h3 style={{ color: overdue.length ? "var(--sn-danger)" : undefined }}>
            {idr(sum(overdue))} ({overdue.length})
          </h3>
        </div>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        {tab("unpaid", "Belum dibayar")}
        {tab("paid", "Lunas")}
        {tab("all", "Semua")}
      </div>
      <section className="sn-card">
        <div className="sn-table-wrap">
          <table className="sn-table">
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Klien</th>
                <th>Termin</th>
                <th>Jatuh tempo</th>
                <th style={{ textAlign: "right" }}>Jumlah</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="sn-muted" style={{ padding: "1.5rem" }}>
                    Belum ada invoice. Buat dari halaman penawaran yang sudah disetujui.
                  </td>
                </tr>
              ) : null}
              {rows.map((r) => {
                const q = quotes.get(r.quote_id);
                const late = r.status === "unpaid" && r.due_date < now;
                return (
                  <tr key={r.id}>
                    <td>
                      <strong>{invoiceNumber(r)}</strong>
                      {q ? (
                        <div>
                          <Link href={`/admin/quotes/${q.id}`} className="sn-link">
                            {quoteNumber(q)}
                          </Link>
                        </div>
                      ) : null}
                    </td>
                    <td>{q?.client_company || q?.client_name || "-"}</td>
                    <td>{r.label}</td>
                    <td style={{ color: late ? "var(--sn-danger)" : undefined }}>
                      {dateId(r.due_date)}
                      {late ? " (terlambat)" : ""}
                    </td>
                    <td style={{ textAlign: "right" }}>{idr(Number(r.amount))}</td>
                    <td>
                      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                        <a className="sn-btn" href={`/admin/invoices/${r.id}/pdf`} aria-label="Unduh PDF">
                          <Download size={14} />
                        </a>
                        {r.status === "unpaid" ? (
                          <>
                            <form action={sendInvoice}>
                              <input type="hidden" name="id" value={r.id} />
                              <input type="hidden" name="reminder" value={r.sent_at ? "1" : "0"} />
                              <button className="sn-btn" disabled={!q?.client_email}>
                                {r.sent_at ? "Ingatkan" : "Kirim"}
                              </button>
                            </form>
                            <form action={markPaid}>
                              <input type="hidden" name="id" value={r.id} />
                              <button className="sn-btn sn-btn-primary">Lunas</button>
                            </form>
                            <form action={voidInvoice}>
                              <input type="hidden" name="id" value={r.id} />
                              <button className="sn-btn">Batal</button>
                            </form>
                          </>
                        ) : (
                          <span className="sn-badge sn-approved">Lunas{r.paid_at ? ` ${dateId(r.paid_at)}` : ""}</span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </AdminShell>
  );
}
