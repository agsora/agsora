import Link from "next/link";
import { Plus } from "lucide-react";
import { getSession } from "@/lib/admin-auth";
import { QUOTE_STATUSES, computeTotals, idr, quoteNumber, quoteStatusLabel, type Quote, type QuoteStatus } from "@/lib/quote";
import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "../shell";

export default async function QuotesPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const gate = await adminGate(["owner", "sales"]);
  if (gate) return gate;
  const session = await getSession();
  if (!session) return null;

  const { status } = await searchParams;
  const active = QUOTE_STATUSES.includes(status as QuoteStatus) ? (status as QuoteStatus) : undefined;
  const scope = session.role === "sales" ? `&sales_id=eq.${session.id}` : "";
  const [quotes, salesUsers] = await Promise.all([
    sbSelect<Quote>("quotes", `select=*&order=updated_at.desc&limit=300${scope}${active ? `&status=eq.${active}` : ""}`),
    sbSelect<{ id: number; name: string }>("sales_users", "select=id,name"),
  ]);
  const salesNames = new Map((salesUsers ?? []).map((u) => [u.id, u.name]));
  const pending = (quotes ?? []).filter((q) => q.status === "pending").length;

  return (
    <AdminShell
      active="quotes"
      title="Proposal Penawaran"
      subtitle={session.role === "owner" ? "Setujui penawaran sebelum sales mengirimnya ke klien" : "Susun harga, ajukan ke owner, lalu kirim setelah disetujui"}
    >
      <section className="sn-card">
        <div className="sn-card-header">
          <h3 className="sn-card-title">
            Daftar penawaran {session.role === "owner" && pending > 0 ? <span className="sn-badge sn-pending">{pending} menunggu</span> : null}
          </h3>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
            <nav style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
              <Link href="/admin/quotes" className={`sn-pill ${!active ? "active" : ""}`}>
                Semua
              </Link>
              {QUOTE_STATUSES.map((s) => (
                <Link key={s} href={`/admin/quotes?status=${s}`} className={`sn-pill ${active === s ? "active" : ""}`}>
                  {quoteStatusLabel[s]}
                </Link>
              ))}
            </nav>
            <Link href="/admin/quotes/new" className="sn-btn sn-btn-primary">
              <Plus size={14} /> Penawaran baru
            </Link>
          </div>
        </div>

        {quotes === null ? (
          <p className="sn-empty">
            Tabel <code>quotes</code> belum bisa dibaca. Jalankan migrasi <code>20261116120000_sales_quotes_content.sql</code>.
          </p>
        ) : quotes.length === 0 ? (
          <p className="sn-empty">Belum ada penawaran.</p>
        ) : (
          <div className="sn-table-wrap">
            <table className="sn-table">
              <thead>
                <tr>
                  <th>Nomor</th>
                  <th>Klien</th>
                  {session.role === "owner" ? <th>Sales</th> : null}
                  <th>Total</th>
                  <th>Status</th>
                  <th>Diperbarui</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {quotes.map((q) => (
                  <tr key={q.id}>
                    <td>{quoteNumber(q)}</td>
                    <td>
                      <strong>{q.client_name}</strong>
                      {q.client_company ? <div className="sn-muted">{q.client_company}</div> : null}
                    </td>
                    {session.role === "owner" ? <td>{q.sales_id ? (salesNames.get(q.sales_id) ?? `#${q.sales_id}`) : "Owner"}</td> : null}
                    <td>{idr(computeTotals(q.items, Number(q.discount_pct), Number(q.tax_pct)).total)}</td>
                    <td>
                      <span className={`sn-badge sn-${q.status}`}>{quoteStatusLabel[q.status]}</span>
                    </td>
                    <td className="sn-muted">{new Date(q.updated_at).toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta" })}</td>
                    <td>
                      <Link href={`/admin/quotes/${q.id}`} className="sn-btn sn-btn-sm">
                        {session.role === "owner" && q.status === "pending" ? "Tinjau" : "Buka"}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </AdminShell>
  );
}
