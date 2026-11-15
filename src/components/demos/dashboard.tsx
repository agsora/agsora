"use client";

import { useState } from "react";
import { AlertTriangle, BarChart3, Boxes, FileText, LayoutDashboard, Menu, Package, Receipt, TrendingDown, TrendingUp, Users, X } from "lucide-react";
import { rp } from "./shared";

const BRANCHES = ["Semua cabang", "Medan", "Pekanbaru", "Padang"];
/** Monthly sales in millions per branch (Jul–Des). */
const SALES: Record<string, number[]> = {
  Medan: [412, 438, 455, 431, 489, 534],
  Pekanbaru: [268, 281, 276, 302, 318, 341],
  Padang: [184, 179, 196, 211, 205, 238],
};
const MONTHS = ["Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
const STOCK = [
  { sku: "MNY-001", n: "Minyak Goreng 2L", b: "Medan", q: 42, min: 150 },
  { sku: "GLA-014", n: "Gula Pasir 1kg", b: "Padang", q: 18, min: 100 },
  { sku: "TPG-003", n: "Tepung Terigu 1kg", b: "Pekanbaru", q: 64, min: 120 },
  { sku: "BRS-022", n: "Beras Premium 5kg", b: "Medan", q: 30, min: 80 },
  { sku: "SBN-008", n: "Sabun Cuci 800g", b: "Padang", q: 55, min: 90 },
];
const AR = [
  { inv: "INV-2611-041", c: "Toko Sinar Jaya", b: "Medan", amt: 48_500_000, late: 21 },
  { inv: "INV-2611-055", c: "UD Makmur", b: "Pekanbaru", amt: 32_750_000, late: 12 },
  { inv: "INV-2610-118", c: "CV Berkah Abadi", b: "Padang", amt: 18_200_000, late: 35 },
  { inv: "INV-2611-072", c: "Toko Harapan", b: "Medan", amt: 9_800_000, late: 4 },
];
const NAV = [
  { k: "ringkasan", n: "Ringkasan", icon: LayoutDashboard },
  { k: "stok", n: "Stok", icon: Boxes },
  { k: "piutang", n: "Piutang", icon: Receipt },
  { k: "laporan", n: "Laporan", icon: FileText },
];

export default function DashboardDemo() {
  const [branch, setBranch] = useState(BRANCHES[0]);
  const [view, setView] = useState("ringkasan");
  const [nav, setNav] = useState(false);

  const series = MONTHS.map((_, i) => (branch === BRANCHES[0] ? Object.values(SALES).reduce((s, b) => s + b[i], 0) : SALES[branch][i]));
  const max = Math.max(...series);
  const last = series[5];
  const prev = series[4];
  const growth = ((last - prev) / prev) * 100;
  const inBranch = <T extends { b: string }>(rows: T[]) => rows.filter((r) => branch === BRANCHES[0] || r.b === branch);
  const stock = inBranch(STOCK);
  const ar = inBranch(AR);
  const arTotal = ar.reduce((s, r) => s + r.amt, 0);

  const kpi = ({ label, value, sub, up }: { label: string; value: string; sub: string; up?: boolean }) => (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
      <div className={`mt-1 flex items-center gap-1 text-xs font-semibold ${up === undefined ? "text-slate-500" : up ? "text-emerald-600" : "text-red-600"}`}>
        {up === undefined ? null : up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
        {sub}
      </div>
    </div>
  );

  const stockTable = () => (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
      <div className="flex items-center gap-2 p-5 font-bold">
        <AlertTriangle className="h-4 w-4 text-amber-500" /> Stok di bawah minimum
      </div>
      <table className="w-full min-w-[520px] text-sm">
        <thead className="bg-slate-50 text-left text-xs uppercase text-slate-400">
          <tr>
            <th className="px-5 py-2">SKU</th>
            <th className="px-5 py-2">Produk</th>
            <th className="px-5 py-2">Cabang</th>
            <th className="px-5 py-2 text-right">Stok / Min</th>
          </tr>
        </thead>
        <tbody>
          {stock.map((s) => (
            <tr key={s.sku} className="border-t">
              <td className="px-5 py-3 font-mono text-xs">{s.sku}</td>
              <td className="px-5 py-3">{s.n}</td>
              <td className="px-5 py-3">{s.b}</td>
              <td className="px-5 py-3 text-right">
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${s.q / s.min < 0.3 ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>
                  {s.q} / {s.min}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const arTable = () => (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
      <div className="p-5 font-bold">Piutang jatuh tempo</div>
      <table className="w-full min-w-[520px] text-sm">
        <thead className="bg-slate-50 text-left text-xs uppercase text-slate-400">
          <tr>
            <th className="px-5 py-2">Faktur</th>
            <th className="px-5 py-2">Pelanggan</th>
            <th className="px-5 py-2 text-right">Nilai</th>
            <th className="px-5 py-2 text-right">Lewat</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((r) => (
            <tr key={r.inv} className="border-t">
              <td className="px-5 py-3 font-mono text-xs">{r.inv}</td>
              <td className="px-5 py-3">{r.c}</td>
              <td className="px-5 py-3 text-right">{rp(r.amt)}</td>
              <td className="px-5 py-3 text-right">
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${r.late > 30 ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>{r.late} hari</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#eef1f6] font-sans text-slate-800">
      <aside className={`fixed inset-y-0 left-0 z-40 w-60 bg-[#13263f] p-5 text-slate-300 transition-transform lg:static lg:translate-x-0 ${nav ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-white">
            <BarChart3 className="h-6 w-6 text-sky-400" /> Sumber Pangan
          </div>
          <button className="lg:hidden" onClick={() => setNav(false)} aria-label="Tutup menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-8 grid gap-1">
          {NAV.map(({ k, n, icon: Icon }) => (
            <button
              key={k}
              onClick={() => {
                setView(k);
                setNav(false);
              }}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${view === k ? "bg-white/10 font-semibold text-white" : "hover:bg-white/5"}`}
            >
              <Icon className="h-4 w-4" /> {n}
            </button>
          ))}
        </nav>
        <div className="mt-8 border-t border-white/10 pt-5 text-xs">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" /> Login: Direktur
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1 p-4 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-lg bg-white p-2 lg:hidden" onClick={() => setNav(true)} aria-label="Buka menu">
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-bold md:text-2xl">{NAV.find((n) => n.k === view)?.n}</h1>
          <select value={branch} onChange={(e) => setBranch(e.target.value)} className="ml-auto rounded-lg border-0 bg-white px-3 py-2 text-sm shadow-sm">
            {BRANCHES.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        {view === "ringkasan" ? (
          <>
            <div className="mt-6 grid grid-cols-2 gap-4 xl:grid-cols-4">
              {kpi({ label: "Penjualan Des", value: `Rp${last.toLocaleString("id-ID")} jt`, sub: `${growth >= 0 ? "+" : ""}${growth.toFixed(1)}% dari Nov`, up: growth >= 0 })}
              {kpi({ label: "Laba kotor", value: `Rp${Math.round(last * 0.18).toLocaleString("id-ID")} jt`, sub: "Margin 18%" })}
              {kpi({ label: "Piutang terlambat", value: rp(arTotal), sub: `${ar.length} faktur`, up: false })}
              {kpi({ label: "Stok kritis", value: `${stock.length} SKU`, sub: "Perlu pesan ulang", up: false })}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-bold">Penjualan 6 bulan (juta rupiah)</h2>
                <span className="text-xs text-slate-400">{branch}</span>
              </div>
              <div className="mt-6 flex h-56 items-end gap-3 md:gap-6">
                {series.map((v, i) => (
                  <div key={MONTHS[i]} className="flex flex-1 flex-col items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500">{v}</span>
                    <div className={`w-full rounded-t-lg ${i === 5 ? "bg-sky-500" : "bg-sky-200"}`} style={{ height: `${(v / max) * 170}px` }} />
                    <span className="text-xs text-slate-500">{MONTHS[i]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-6 xl:grid-cols-2">
              {stockTable()}
              {arTable()}
            </div>
          </>
        ) : null}
        {view === "stok" ? (
          <div className="mt-6">
            {stockTable()}
          </div>
        ) : null}
        {view === "piutang" ? (
          <div className="mt-6">
            {arTable()}
          </div>
        ) : null}
        {view === "laporan" ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {["Laba rugi bulanan", "Neraca", "Penjualan per produk", "Umur piutang", "Mutasi stok", "Kinerja salesman"].map((r) => (
              <div key={r} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <Package className="h-8 w-8 text-sky-500" />
                <div className="flex-1">
                  <div className="font-semibold">{r}</div>
                  <div className="text-xs text-slate-400">Excel · PDF</div>
                </div>
                <button className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold">Unduh</button>
              </div>
            ))}
          </div>
        ) : null}
      </main>
      {nav ? <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setNav(false)} /> : null}
    </div>
  );
}
