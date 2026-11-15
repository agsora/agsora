"use client";

import { useState } from "react";
import { BookOpen, Calculator, CalendarDays, CheckCircle2, Cpu, GraduationCap, Palette, Wrench } from "lucide-react";
import { Photo, rp } from "./shared";

const PROGRAMS = [
  { k: "rpl", n: "Rekayasa Perangkat Lunak", icon: Cpu, d: "Coding web & mobile, project nyata dari industri." },
  { k: "akl", n: "Akuntansi & Keuangan", icon: Calculator, d: "Praktik software akuntansi dan pajak." },
  { k: "dkv", n: "Desain Komunikasi Visual", icon: Palette, d: "Desain grafis, video, dan konten digital." },
  { k: "tkr", n: "Teknik Kendaraan Ringan", icon: Wrench, d: "Bengkel standar industri, sertifikasi kompetensi." },
];
const AGENDA = [
  ["12 Jan", "Pembukaan pendaftaran gelombang 1"],
  ["2 Feb", "Open house & trial class gratis"],
  ["20 Mar", "Tes minat bakat (online)"],
  ["15 Apr", "Pengumuman hasil gelombang 1"],
];
const FEES = [
  ["Uang pangkal", 3_500_000],
  ["SPP per bulan", 650_000],
  ["Seragam & buku", 1_250_000],
] as const;

export default function SekolahDemo() {
  const [step, setStep] = useState(0);
  const [program, setProgram] = useState("rpl");
  const [data, setData] = useState({ nama: "", asal: "", ortu: "", wa: "" });
  const steps = ["Pilih jurusan", "Data siswa", "Data orang tua", "Selesai"];
  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, [k]: e.target.value });

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2 font-bold text-[#1d3f8f]">
            <GraduationCap className="h-7 w-7" /> SMK Cendekia Nusantara
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#jurusan">Jurusan</a>
            <a href="#agenda">Agenda</a>
            <a href="#biaya">Biaya</a>
            <a href="#daftar" className="rounded-full bg-[#1d3f8f] px-4 py-1.5 text-white">
              Daftar
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#1d3f8f] to-[#3a6fd8] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-2">
          <div>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">PPDB 2026/2027 dibuka · Akreditasi A</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">Siap kerja, siap kuliah, siap usaha.</h1>
            <p className="mt-4 text-blue-100">92% lulusan terserap kerja atau melanjutkan kuliah dalam 6 bulan.</p>
            <a href="#daftar" className="mt-7 inline-block rounded-full bg-amber-400 px-7 py-3 font-semibold text-[#1d3f8f]">
              Daftar Sekarang
            </a>
          </div>
          <Photo from="#2a52b0" to="#7fa6f0" className="aspect-[4/3] rounded-3xl">
            <BookOpen className="h-20 w-20 text-white/70" />
          </Photo>
        </div>
      </section>

      <section id="jurusan" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-bold text-[#1d3f8f]">Program keahlian</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map(({ k, n, icon: Icon, d }) => (
            <div key={k} className="rounded-2xl border p-6 hover:border-[#1d3f8f]">
              <Icon className="h-8 w-8 text-[#1d3f8f]" />
              <h3 className="mt-3 font-bold">{n}</h3>
              <p className="mt-2 text-sm text-slate-500">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div id="agenda">
            <h2 className="text-2xl font-bold text-[#1d3f8f]">Agenda PPDB</h2>
            <ol className="mt-6 space-y-4">
              {AGENDA.map(([d, t]) => (
                <li key={d} className="flex gap-4">
                  <span className="flex w-20 shrink-0 items-center gap-1 text-sm font-bold text-[#1d3f8f]">
                    <CalendarDays className="h-4 w-4" /> {d}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </div>
          <div id="biaya" className="rounded-2xl bg-white p-6">
            <h2 className="text-2xl font-bold text-[#1d3f8f]">Rincian biaya</h2>
            <table className="mt-4 w-full text-sm">
              <tbody>
                {FEES.map(([n, v]) => (
                  <tr key={n} className="border-b last:border-0">
                    <td className="py-3">{n}</td>
                    <td className="py-3 text-right font-semibold">{rp(v)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-xs text-slate-500">Beasiswa prestasi dan KIP tersedia. Uang pangkal bisa dicicil 3 kali.</p>
          </div>
        </div>
      </section>

      <section id="daftar" className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold text-[#1d3f8f]">Formulir pendaftaran online</h2>
        <ol className="mt-8 flex justify-between gap-2 text-xs font-semibold">
          {steps.map((s, i) => (
            <li key={s} className="flex flex-1 flex-col items-center gap-2 text-center">
              <span className={`grid h-8 w-8 place-items-center rounded-full ${i <= step ? "bg-[#1d3f8f] text-white" : "bg-slate-200 text-slate-500"}`}>{i + 1}</span>
              <span className={i <= step ? "text-[#1d3f8f]" : "text-slate-400"}>{s}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 rounded-2xl border p-6">
          {step === 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {PROGRAMS.map((p) => (
                <button key={p.k} onClick={() => setProgram(p.k)} className={`rounded-xl p-4 text-left ring-2 ${program === p.k ? "ring-[#1d3f8f] bg-blue-50" : "ring-slate-200"}`}>
                  <div className="font-semibold">{p.n}</div>
                  <div className="text-xs text-slate-500">Kuota tersisa {12 + p.k.length * 3} kursi</div>
                </button>
              ))}
            </div>
          ) : null}
          {step === 1 ? (
            <div className="grid gap-3">
              <input value={data.nama} onChange={set("nama")} placeholder="Nama lengkap siswa" className="rounded-lg border px-3 py-2.5" />
              <input value={data.asal} onChange={set("asal")} placeholder="Asal sekolah (SMP/MTs)" className="rounded-lg border px-3 py-2.5" />
              <input placeholder="NISN" inputMode="numeric" className="rounded-lg border px-3 py-2.5" />
            </div>
          ) : null}
          {step === 2 ? (
            <div className="grid gap-3">
              <input value={data.ortu} onChange={set("ortu")} placeholder="Nama orang tua / wali" className="rounded-lg border px-3 py-2.5" />
              <input value={data.wa} onChange={set("wa")} placeholder="Nomor WhatsApp orang tua" inputMode="tel" className="rounded-lg border px-3 py-2.5" />
            </div>
          ) : null}
          {step === 3 ? (
            <div className="text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
              <h3 className="mt-3 text-xl font-bold">Pendaftaran terkirim</h3>
              <p className="mt-2 text-sm text-slate-600">
                No. pendaftaran <b>PPDB-26-0412</b> untuk {data.nama || "calon siswa"} jurusan {PROGRAMS.find((p) => p.k === program)?.n}. Jadwal tes dikirim ke WhatsApp orang tua (demo).
              </p>
            </div>
          ) : null}
          {step < 3 ? (
            <div className="mt-6 flex justify-between">
              <button disabled={step === 0} onClick={() => setStep(step - 1)} className="rounded-full px-5 py-2.5 font-semibold text-slate-500 disabled:invisible">
                Kembali
              </button>
              <button onClick={() => setStep(step + 1)} className="rounded-full bg-[#1d3f8f] px-6 py-2.5 font-semibold text-white">
                {step === 2 ? "Kirim Pendaftaran" : "Lanjut"}
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
