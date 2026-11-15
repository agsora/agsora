"use client";

import { useState, type FormEvent } from "react";
import { CalendarDays, Clock, Flame, Leaf, MapPin, Minus, Plus, Users } from "lucide-react";
import { Photo, Toast, rp } from "./shared";

type Item = { id: number; n: string; d: string; p: number; c: string; hot?: boolean; veg?: boolean; g: [string, string] };
const MENU: Item[] = [
  { id: 1, n: "Rendang Daging Sapi", d: "Dimasak 8 jam dengan rempah Minang", p: 58_000, c: "Utama", hot: true, g: ["#5a2a12", "#a2531e"] },
  { id: 2, n: "Ayam Bakar Taliwang", d: "Pedas manis khas Lombok, nasi hangat", p: 45_000, c: "Utama", hot: true, g: ["#7a2e12", "#d9682a"] },
  { id: 3, n: "Gulai Ikan Kakap", d: "Kuah santan kuning, daun kunyit", p: 52_000, c: "Utama", g: ["#7a5a12", "#d9b02a"] },
  { id: 4, n: "Gado-gado Jakarta", d: "Sayur rebus, tahu, telur, saus kacang", p: 32_000, c: "Utama", veg: true, g: ["#3a5a12", "#8ab02a"] },
  { id: 5, n: "Tahu Telur Surabaya", d: "Renyah, petis, tauge", p: 24_000, c: "Pembuka", veg: true, g: ["#7a6a3a", "#d9c07a"] },
  { id: 6, n: "Sate Lilit Bali (5 tusuk)", d: "Ikan tenggiri, sambal matah", p: 35_000, c: "Pembuka", g: ["#6a3a1a", "#c47a3a"] },
  { id: 7, n: "Es Teh Serai", d: "Teh melati, serai segar", p: 15_000, c: "Minuman", g: ["#5a4a12", "#c4a02a"] },
  { id: 8, n: "Es Kopi Gula Aren", d: "Robusta Lampung, gula aren cair", p: 25_000, c: "Minuman", g: ["#3a2a1a", "#8a6a4a"] },
  { id: 9, n: "Klepon Pandan", d: "Isi gula merah, kelapa parut", p: 18_000, c: "Penutup", veg: true, g: ["#2a5a2a", "#6ab06a"] },
];
const CATS = ["Utama", "Pembuka", "Minuman", "Penutup"];
const TIMES = ["11.00", "12.00", "13.00", "18.00", "19.00", "20.00"];

export default function RestoranDemo() {
  const [cat, setCat] = useState("Utama");
  const [order, setOrder] = useState<Record<number, number>>({});
  const [time, setTime] = useState("19.00");
  const [guests, setGuests] = useState(2);
  const [toast, setToast] = useState<string | null>(null);

  const lines = MENU.filter((m) => order[m.id]);
  const total = lines.reduce((s, m) => s + m.p * order[m.id], 0);
  const add = (id: number, d: number) => setOrder((o) => ({ ...o, [id]: Math.max(0, (o[id] ?? 0) + d) }));
  const flash = (t: string) => {
    setToast(t);
    setTimeout(() => setToast(null), 3000);
  };
  function reserve(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    flash(`Meja untuk ${guests} orang pukul ${time} tercatat. Konfirmasi dikirim ke WhatsApp.`);
  }

  return (
    <div className="min-h-screen bg-[#f6f1e7] font-sans text-[#2b2118]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 text-white">
          <div className="font-serif text-2xl font-bold">Dapur Rempah</div>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#menu">Menu</a>
            <a href="#reservasi">Reservasi</a>
            <a href="#lokasi">Lokasi</a>
          </nav>
        </div>
      </header>
      <Photo from="#2f4a2a" to="#a2531e" className="min-h-[460px]">
        <div className="mx-auto max-w-3xl px-5 pt-16 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">Masakan Nusantara</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-6xl">Rasa rumah, resep warisan.</h1>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#menu" className="rounded-full bg-amber-400 px-7 py-3 font-semibold text-[#2b2118]">
              Lihat Menu
            </a>
            <a href="#reservasi" className="rounded-full border border-white/50 px-7 py-3 font-semibold">
              Pesan Meja
            </a>
          </div>
        </div>
      </Photo>

      <section id="menu" className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="font-serif text-3xl font-bold">Menu kami</h2>
          <div className="mt-5 flex gap-2 overflow-x-auto">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold ${cat === c ? "bg-[#2f4a2a] text-white" : "bg-white"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {MENU.filter((m) => m.c === cat).map((m) => (
              <div key={m.id} className="flex gap-4 rounded-2xl bg-white p-3">
                <Photo from={m.g[0]} to={m.g[1]} className="h-24 w-24 shrink-0 rounded-xl" />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center gap-1.5 font-semibold">
                    {m.n}
                    {m.hot ? <Flame className="h-4 w-4 text-red-500" aria-label="Pedas" /> : null}
                    {m.veg ? <Leaf className="h-4 w-4 text-green-600" aria-label="Vegetarian" /> : null}
                  </div>
                  <p className="text-xs text-stone-500">{m.d}</p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="font-bold">{rp(m.p)}</span>
                    {order[m.id] ? (
                      <div className="flex items-center gap-2">
                        <button onClick={() => add(m.id, -1)} className="rounded-full bg-stone-100 p-1" aria-label="Kurangi">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-4 text-center text-sm font-semibold">{order[m.id]}</span>
                        <button onClick={() => add(m.id, 1)} className="rounded-full bg-[#2f4a2a] p-1 text-white" aria-label="Tambah">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => add(m.id, 1)} className="rounded-full bg-[#2f4a2a] px-3 py-1 text-xs font-semibold text-white">
                        Tambah
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-2xl bg-white p-5 lg:sticky lg:top-5">
          <h3 className="font-bold">Pesanan Anda</h3>
          {lines.length === 0 ? <p className="mt-3 text-sm text-stone-500">Belum ada menu dipilih.</p> : null}
          <ul className="mt-3 space-y-2 text-sm">
            {lines.map((m) => (
              <li key={m.id} className="flex justify-between gap-2">
                <span>
                  {order[m.id]}× {m.n}
                </span>
                <span>{rp(m.p * order[m.id])}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t pt-3 font-bold">
            <span>Total</span>
            <span>{rp(total)}</span>
          </div>
          <button disabled={!total} onClick={() => flash("Pesanan dikirim ke WhatsApp restoran (demo).")} className="mt-4 w-full rounded-full bg-[#25d366] py-3 font-semibold text-white disabled:opacity-40">
            Pesan via WhatsApp
          </button>
        </aside>
      </section>

      <section id="reservasi" className="bg-[#2f4a2a] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold">Reservasi meja</h2>
            <p className="mt-3 text-green-100">Untuk rombongan lebih dari 15 orang, hubungi kami untuk paket prasmanan.</p>
            <div id="lokasi" className="mt-8 space-y-3 text-sm text-green-50">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0" /> Jl. Contoh No. 12, Medan
              </div>
              <div className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0" /> Setiap hari 10.00–22.00
              </div>
            </div>
          </div>
          <form onSubmit={reserve} className="grid gap-4 rounded-2xl bg-white p-6 text-[#2b2118]">
            <label className="grid gap-1 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" /> Tanggal
              </span>
              <input type="date" required className="rounded-lg border px-3 py-2.5 font-normal" />
            </label>
            <div className="grid gap-1 text-sm font-semibold">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Jam
              </span>
              <div className="grid grid-cols-3 gap-2">
                {TIMES.map((t) => (
                  <button type="button" key={t} onClick={() => setTime(t)} className={`rounded-lg py-2 text-sm ${time === t ? "bg-[#2f4a2a] text-white" : "bg-stone-100 font-normal"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between text-sm font-semibold">
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" /> Jumlah tamu
              </span>
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setGuests(Math.max(1, guests - 1))} className="rounded-full bg-stone-100 p-1.5" aria-label="Kurangi">
                  <Minus className="h-4 w-4" />
                </button>
                <span>{guests}</span>
                <button type="button" onClick={() => setGuests(Math.min(15, guests + 1))} className="rounded-full bg-stone-100 p-1.5" aria-label="Tambah">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <input required placeholder="Nama & nomor WhatsApp" className="rounded-lg border px-3 py-2.5 text-sm" />
            <button className="rounded-full bg-amber-400 py-3 font-semibold">Pesan Meja</button>
          </form>
        </div>
      </section>
      <Toast text={toast} />
    </div>
  );
}
