"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Building2, CheckCircle2, ClipboardCheck, HardHat, Menu, Phone, Ruler, ShieldCheck, Star, Wrench, X } from "lucide-react";
import { Photo, Toast } from "./shared";

const SERVICES = [
  { icon: Building2, t: "Konstruksi Gedung", d: "Ruko, gudang, kantor, dan fasilitas industri dari perencanaan sampai serah terima." },
  { icon: Ruler, t: "Desain & Perencanaan", d: "Gambar kerja, RAB, dan perizinan PBG yang rapi sejak awal." },
  { icon: Wrench, t: "Renovasi & Perawatan", d: "Perbaikan atap, struktur, dan MEP tanpa mengganggu operasional." },
  { icon: ClipboardCheck, t: "Manajemen Proyek", d: "Pengawasan mutu, jadwal, dan biaya dengan laporan mingguan." },
];
const PROJECTS = [
  { t: "Gudang Logistik 4.000 m²", c: "Industri", y: "2025", g: ["#1e3a5f", "#4b6a8f"] },
  { t: "Kantor Cabang Bank", c: "Komersial", y: "2025", g: ["#3d4a5c", "#8a96a8"] },
  { t: "Ruko 3 Lantai (12 unit)", c: "Komersial", y: "2024", g: ["#5c4a2e", "#b08d57"] },
  { t: "Pabrik Pengolahan Sawit", c: "Industri", y: "2024", g: ["#2e4a3d", "#6f9a7d"] },
  { t: "Sekolah Dasar Swasta", c: "Publik", y: "2023", g: ["#4a2e3d", "#a07890"] },
  { t: "Puskesmas Rawat Inap", c: "Publik", y: "2023", g: ["#2e3d4a", "#7090a8"] },
];
const FILTERS = ["Semua", "Industri", "Komersial", "Publik"];

export default function KorporatDemo() {
  const [filter, setFilter] = useState("Semua");
  const [menu, setMenu] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const shown = PROJECTS.filter((p) => filter === "Semua" || p.c === filter);

  function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    setToast("Permintaan terkirim. Tim kami menghubungi Anda dalam 1×24 jam.");
    setTimeout(() => setToast(null), 3000);
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2 font-bold text-[#0f2a4a]">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[#0f2a4a] text-amber-400">
              <HardHat className="h-5 w-5" />
            </span>
            Nusantara Konstruksi
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            {["Layanan", "Proyek", "Tentang", "Kontak"].map((x) => (
              <a key={x} href={`#${x.toLowerCase()}`} className="hover:text-amber-600">
                {x}
              </a>
            ))}
            <a href="#kontak" className="rounded-md bg-amber-500 px-4 py-2 font-semibold text-[#0f2a4a] hover:bg-amber-400">
              Minta Penawaran
            </a>
          </nav>
          <button className="md:hidden" onClick={() => setMenu(!menu)} aria-label="Menu">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu ? (
          <div className="grid gap-3 border-t border-slate-200 px-5 py-4 text-sm font-medium md:hidden">
            {["Layanan", "Proyek", "Tentang", "Kontak"].map((x) => (
              <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setMenu(false)}>
                {x}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <section className="relative overflow-hidden bg-[#0f2a4a] text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Kontraktor umum · Sejak 2009</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">Membangun tepat waktu, tepat mutu, tepat anggaran.</h1>
            <p className="mt-5 max-w-md text-lg text-slate-300">Lebih dari 180 proyek gedung, gudang, dan fasilitas industri di Sumatera dan Jawa.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#kontak" className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 font-semibold text-[#0f2a4a] hover:bg-amber-400">
                Konsultasi Proyek <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#proyek" className="rounded-md border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
                Lihat Portofolio
              </a>
            </div>
          </div>
          <Photo from="#284a72" to="#c08a2d" className="aspect-[4/3] rounded-2xl shadow-2xl">
            <Building2 className="h-24 w-24 text-white/70" />
          </Photo>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 text-center md:grid-cols-4">
          {[
            ["180+", "Proyek selesai"],
            ["15", "Tahun pengalaman"],
            ["0", "Kecelakaan kerja 2025"],
            ["ISO 9001", "Sistem mutu"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl font-extrabold text-[#0f2a4a]">{n}</div>
              <div className="mt-1 text-sm text-slate-500">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="layanan" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-bold text-[#0f2a4a]">Layanan kami</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-lg">
              <Icon className="h-8 w-8 text-amber-500" />
              <h3 className="mt-4 font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proyek" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-[#0f2a4a]">Portofolio proyek</h2>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-1.5 text-sm font-medium ${filter === f ? "bg-[#0f2a4a] text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <article key={p.t} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                <Photo from={p.g[0]} to={p.g[1]} className="aspect-video" />
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                    {p.c} · {p.y}
                  </div>
                  <h3 className="mt-1 font-bold">{p.t}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tentang" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-[#0f2a4a]">Mengapa klien memilih kami</h2>
          <ul className="mt-6 grid gap-4">
            {["Harga terperinci per item pekerjaan, tanpa biaya tersembunyi", "Laporan progres foto setiap minggu", "Garansi pemeliharaan 6 bulan setelah serah terima", "Tenaga ahli bersertifikat SKK"].map((x) => (
              <li key={x} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="rounded-2xl bg-[#0f2a4a] p-8 text-white">
          <div className="flex gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-4 text-lg leading-relaxed">“Gudang kami selesai dua minggu lebih cepat dari jadwal, dan laporan mingguannya sangat jelas untuk direksi.”</blockquote>
          <figcaption className="mt-6 text-sm text-slate-300">Direktur Operasional, PT Logistik Andalas</figcaption>
        </figure>
      </section>

      <section id="kontak" className="bg-[#0f2a4a] py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Ceritakan proyek Anda</h2>
            <p className="mt-3 text-slate-300">Kami kirimkan estimasi biaya dan jadwal dalam 2 hari kerja.</p>
            <div className="mt-8 grid gap-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-400" /> 0812-0000-0000
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-amber-400" /> Data Anda kami jaga kerahasiaannya
              </div>
            </div>
          </div>
          <form onSubmit={send} className="grid gap-3 rounded-2xl bg-white p-6 text-slate-800">
            <input required placeholder="Nama" className="rounded-md border border-slate-300 px-4 py-3" />
            <input required placeholder="Perusahaan" className="rounded-md border border-slate-300 px-4 py-3" />
            <select className="rounded-md border border-slate-300 px-4 py-3">
              <option>Konstruksi Gedung</option>
              <option>Renovasi</option>
              <option>Desain & Perencanaan</option>
            </select>
            <textarea rows={3} placeholder="Lokasi dan perkiraan luas bangunan" className="rounded-md border border-slate-300 px-4 py-3" />
            <button className="rounded-md bg-amber-500 py-3 font-semibold text-[#0f2a4a] hover:bg-amber-400">Kirim Permintaan</button>
          </form>
        </div>
      </section>
      <footer className="bg-[#0a1e36] py-6 text-center text-xs text-slate-400">© 2026 PT Nusantara Konstruksi (contoh). Template oleh AG·SORA.</footer>
      <Toast text={toast} />
    </div>
  );
}
