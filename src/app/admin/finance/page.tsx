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

  const [paidRaw, unpaidRaw, expensesRaw, quotesRaw] = await Promise.all([
    sbSelect<Invoice>("invoices", `select=*&status=eq.paid&paid_at=gte.${year}-01-01&paid_at=lt.${year + 1}-01-01`),
    sbSelect<Invoice>("invoices", "select=id,amount,due_date,status,quote_id,created_at&status=eq.unpaid"),
    sbSelect<Expense>("expenses", `select=*&spent_on=gte.${year}-01-01&spent_on=lt.${year + 1}-01-01&order=spent_on.desc`),
    sbSelect<Quote>("quotes", "select=id,client_name,client_company,tax_pct,created_at"),
  ]);
  const paid = paidRaw ?? [];
  const unpaid = unpaidRaw ?? [];
  const expenses = expensesRaw ?? [];
  const quotes = new Map((quotesRaw ?? []).map((q) => [q.id, q]));

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

  const kpi = (label: string, value: string, hint: string, tone: "good" | "warn" | "bad" | "muted" | "" = "") => (
    <div className={`sn-kpi ${tone}`}>
      <div className="sn-kpi-label">{label}</div>
      <div className="sn-kpi-value">{value}</div>
      <div className="sn-kpi-hint">{hint}</div>
    </div>
  );
  const thisMonth = year === Number(now.slice(0, 4)) ? Number(now.slice(5, 7)) : 12;
  const shown = months.slice(0, thisMonth);
  const empty = !paid.length && !expenses.length;

  return (
    <AdminShell active="finance" title="Keuangan" subtitle="Dari invoice lunas dan pengeluaran yang dicatat. Angka pajak adalah perkiraan, bukan hitungan resmi.">
      {notice ? <p className={`sn-notice ${type === "err" ? "err" : ""}`}>{notice}</p> : null}

      <div className="sn-toolbar">
        {[year - 1, year, year + 1].map((y) => (
          <Link key={y} href={`/admin/finance?year=${y}`} className={`sn-btn sn-btn-xs ${y === year ? "sn-btn-primary" : ""}`}>
            {y}
          </Link>
        ))}
        <span className="spacer" />
        <span className="sn-muted" style={{ fontSize: "0.8rem" }}>
          Ekspor CSV:
        </span>
        {(["leads", "quotes", "invoices", "expenses"] as const).map((t) => (
          <a key={t} className="sn-btn sn-btn-xs" href={`/admin/export/${t}`}>
            <Download size={12} /> {t}
          </a>
        ))}
      </div>

      <div className="sn-kpis">
        {kpi(`Pemasukan ${year}`, idr(income), vatCollected > 0 ? `termasuk PPN ${idr(vatCollected)}` : `${paid.length} invoice lunas`, "good")}
        {kpi(`Pengeluaran ${year}`, idr(cost), `${expenses.length} transaksi`, cost > 0 ? "warn" : "muted")}
        {kpi("Laba sebelum pajak", idr(profit), "pemasukan tanpa PPN − pengeluaran", profit < 0 ? "bad" : profit > 0 ? "good" : "muted")}
        {kpi("Piutang berjalan", idr(receivable), overdue.length ? `${overdue.length} lewat jatuh tempo` : `${unpaid.length} invoice belum dibayar`, overdue.length ? "bad" : "")}
        {kpi("PPh 23 dipotong klien", idr(pph23), "perkiraan 2%, minta bukti potong", "muted")}
        {kpi("PPh Badan (perkiraan)", idr(corpTax), "11% efektif, dikurangi kredit PPh 23", "muted")}
      </div>

      {empty ? (
        <p className="sn-notice" style={{ marginBottom: "1rem" }}>
          Belum ada data {year}. Angka terisi otomatis saat invoice ditandai <strong>Lunas</strong> di menu Invoice, dan saat Anda mencatat pengeluaran di bawah.
        </p>
      ) : null}

      <div className="sn-split">
        <section className="sn-card" style={{ padding: "1rem 1.25rem" }}>
          <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>Arus kas per bulan</h3>
          <table className="sn-mini-table">
            <thead>
              <tr>
                <th>Bulan</th>
                <th>Masuk</th>
                <th>Keluar</th>
                <th>Selisih</th>
              </tr>
            </thead>
            <tbody>
              {shown.map((m) => {
                const net = m.income - m.cost;
                return (
                  <tr key={m.label} className={m.income || m.cost ? "" : "empty"}>
                    <td>{m.label}</td>
                    <td>{m.income ? idr(m.income) : "–"}</td>
                    <td>{m.cost ? idr(m.cost) : "–"}</td>
                    <td className={net < 0 ? "neg" : net > 0 ? "pos" : ""}>{net ? idr(net) : "–"}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>{idr(income)}</td>
                <td>{idr(cost)}</td>
                <td className={income - cost < 0 ? "neg" : ""}>{idr(income - cost)}</td>
              </tr>
            </tfoot>
          </table>
        </section>

        <section className="sn-card" style={{ padding: "1rem 1.25rem" }}>
          <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>Catat pengeluaran</h3>
          <form action={addExpense} style={{ display: "grid", gap: "0.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              <input name="spent_on" type="date" required className="sn-input" defaultValue={now} aria-label="Tanggal" />
              <input name="amount" required inputMode="numeric" className="sn-input" placeholder="Nominal (Rp)" aria-label="Nominal" />
            </div>
            <select name="category" className="sn-input" aria-label="Kategori">
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <input name="vendor" maxLength={120} className="sn-input" placeholder="Vendor (opsional)" />
            <select name="quote_id" className="sn-input" defaultValue="" aria-label="Proyek">
              <option value="">Tanpa proyek</option>
              {[...quotes.values()].map((q) => (
                <option key={q.id} value={q.id}>
                  {quoteNumber(q)} · {q.client_company || q.client_name}
                </option>
              ))}
            </select>
            <input name="note" maxLength={500} className="sn-input" placeholder="Catatan (opsional)" />
            <button className="sn-btn sn-btn-primary" style={{ justifyContent: "center" }}>
              Catat pengeluaran
            </button>
          </form>
        </section>
      </div>

      <section className="sn-card">
        <div className="sn-card-header" style={{ padding: "0.9rem 1.25rem" }}>
          <h3 className="sn-card-title" style={{ fontSize: "1rem" }}>
            Pengeluaran {year}
          </h3>
          <span className="sn-muted" style={{ fontSize: "0.8rem" }}>
            {expenses.length} transaksi · {idr(cost)}
          </span>
        </div>
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
                  <td colSpan={6} className="sn-muted" style={{ padding: "1rem 1.25rem" }}>
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
