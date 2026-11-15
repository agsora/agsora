"use client";

import { useState } from "react";
import { Baby, Bone, CalendarCheck, CheckCircle2, ChevronLeft, HeartPulse, Smile, Stethoscope } from "lucide-react";

const POLI = [
  { k: "umum", n: "Poli Umum", icon: Stethoscope },
  { k: "anak", n: "Poli Anak", icon: Baby },
  { k: "gigi", n: "Poli Gigi", icon: Smile },
  { k: "jantung", n: "Jantung", icon: HeartPulse },
  { k: "ortho", n: "Ortopedi", icon: Bone },
];
const DOCTORS: Record<string, { n: string; s: string; days: string }[]> = {
  umum: [
    { n: "dr. Rina Pratiwi", s: "Dokter Umum", days: "Sen–Sab" },
    { n: "dr. Hendra Gunawan", s: "Dokter Umum", days: "Sen–Jum" },
  ],
  anak: [{ n: "dr. Maya Sari, Sp.A", s: "Spesialis Anak", days: "Sen, Rab, Jum" }],
  gigi: [{ n: "drg. Fajar Nugroho", s: "Dokter Gigi", days: "Sel, Kam, Sab" }],
  jantung: [{ n: "dr. Budi Santoso, Sp.JP", s: "Spesialis Jantung", days: "Sel, Kam" }],
  ortho: [{ n: "dr. Arif Hidayat, Sp.OT", s: "Spesialis Ortopedi", days: "Rab, Sab" }],
};
const SLOTS = ["08.00", "08.30", "09.00", "09.30", "10.00", "10.30", "13.00", "13.30", "14.00", "16.00", "16.30", "17.00"];
const FULL = new Set(["08.00", "09.30", "13.30"]);

/** Sample week (fixed, so the server and browser render the same). */
const DAYS = ["Sen 16", "Sel 17", "Rab 18", "Kam 19", "Jum 20", "Sab 21"];

export default function KlinikDemo() {
  const [step, setStep] = useState(1);
  const [poli, setPoli] = useState("umum");
  const [doc, setDoc] = useState(DOCTORS.umum[0].n);
  const [day, setDay] = useState(DAYS[0]);
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-[#f2f8f8] font-sans text-slate-800">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2 font-bold text-[#0e5c63]">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0e5c63] text-white">+</span>
            Klinik Sehat Sentosa
          </div>
          <a href="#booking" className="rounded-full bg-[#0e5c63] px-5 py-2 text-sm font-semibold text-white">
            Booking Online
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-[#d6eeee] px-3 py-1 text-xs font-semibold text-[#0e5c63]">BPJS & asuransi diterima</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#083b40] md:text-5xl">Berobat tanpa antre lama.</h1>
          <p className="mt-4 text-lg text-slate-600">Pilih dokter dan jam praktik dari rumah. Datang 15 menit sebelum jadwal, langsung dilayani.</p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              ["12", "Dokter"],
              ["5", "Poli"],
              ["4,9★", "Ulasan Google"],
            ].map(([a, b]) => (
              <div key={b} className="rounded-xl bg-white p-3">
                <div className="text-xl font-bold text-[#0e5c63]">{a}</div>
                <div className="text-xs text-slate-500">{b}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="booking" className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            {["Poli & dokter", "Jadwal", "Data pasien"].map((s, i) => (
              <span key={s} className={`flex-1 border-t-4 pt-2 ${step > i ? "border-[#0e5c63] text-[#0e5c63]" : "border-slate-200"}`}>
                {i + 1}. {s}
              </span>
            ))}
          </div>

          {step === 1 ? (
            <div className="mt-5">
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {POLI.map(({ k, n, icon: Icon }) => (
                  <button
                    key={k}
                    onClick={() => {
                      setPoli(k);
                      setDoc(DOCTORS[k][0].n);
                    }}
                    className={`flex flex-col items-center gap-1 rounded-xl p-3 text-xs font-medium ${poli === k ? "bg-[#0e5c63] text-white" : "bg-slate-50"}`}
                  >
                    <Icon className="h-5 w-5" />
                    {n}
                  </button>
                ))}
              </div>
              <div className="mt-4 grid gap-2">
                {DOCTORS[poli].map((d) => (
                  <button key={d.n} onClick={() => setDoc(d.n)} className={`flex items-center gap-3 rounded-xl p-3 text-left ring-2 ${doc === d.n ? "ring-[#0e5c63]" : "ring-transparent bg-slate-50"}`}>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[#d6eeee] font-bold text-[#0e5c63]">{d.n.replace(/^drg?\. /, "")[0]}</span>
                    <span>
                      <span className="block font-semibold">{d.n}</span>
                      <span className="text-xs text-slate-500">
                        {d.s} · {d.days}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(2)} className="mt-5 w-full rounded-full bg-[#0e5c63] py-3 font-semibold text-white">
                Lanjut pilih jadwal
              </button>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="mt-5">
              <div className="flex gap-2 overflow-x-auto">
                {DAYS.map((d) => (
                  <button key={d} onClick={() => setDay(d)} className={`shrink-0 rounded-xl px-4 py-2 text-sm font-medium ${day === d ? "bg-[#0e5c63] text-white" : "bg-slate-50"}`}>
                    {d}
                  </button>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {SLOTS.map((s) => (
                  <button
                    key={s}
                    disabled={FULL.has(s)}
                    onClick={() => setSlot(s)}
                    className={`rounded-lg py-2 text-sm ${slot === s ? "bg-[#0e5c63] text-white" : "bg-slate-50"} disabled:cursor-not-allowed disabled:text-slate-300 disabled:line-through`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-400">Jam yang dicoret sudah penuh.</p>
              <div className="mt-5 flex gap-2">
                <button onClick={() => setStep(1)} className="rounded-full bg-slate-100 px-4" aria-label="Kembali">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button disabled={!slot} onClick={() => setStep(3)} className="flex-1 rounded-full bg-[#0e5c63] py-3 font-semibold text-white disabled:opacity-40">
                  Lanjut
                </button>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <form
              className="mt-5 grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setStep(4);
              }}
            >
              <div className="rounded-xl bg-[#f2f8f8] p-3 text-sm">
                <div className="font-semibold">{doc}</div>
                <div className="text-slate-500">
                  {day} November · pukul {slot}
                </div>
              </div>
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama pasien" className="rounded-lg border px-3 py-2.5" />
              <input required placeholder="Nomor WhatsApp" inputMode="tel" className="rounded-lg border px-3 py-2.5" />
              <select className="rounded-lg border px-3 py-2.5">
                <option>Umum (bayar sendiri)</option>
                <option>BPJS Kesehatan</option>
                <option>Asuransi swasta</option>
              </select>
              <div className="flex gap-2">
                <button type="button" onClick={() => setStep(2)} className="rounded-full bg-slate-100 px-4" aria-label="Kembali">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button className="flex-1 rounded-full bg-[#0e5c63] py-3 font-semibold text-white">Konfirmasi Booking</button>
              </div>
            </form>
          ) : null}

          {step === 4 ? (
            <div className="mt-6 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-[#0e5c63]" />
              <h3 className="mt-3 text-xl font-bold">Booking berhasil</h3>
              <p className="mt-1 text-sm text-slate-500">Nomor booking Anda</p>
              <div className="mt-2 text-3xl font-extrabold tracking-widest text-[#0e5c63]">A-027</div>
              <p className="mt-3 text-sm text-slate-600">
                {name || "Pasien"} · {doc} · {day} pukul {slot}
              </p>
              <p className="mt-1 text-xs text-slate-400">Pengingat dikirim ke WhatsApp H-1 (demo).</p>
              <button
                onClick={() => {
                  setStep(1);
                  setSlot(null);
                }}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold"
              >
                <CalendarCheck className="h-4 w-4" /> Booking lagi
              </button>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-2xl font-bold text-[#083b40]">Jadwal praktik minggu ini</h2>
        <div className="mt-5 overflow-x-auto rounded-2xl bg-white">
          <table className="w-full min-w-[560px] text-sm">
            <thead className="bg-[#0e5c63] text-left text-white">
              <tr>
                <th className="px-4 py-3">Dokter</th>
                <th className="px-4 py-3">Poli</th>
                <th className="px-4 py-3">Hari</th>
                <th className="px-4 py-3">Jam</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(DOCTORS).flatMap(([k, list]) =>
                list.map((d) => (
                  <tr key={d.n} className="border-t">
                    <td className="px-4 py-3 font-medium">{d.n}</td>
                    <td className="px-4 py-3">{POLI.find((p) => p.k === k)?.n}</td>
                    <td className="px-4 py-3">{d.days}</td>
                    <td className="px-4 py-3">08.00–17.00</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
