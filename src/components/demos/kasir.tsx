"use client";

import { useState } from "react";
import { Banknote, Minus, Plus, Printer, QrCode, Search, Trash2, X } from "lucide-react";
import { Photo, rp } from "./shared";

type Prod = { id: number; n: string; c: string; p: number; stock: number; img: string };
const PRODUCTS: Prod[] = [
  { id: 1, n: "Kopi Susu Aren", c: "Minuman", p: 22_000, stock: 48, img: "restoran/es-kopi" },
  { id: 2, n: "Americano", c: "Minuman", p: 20_000, stock: 60, img: "kasir/americano" },
  { id: 3, n: "Matcha Latte", c: "Minuman", p: 28_000, stock: 22, img: "kasir/matcha" },
  { id: 4, n: "Es Teh Lemon", c: "Minuman", p: 18_000, stock: 35, img: "restoran/es-teh" },
  { id: 5, n: "Croissant Butter", c: "Makanan", p: 24_000, stock: 9, img: "kasir/croissant" },
  { id: 6, n: "Sate Ayam", c: "Makanan", p: 30_000, stock: 15, img: "restoran/sate" },
  { id: 7, n: "Nasi Goreng Kampung", c: "Makanan", p: 32_000, stock: 18, img: "kasir/nasi-goreng" },
  { id: 8, n: "Mie Goreng Spesial", c: "Makanan", p: 30_000, stock: 3, img: "kasir/mie-goreng" },
  { id: 9, n: "Kentang Goreng", c: "Snack", p: 18_000, stock: 40, img: "kasir/kentang" },
  { id: 10, n: "Pisang Goreng Keju", c: "Snack", p: 20_000, stock: 12, img: "restoran/pisang" },
];
const CATS = ["Semua", "Minuman", "Makanan", "Snack"];
const TAX = 0.1;
const QUICK = [50_000, 100_000, 150_000, 200_000];

export default function KasirDemo() {
  const [cat, setCat] = useState("Semua");
  const [q, setQ] = useState("");
  const [cart, setCart] = useState<Record<number, number>>({ 1: 2, 5: 1 });
  const [disc, setDisc] = useState(0);
  const [pay, setPay] = useState<"cash" | "qris" | null>(null);
  const [cash, setCash] = useState(0);
  const [receipt, setReceipt] = useState(false);

  const lines = PRODUCTS.filter((p) => cart[p.id]).map((p) => ({ ...p, qty: cart[p.id] }));
  const sub = lines.reduce((s, l) => s + l.p * l.qty, 0);
  const discount = Math.round(sub * disc);
  const tax = Math.round((sub - discount) * TAX);
  const total = sub - discount + tax;
  const add = (id: number, d: number) => setCart((c) => ({ ...c, [id]: Math.max(0, (c[id] ?? 0) + d) }));
  const reset = () => {
    setCart({});
    setDisc(0);
    setPay(null);
    setCash(0);
    setReceipt(false);
  };
  const shown = PRODUCTS.filter((p) => (cat === "Semua" || p.c === cat) && p.n.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="flex min-h-screen flex-col bg-[#f1f0f7] font-sans text-slate-800 lg:h-screen lg:flex-row">
      <main className="flex flex-1 flex-col overflow-hidden p-4 lg:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="font-bold text-[#3b2a6b]">Kopi Senja · Kasir 1</div>
          <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">Shift buka 07.00 · Rina</span>
          <div className="ml-auto flex min-w-[200px] flex-1 items-center gap-2 rounded-xl bg-white px-3 py-2 sm:flex-none">
            <Search className="h-4 w-4 text-slate-400" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari produk / scan barcode" className="w-full bg-transparent text-sm outline-none" />
          </div>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`shrink-0 rounded-xl px-4 py-2 text-sm font-semibold ${cat === c ? "bg-[#3b2a6b] text-white" : "bg-white"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-4 grid flex-1 auto-rows-min grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3 xl:grid-cols-4">
          {shown.map((p) => (
            <button key={p.id} onClick={() => add(p.id, 1)} className="rounded-2xl bg-white p-4 text-left transition hover:ring-2 hover:ring-[#3b2a6b]">
              <Photo from="#ece8f8" to="#c9bff0" src={p.img} alt={p.n} className="h-24 rounded-xl" />
              <div className="mt-3 text-sm font-semibold leading-tight">{p.n}</div>
              <div className="mt-1 flex items-center justify-between text-sm">
                <span className="font-bold text-[#3b2a6b]">{rp(p.p)}</span>
                <span className={`text-[11px] ${p.stock < 5 ? "font-semibold text-red-600" : "text-slate-400"}`}>stok {p.stock}</span>
              </div>
            </button>
          ))}
        </div>
      </main>

      <aside className="flex w-full flex-col bg-white lg:w-[380px]">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="font-bold">Pesanan #1042</h2>
          <button onClick={reset} className="flex items-center gap-1 text-xs text-red-600">
            <Trash2 className="h-3.5 w-3.5" /> Kosongkan
          </button>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {lines.length === 0 ? <p className="py-8 text-center text-sm text-slate-400">Ketuk produk untuk menambah.</p> : null}
          {lines.map((l) => (
            <div key={l.id} className="flex items-center gap-3">
              <div className="flex-1">
                <div className="text-sm font-medium">{l.n}</div>
                <div className="text-xs text-slate-500">{rp(l.p)}</div>
              </div>
              <button onClick={() => add(l.id, -1)} className="rounded-lg bg-slate-100 p-1" aria-label="Kurangi">
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-5 text-center text-sm font-semibold">{l.qty}</span>
              <button onClick={() => add(l.id, 1)} className="rounded-lg bg-slate-100 p-1" aria-label="Tambah">
                <Plus className="h-3.5 w-3.5" />
              </button>
              <span className="w-20 text-right text-sm font-semibold">{rp(l.p * l.qty)}</span>
            </div>
          ))}
        </div>
        <div className="space-y-1.5 border-t p-4 text-sm">
          <div className="flex gap-2 pb-2">
            {[0, 0.05, 0.1].map((d) => (
              <button key={d} onClick={() => setDisc(d)} className={`flex-1 rounded-lg py-1.5 text-xs font-semibold ${disc === d ? "bg-[#3b2a6b] text-white" : "bg-slate-100"}`}>
                {d ? `Diskon ${d * 100}%` : "Tanpa diskon"}
              </button>
            ))}
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{rp(sub)}</span>
          </div>
          {discount ? (
            <div className="flex justify-between text-green-700">
              <span>Diskon</span>
              <span>−{rp(discount)}</span>
            </div>
          ) : null}
          <div className="flex justify-between">
            <span>PB1 10%</span>
            <span>{rp(tax)}</span>
          </div>
          <div className="flex justify-between pt-1 text-lg font-bold">
            <span>Total</span>
            <span>{rp(total)}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button disabled={!total} onClick={() => setPay("cash")} className="flex items-center justify-center gap-2 rounded-xl bg-[#3b2a6b] py-3 font-semibold text-white disabled:opacity-40">
              <Banknote className="h-4 w-4" /> Tunai
            </button>
            <button disabled={!total} onClick={() => setPay("qris")} className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 font-semibold text-white disabled:opacity-40">
              <QrCode className="h-4 w-4" /> QRIS
            </button>
          </div>
        </div>
      </aside>

      {pay ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">{receipt ? "Struk" : pay === "cash" ? "Bayar tunai" : "Bayar QRIS"}</h3>
              <button onClick={() => (receipt ? reset() : setPay(null))} aria-label="Tutup">
                <X />
              </button>
            </div>
            {receipt ? (
              <div className="mt-4 font-mono text-xs">
                <div className="text-center font-bold">KOPI SENJA</div>
                <div className="text-center text-slate-500">#1042 · Kasir Rina</div>
                <div className="my-2 border-t border-dashed" />
                {lines.map((l) => (
                  <div key={l.id} className="flex justify-between">
                    <span>
                      {l.qty}x {l.n}
                    </span>
                    <span>{rp(l.p * l.qty)}</span>
                  </div>
                ))}
                <div className="my-2 border-t border-dashed" />
                <div className="flex justify-between font-bold">
                  <span>TOTAL</span>
                  <span>{rp(total)}</span>
                </div>
                {pay === "cash" ? (
                  <>
                    <div className="flex justify-between">
                      <span>Tunai</span>
                      <span>{rp(cash)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Kembali</span>
                      <span>{rp(cash - total)}</span>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between">
                    <span>QRIS</span>
                    <span>LUNAS</span>
                  </div>
                )}
                <button onClick={reset} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#3b2a6b] py-3 font-sans text-sm font-semibold text-white">
                  <Printer className="h-4 w-4" /> Cetak &amp; transaksi baru
                </button>
              </div>
            ) : pay === "cash" ? (
              <div className="mt-4">
                <div className="text-sm text-slate-500">Total tagihan</div>
                <div className="text-3xl font-extrabold">{rp(total)}</div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[total, ...QUICK.filter((x) => x > total)].slice(0, 4).map((v) => (
                    <button key={v} onClick={() => setCash(v)} className={`rounded-xl py-2.5 text-sm font-semibold ${cash === v ? "bg-[#3b2a6b] text-white" : "bg-slate-100"}`}>
                      {v === total ? "Uang pas" : rp(v)}
                    </button>
                  ))}
                </div>
                <div className="mt-4 flex justify-between rounded-xl bg-green-50 p-3 font-semibold text-green-800">
                  <span>Kembalian</span>
                  <span>{cash >= total ? rp(cash - total) : "–"}</span>
                </div>
                <button disabled={cash < total} onClick={() => setReceipt(true)} className="mt-4 w-full rounded-xl bg-[#3b2a6b] py-3 font-semibold text-white disabled:opacity-40">
                  Selesaikan
                </button>
              </div>
            ) : (
              <div className="mt-4 text-center">
                <div className="mx-auto grid h-48 w-48 grid-cols-8 gap-0.5 rounded-xl bg-white p-3 ring-1 ring-slate-200" aria-label="Contoh kode QR">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <span key={i} className={(i * 7 + (i % 5)) % 3 ? "bg-slate-900" : "bg-white"} />
                  ))}
                </div>
                <div className="mt-3 text-2xl font-extrabold">{rp(total)}</div>
                <p className="text-xs text-slate-500">Pelanggan scan dengan e-wallet atau m-banking.</p>
                <button onClick={() => setReceipt(true)} className="mt-4 w-full rounded-xl bg-green-600 py-3 font-semibold text-white">
                  Pembayaran diterima
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
