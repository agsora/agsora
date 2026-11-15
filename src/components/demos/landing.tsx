"use client";

import { useState } from "react";
import { BarChart3, Check, ChevronDown, Clock, Sparkles, Star, Users, Zap } from "lucide-react";
import { Photo, rp } from "./shared";

const PLANS = [
  { n: "Basic", m: 99_000, f: ["1 pengguna", "100 transaksi/bulan", "Laporan dasar"] },
  { n: "Pro", m: 249_000, f: ["5 pengguna", "Transaksi tanpa batas", "Laporan lengkap", "Integrasi WhatsApp"], hot: true },
  { n: "Bisnis", m: 549_000, f: ["Pengguna tanpa batas", "Multi cabang", "API & integrasi", "Pendampingan khusus"] },
];
const FAQ = [
  ["Apakah ada uji coba gratis?", "Ya, 14 hari tanpa kartu kredit. Data Anda tetap tersimpan bila lanjut berlangganan."],
  ["Bisa dipakai di HP?", "Bisa. Aplikasi berjalan di browser HP, tablet, dan laptop tanpa instal."],
  ["Bagaimana jika ingin berhenti?", "Berhenti kapan saja dari menu akun. Data bisa diekspor ke Excel."],
];

export default function LandingDemo() {
  const [yearly, setYearly] = useState(true);
  const [open, setOpen] = useState(0);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0a14] font-sans text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-2 text-lg font-bold">
          <Sparkles className="h-5 w-5 text-fuchsia-400" /> Catatku
        </div>
        <a href="#harga" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0d0a14]">
          Coba Gratis
        </a>
      </header>

      <section className="relative mx-auto max-w-4xl px-5 pb-16 pt-12 text-center">
        <div aria-hidden className="absolute left-1/2 top-0 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/40 blur-[110px]" />
        <span className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-fuchsia-200">
          <Star className="h-3.5 w-3.5 fill-current" /> Dipakai 2.400+ UMKM
        </span>
        <h1 className="relative mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Pembukuan usaha selesai{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 to-amber-300 bg-clip-text text-transparent">5 menit sehari.</span>
        </h1>
        <p className="relative mx-auto mt-5 max-w-xl text-lg text-white/70">Catat penjualan, stok, dan utang-piutang dari HP. Laporan laba rugi jadi otomatis.</p>
        {joined ? (
          <p className="relative mt-8 rounded-full bg-emerald-500/15 px-6 py-3 font-semibold text-emerald-300">Terima kasih! Link uji coba dikirim ke {email} (demo).</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setJoined(true);
            }}
            className="relative mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
          >
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email bisnis Anda" className="flex-1 rounded-full bg-white/10 px-5 py-3 outline-none ring-1 ring-white/15 placeholder:text-white/40" />
            <button className="rounded-full bg-gradient-to-r from-fuchsia-500 to-amber-400 px-6 py-3 font-semibold">Mulai 14 Hari Gratis</button>
          </form>
        )}
        <Photo from="#3b1452" to="#7c2d6b" className="relative mx-auto mt-14 aspect-[16/9] max-w-3xl rounded-2xl ring-1 ring-white/10">
          <BarChart3 className="h-20 w-20 text-white/60" />
        </Photo>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-3">
        {[
          { icon: Zap, t: "Catat dalam detik", d: "Scan barcode atau pilih produk, transaksi tersimpan otomatis." },
          { icon: Clock, t: "Laporan otomatis", d: "Laba rugi, arus kas, dan stok terbarui setiap ada transaksi." },
          { icon: Users, t: "Tim & cabang", d: "Atur akses karyawan dan pantau semua cabang dari satu akun." },
        ].map(({ icon: Icon, t, d }) => (
          <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <Icon className="h-7 w-7 text-fuchsia-400" />
            <h3 className="mt-4 text-lg font-bold">{t}</h3>
            <p className="mt-2 text-sm text-white/60">{d}</p>
          </div>
        ))}
      </section>

      <section id="harga" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold">Pilih paket</h2>
        <div className="mt-6 flex justify-center">
          <div className="inline-flex rounded-full bg-white/10 p-1 text-sm font-semibold">
            <button onClick={() => setYearly(false)} className={`rounded-full px-5 py-2 ${!yearly ? "bg-white text-[#0d0a14]" : ""}`}>
              Bulanan
            </button>
            <button onClick={() => setYearly(true)} className={`rounded-full px-5 py-2 ${yearly ? "bg-white text-[#0d0a14]" : ""}`}>
              Tahunan <span className="text-fuchsia-500">−20%</span>
            </button>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.n} className={`rounded-3xl p-7 ${p.hot ? "bg-gradient-to-b from-fuchsia-600 to-fuchsia-900 ring-2 ring-fuchsia-300" : "border border-white/10 bg-white/[0.03]"}`}>
              {p.hot ? <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">Paling populer</span> : null}
              <h3 className="mt-3 text-xl font-bold">{p.n}</h3>
              <div className="mt-3 text-3xl font-extrabold">
                {rp(yearly ? p.m * 0.8 : p.m)}
                <span className="text-sm font-medium text-white/60">/bulan</span>
              </div>
              {yearly ? <div className="text-xs text-white/60">ditagih {rp(p.m * 0.8 * 12)} per tahun</div> : <div className="text-xs text-white/60">tanpa kontrak</div>}
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.f.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-7 block rounded-full py-3 text-center font-semibold ${p.hot ? "bg-white text-fuchsia-800" : "bg-white/10"}`}>
                Pilih {p.n}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold">Pertanyaan umum</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
          {FAQ.map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold">
                {q}
                <ChevronDown className={`h-5 w-5 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i ? <p className="px-6 pb-5 text-sm text-white/65">{a}</p> : null}
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40">© 2026 Catatku (contoh). Template oleh AG·SORA.</footer>
    </div>
  );
}
