"use client";

import { useState } from "react";
import { Heart, Minus, Plus, Search, ShoppingBag, Truck, X } from "lucide-react";
import { Photo, rp } from "./shared";

type P = { id: number; n: string; c: string; p: number; was?: number; tag?: string; img: string; g: [string, string] };
const PRODUCTS: P[] = [
  { id: 1, n: "Kemeja Batik Biru Modern", c: "Kemeja", p: 289_000, was: 349_000, tag: "Diskon", img: "kemeja-biru", g: ["#1f3a5a", "#4a8ac4"] },
  { id: 2, n: "Kemeja Batik Seragam Kantor", c: "Kemeja", p: 259_000, tag: "Terlaris", img: "kemeja-seragam", g: ["#3a2a1f", "#a4744a"] },
  { id: 3, n: "Kain Batik Tulis Lasem", c: "Kain", p: 750_000, img: "kain-lasem", g: ["#5a1f1f", "#c45a4a"] },
  { id: 4, n: "Kain Batik Parang Rusak", c: "Kain", p: 320_000, img: "kain-parang", g: ["#4a3a1f", "#b49a5a"] },
  { id: 5, n: "Kain Batik Kawung", c: "Kain", p: 295_000, img: "kain-kawung", g: ["#6b3a1f", "#c98b4a"] },
  { id: 6, n: "Selendang Sutra Warna", c: "Aksesori", p: 189_000, tag: "Baru", img: "selendang", g: ["#5a1f4a", "#c45aa4"] },
  { id: 7, n: "Kain Batik Cap Pekalongan", c: "Kain", p: 220_000, img: "kain-pekalongan", g: ["#3a1f5a", "#8a5ac4"] },
  { id: 8, n: "Kain Batik Sogan Klasik", c: "Kain", p: 410_000, img: "kain-sogan", g: ["#3a2a1f", "#8a6a4a"] },
];
const CATS = ["Semua", "Kemeja", "Kain", "Aksesori"];
const FREE_SHIP = 500_000;

export default function TokoOnlineDemo() {
  const [cat, setCat] = useState("Semua");
  const [q, setQ] = useState("");
  const [cart, setCart] = useState<Record<number, number>>({ 2: 1 });
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const shown = PRODUCTS.filter((p) => (cat === "Semua" || p.c === cat) && p.n.toLowerCase().includes(q.toLowerCase()));
  const lines = PRODUCTS.filter((p) => cart[p.id]).map((p) => ({ ...p, qty: cart[p.id] }));
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.qty * l.p, 0);
  const ship = subtotal === 0 || subtotal >= FREE_SHIP ? 0 : 18_000;
  const add = (id: number, d: number) => setCart((c) => ({ ...c, [id]: Math.max(0, (c[id] ?? 0) + d) }));

  return (
    <div className="min-h-screen bg-[#faf6f1] font-sans text-stone-800">
      <div className="bg-[#7a3b1d] py-2 text-center text-xs font-medium text-amber-100">Gratis ongkir untuk belanja di atas {rp(FREE_SHIP)} · Kode promo LARAS10</div>
      <header className="sticky top-0 z-30 border-b border-stone-200 bg-[#faf6f1]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-4">
          <div className="font-serif text-xl font-bold text-[#7a3b1d]">Rumah Batik Laras</div>
          <div className="ml-auto hidden max-w-xs flex-1 items-center gap-2 rounded-full bg-white px-4 py-2 ring-1 ring-stone-200 sm:flex">
            <Search className="h-4 w-4 text-stone-400" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari batik…" className="w-full bg-transparent text-sm outline-none" />
          </div>
          <button onClick={() => setOpen(true)} className="relative ml-auto rounded-full p-2 hover:bg-stone-200 sm:ml-0" aria-label="Keranjang">
            <ShoppingBag className="h-6 w-6" />
            {count ? <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-[#7a3b1d] text-[11px] font-bold text-white">{count}</span> : null}
          </button>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7a3b1d]">Koleksi Lebaran 2026</p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight md:text-5xl">Batik tulis &amp; cap asli dari pengrajin Jawa.</h1>
          <p className="mt-4 text-stone-600">Setiap pembelian mendukung 40 pengrajin di Lasem dan Pekalongan.</p>
          <a href="#produk" className="mt-6 inline-block rounded-full bg-[#7a3b1d] px-7 py-3 font-semibold text-white hover:bg-[#5e2d16]">
            Belanja Sekarang
          </a>
        </div>
        <Photo from="#7a3b1d" to="#e0b072" src="toko-online/hero" alt="Pengrajin membuat batik tulis" eager className="aspect-[5/4] rounded-3xl" />
      </section>

      <section id="produk" className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${cat === c ? "bg-stone-900 text-white" : "bg-white ring-1 ring-stone-200"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {shown.map((p) => (
            <article key={p.id} className="group">
              <div className="relative">
                <Photo from={p.g[0]} to={p.g[1]} src={`toko-online/${p.img}`} alt={p.n} className="aspect-[3/4] rounded-2xl" />
                {p.tag ? <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#7a3b1d]">{p.tag}</span> : null}
                <button
                  onClick={() => setLiked((l) => (l.includes(p.id) ? l.filter((x) => x !== p.id) : [...l, p.id]))}
                  className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5"
                  aria-label="Simpan"
                >
                  <Heart className={`h-4 w-4 ${liked.includes(p.id) ? "fill-red-500 text-red-500" : ""}`} />
                </button>
              </div>
              <h3 className="mt-3 text-sm font-medium leading-snug">{p.n}</h3>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-bold">{rp(p.p)}</span>
                {p.was ? <span className="text-xs text-stone-400 line-through">{rp(p.was)}</span> : null}
              </div>
              <button onClick={() => add(p.id, 1)} className="mt-3 w-full rounded-full border border-stone-900 py-2 text-sm font-semibold hover:bg-stone-900 hover:text-white">
                + Keranjang
              </button>
            </article>
          ))}
          {shown.length === 0 ? <p className="col-span-full py-10 text-center text-stone-500">Produk tidak ditemukan.</p> : null}
        </div>
      </section>

      {open ? (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40" onClick={() => setOpen(false)}>
          <aside className="flex h-full w-full max-w-md flex-col bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-lg font-bold">Keranjang ({count})</h2>
              <button onClick={() => setOpen(false)} aria-label="Tutup">
                <X />
              </button>
            </div>
            {done ? (
              <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
                <div className="text-5xl">✓</div>
                <h3 className="mt-4 text-xl font-bold">Pesanan #LRS-20418 dibuat</h3>
                <p className="mt-2 text-sm text-stone-500">Scan QRIS atau transfer sebelum 24 jam. (Demo: tidak ada pembayaran sungguhan.)</p>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto p-5">
                  {lines.length === 0 ? <p className="text-center text-stone-500">Keranjang masih kosong.</p> : null}
                  {lines.map((l) => (
                    <div key={l.id} className="flex gap-3">
                      <Photo from={l.g[0]} to={l.g[1]} src={`toko-online/${l.img}`} alt={l.n} className="h-20 w-16 shrink-0 rounded-lg" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{l.n}</div>
                        <div className="text-sm font-bold">{rp(l.p)}</div>
                        <div className="mt-2 flex items-center gap-3">
                          <button onClick={() => add(l.id, -1)} className="rounded-full p-1 ring-1 ring-stone-300" aria-label="Kurangi">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm">{l.qty}</span>
                          <button onClick={() => add(l.id, 1)} className="rounded-full p-1 ring-1 ring-stone-300" aria-label="Tambah">
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 border-t p-5 text-sm">
                  {subtotal > 0 && subtotal < FREE_SHIP ? (
                    <div className="flex items-center gap-2 rounded-lg bg-amber-50 p-3 text-amber-800">
                      <Truck className="h-4 w-4" /> Tambah {rp(FREE_SHIP - subtotal)} lagi untuk gratis ongkir
                    </div>
                  ) : null}
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{rp(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ongkir</span>
                    <span>{ship ? rp(ship) : "Gratis"}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold">
                    <span>Total</span>
                    <span>{rp(subtotal + ship)}</span>
                  </div>
                  <button disabled={!count} onClick={() => setDone(true)} className="mt-3 w-full rounded-full bg-[#7a3b1d] py-3 font-semibold text-white disabled:opacity-40">
                    Bayar dengan QRIS / Transfer
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      ) : null}
    </div>
  );
}
