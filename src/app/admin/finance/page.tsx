import Link from "next/link";
import { Download, Trash2 } from "lucide-react";
import { idr, quoteNumber, type Invoice, type Quote } from "@/lib/quote";
import { sbSelect } from "@/lib/supabase";
import { AdminShell, adminGate } from "../shell";
import { addExpense, deleteExpense } from "./actions";

type Expense = { id: number; spent_on: string; category: string; vendor: string | null; amount: number; note: string | null; quote_id: number | null };

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
const CATEGORIES = ["Server & hosting", "Domain", "Lisensi & software", "Freelancer / tenaga ahli", "Gaji", "Iklan & marketing", "Operasional kantor", "Pajak & legal", "Lainnya"];
const jakartaDate = (iso: string) => new Date(iso).toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });
const today = () => new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" });

/** Money in and out per month, open receivables and rough tax estimates for the owner. */
export default async function FinancePage({ searchParams }: { searchParams: Promise<{ notice?: string; type?: string; year?: string }> }) {
  const gate = await adminGate();
  if (gate) return gate;
  const { notice, type, year: yearParam } = await searchParams;
  const now = today();
  const year = /^\d{4}$/.test(yearParam ?? "") ? Number(yearParam) : Number(now.slice(0, 4));

  const paid = (await sbSelect<Invoice>("invoices", `select=*&status=eq.paid&paid_at=gte.${year}-01-01&paid_at=lt.${year + 1}-01-01`)) ?? [];
  const unpaid = (await sbSelect<Invoice>("invoices", "select=*&status=eq.unpaid")) ?? [];
  const expenses = (await sbSelect<Expense>("expenses", `select=*&spent_on=gte.${year}-01-01&spent_on=lt.${year + 1}-01-01&order=spent_on.desc`)) ?? [];
  const quotes = new Map(((await sbSelect<Quote>("quotes", "select=id,client_name,client_company,tax_pct,created_at")) ?? []).map((q) => [q.id, q]));

  const months = MONTHS.map((label) => ({ label, income: 0, cost: 0 }));
  for (const i of paid) months[Number(jakartaDate(i.paid_at!).slice(5, 7)) - 1].income += Number(i.amount);
  for (const e of expenses) months[Number(e.spent_on.slice(5, 7)) - 1].cost += Number(e.amount);

  const income = paid.reduce((a, i) => a + Number(i.amount), 0);
  const cost = expenses.reduce((a, e) => a + Number(e.amount), 0);
  // Income before VAT: the invoice amount includes PPN only when the quote charged it.
  const incomeExVat = paid.reduce((a, i) => {
    const t = Number(quotes.get(i.quote_id)?.tax_pct ?? 0);
    return a + Number(i.amount) / (1 + t / 100);
  }, 0);
  const vatCollected = income - incomeExVat;
  // Company clients usually withhold PPh 23 (2% of the pre-VAT amount); a person usually does not.
  const pph23 = paid.reduce((a, i) => {
    const q = quotes.get(i.quote_id);
    if (!q?.client_company) return a;
    return a + (Number(i.amount) / (1 + Number(q.tax_pct) / 100)) * 0.02;
  }, 0);
  const profit = incomeExVat - cost;
  // PPh Badan 22% with the Pasal 31E 50% reduction for turnover up to Rp4.8 miliar = 11% effective (rough guide only).
  const corpTax = Math.max(0, profit) * 0.11;
  const receivable = unpaid.reduce((a, i) => a + Number(i.amount), 0);
  const overdue = unpaid.filter((i) => i.due_date < now);

  const stat = (label: string, value: string, hint?: string, danger = false) => (
    <div className="sn-card" style={{ padding: "1rem 1.25rem" }}>
      <span className="sn-muted">{label}</span>
      <h3 style={danger ? { color: "var(--sn-danger)" } : undefined}>{value}</h3>
      {hint ? <span className="sn-muted" style={{ fontSize: "0.8rem" }}>{hint}</span> : null}
    </div>
  );
  const max = Math.max(1, ...months.map((m) => Math.max(m.income, m.cost)));

  return (
    <AdminShell active="finance" title="Keuangan" subtitle="Dari invoice lunas dan pengeluaran yang dicatat. Angka pajak adalah perkiraan, bukan hitungan resmi.">
      {notice ? <p className={`sn-notice ${type === "err" ? "err" : ""}`}>{notice}</p> : null}

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap", alignItems: "center" }}>
        {[year - 1, year, year + 1].map((y) => (
          <Link key={y} href={`/admin/finance?year=${y}`} className={`sn-btn ${y === year ? "sn-btn-primary" : ""}`}>
            {y}
          </Link>
        ))}
        <span style={{ flex: 1 }} />
        {(["leads", "quotes", "invoices", "expenses"] as const).map((t) => (
          <a key={t} className="sn-btn" href={`/admin/export/${t}`}>
            <Download size={14} /> CSV {t}
          </a>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(13rem, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
        {stat(`Pemasukan ${year}`, idr(income), vatCollected > 0 ? `termasuk PPN ${idr(vatCollected)}` : "dari invoice lunas")}
        {stat(`Pengeluaran ${year}`, idr(cost))}
        {stat("Laba (sebelum pajak)", idr(profit), "pemasukan tanpa PPN dikurangi pengeluaran", profit < 0)}
        {stat("Piutang berjalan", idr(receivable), `${overdue.length} invoice lewat jatuh tempo`, overdue.length > 0)}
        {stat("Perkiraan PPh 23 dipotong klien", idr(pph23), "2% dari klien badan; minta bukti potong, jadi kredit pajak")}
        {stat("Perkiraan PPh Badan", idr(corpTax), "11% efektif (22% dengan fasilitas Pasal 31E); kurangi kredit PPh 23")}
      </div>

      <section className="sn-card" style={{ padding: "1.25rem", marginBottom: "1.25rem" }}>
        <h3 style={{ marginBottom: "0.75rem" }}>Per bulan</h3>
        <div style={{ display: "grid", gap: "0.35rem" }}>
          {months.map((m) => (
            <div key={m.label} style={{ display: "grid", gridTemplateColumns: "3rem 1fr 9rem", gap: "0.75rem", alignItems: "center", fontSize: "0.85rem" }}>
              <span className="sn-muted">{m.label}</span>
              <div style={{ display: "grid", gap: 2 }}>
                <div style={{ height: 8, width: `${(m.income / max) * 100}%`, background: "var(--sn-success)", borderRadius: 4 }} />
                <div style={{ height: 8, width: `${(m.cost / max) * 100}%`, background: "var(--sn-danger)", borderRadius: 4, opacity: 0.7 }} />
              </div>
              <span style={{ textAlign: "right" }}>
                {idr(m.income - m.cost)}
              </span>
            </div>
          ))}
        </div>
        <p className="sn-muted" style={{ marginTop: "0.6rem", fontSize: "0.8rem" }}>
          Hijau: pemasukan. Merah: pengeluaran. Kanan: selisih bulan itu.
        </p>
      </section>

      <section className="sn-card" style={{ padding: "1.25rem" }}>
        <h3 style={{ marginBottom: "0.75rem" }}>Pengeluaran</h3>
        <form action={addExpense} style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          <input name="spent_on" type="date" required className="sn-input" style={{ maxWidth: "10rem" }} defaultValue={now} />
          <select name="category" className="sn-input" style={{ maxWidth: "13rem" }}>
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <input name="vendor" maxLength={120} className="sn-input" style={{ maxWidth: "11rem" }} placeholder="Vendor" />
          <input name="amount" required inputMode="numeric" className="sn-input" style={{ maxWidth: "9rem" }} placeholder="Nominal" />
          <select name="quote_id" className="sn-input" style={{ maxWidth: "14rem" }} defaultValue="">
            <option value="">Tanpa proyek</option>
            {[...quotes.values()].map((q) => (
              <option key={q.id} value={q.id}>
                {quoteNumber(q)} · {q.client_company || q.client_name}
              </option>
            ))}
          </select>
          <input name="note" maxLength={500} className="sn-input" style={{ flex: 1, minWidth: "10rem" }} placeholder="Catatan" />
          <button className="sn-btn sn-btn-primary">Catat</button>
        </form>
        <div className="sn-table-wrap">
          <table className="sn-table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Kategori</th>
                <th>Vendor / catatan</th>
                <th>Proyek</th>
                <th style={{ textAlign: "right" }}>Nominal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {expenses.length === 0 ? (
                <tr>
                  <td colSpan={6} className="sn-muted" style={{ padding: "1.25rem" }}>
                    Belum ada pengeluaran di {year}.
                  </td>
                </tr>
              ) : null}
              {expenses.map((e) => {
                const q = e.quote_id ? quotes.get(e.quote_id) : undefined;
                return (
                  <tr key={e.id}>
                    <td>{e.spent_on}</td>
                    <td>{e.category}</td>
                    <td>
                      {e.vendor ?? ""}
                      {e.note ? <div className="sn-muted">{e.note}</div> : null}
                    </td>
                    <td>{q ? `${quoteNumber(q)} · ${q.client_company || q.client_name}` : "-"}</td>
                    <td style={{ textAlign: "right" }}>{idr(Number(e.amount))}</td>
                    <td>
                      <form action={deleteExpense}>
                        <input type="hidden" name="id" value={e.id} />
                        <button className="sn-btn sn-btn-sm" aria-label="Hapus">
                          <Trash2 size={13} />
                        </button>
                      </form>
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
