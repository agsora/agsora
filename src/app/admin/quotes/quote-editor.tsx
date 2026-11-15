"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import type { PricingItem } from "@/config/pricing";
import { computeTotals, idr, type QuoteItem } from "@/lib/quote";
import { saveQuote } from "./actions";

export type EditorInitial = {
  id?: number;
  lead_id?: number | null;
  client_name: string;
  client_email: string;
  client_company: string;
  items: QuoteItem[];
  discount_pct: number;
  tax_pct: number;
  valid_until: string;
  terms: string;
};

/** Line-item editor with live totals. Prices start from the website price list and can be changed. */
export function QuoteEditor({ initial, pricing, ppn, pph23 }: { initial: EditorInitial; pricing: PricingItem[]; ppn: number; pph23: boolean }) {
  const [items, setItems] = useState<QuoteItem[]>(initial.items.length ? initial.items : []);
  const [discount, setDiscount] = useState(String(initial.discount_pct || 0));

  const num = (v: string) => Math.min(100, Math.max(0, Number(v.replace(",", ".")) || 0));
  const totals = computeTotals(items, num(discount), ppn);

  const update = (i: number, patch: Partial<QuoteItem>) => setItems((list) => list.map((it, n) => (n === i ? { ...it, ...patch } : it)));
  const addFromList = (id: string) => {
    const p = pricing.find((x) => x.id === id);
    if (p) setItems((list) => [...list, { name: p.name.id, qty: 1, unit_price: p.price ?? 0 }]);
  };

  return (
    <form action={saveQuote} className="sn-card" style={{ padding: "1.5rem" }}>
      {initial.id ? <input type="hidden" name="id" value={initial.id} /> : null}
      {initial.lead_id ? <input type="hidden" name="lead_id" value={initial.lead_id} /> : null}
      <input type="hidden" name="items" value={JSON.stringify(items)} />

      <div className="sn-form-grid" style={{ marginTop: 0 }}>
        <label className="sn-field">
          Nama klien *
          <input name="client_name" required maxLength={160} className="sn-input" defaultValue={initial.client_name} />
        </label>
        <label className="sn-field">
          Perusahaan
          <input name="client_company" maxLength={160} className="sn-input" defaultValue={initial.client_company} />
        </label>
        <label className="sn-field">
          Email klien
          <input name="client_email" type="email" maxLength={200} className="sn-input" defaultValue={initial.client_email} />
        </label>
        <label className="sn-field">
          Berlaku sampai
          <input name="valid_until" type="date" className="sn-input" defaultValue={initial.valid_until} />
        </label>
      </div>

      <h4 style={{ margin: "1.5rem 0 0.6rem" }}>Item penawaran</h4>
      <div className="sn-table-wrap">
        <table className="sn-items">
          <thead>
            <tr className="sn-muted" style={{ textAlign: "left", fontSize: "0.75rem" }}>
              <th>Deskripsi</th>
              <th style={{ width: "4.5rem" }}>Qty</th>
              <th style={{ width: "9.5rem" }}>Harga satuan (Rp)</th>
              <th style={{ width: "8rem", textAlign: "right" }}>Jumlah</th>
              <th style={{ width: "2rem" }} />
            </tr>
          </thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i}>
                <td>
                  <input className="sn-input" value={it.name} maxLength={200} onChange={(e) => update(i, { name: e.target.value })} aria-label="Deskripsi item" />
                  <input
                    className="sn-input"
                    style={{ marginTop: "0.25rem", fontSize: "0.8125rem" }}
                    value={it.note ?? ""}
                    maxLength={300}
                    placeholder="Catatan item (opsional)"
                    onChange={(e) => update(i, { note: e.target.value })}
                    aria-label="Catatan item"
                  />
                </td>
                <td>
                  <input className="sn-input" inputMode="numeric" value={it.qty} onChange={(e) => update(i, { qty: Math.max(1, Math.floor(Number(e.target.value.replace(/\D/g, "")) || 1)) })} aria-label="Jumlah" />
                </td>
                <td>
                  <input className="sn-input" inputMode="numeric" value={it.unit_price} onChange={(e) => update(i, { unit_price: Math.floor(Number(e.target.value.replace(/\D/g, "")) || 0) })} aria-label="Harga satuan" />
                </td>
                <td style={{ textAlign: "right", paddingTop: "0.6rem" }}>{idr(it.qty * it.unit_price)}</td>
                <td>
                  <button type="button" className="sn-btn sn-btn-sm" onClick={() => setItems((l) => l.filter((_, n) => n !== i))} aria-label="Hapus item">
                    <Trash2 size={13} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {items.length === 0 ? <p className="sn-muted" style={{ margin: "0.5rem 0" }}>Belum ada item. Pilih dari daftar harga atau tambah item bebas.</p> : null}

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", margin: "0.75rem 0 1.25rem" }}>
        <select className="sn-input" style={{ maxWidth: "20rem" }} value="" onChange={(e) => addFromList(e.target.value)} aria-label="Tambah dari daftar harga">
          <option value="">+ Tambah dari daftar harga…</option>
          {pricing.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name.id}
              {p.price ? ` (mulai ${idr(p.price)})` : " (sesuai kesepakatan)"}
            </option>
          ))}
        </select>
        <button type="button" className="sn-btn" onClick={() => setItems((l) => [...l, { name: "", qty: 1, unit_price: 0 }])}>
          <Plus size={14} /> Item bebas
        </button>
      </div>

      <div className="sn-form-grid" style={{ marginTop: 0 }}>
        <label className="sn-field">
          Diskon (%)
          <input name="discount_pct" inputMode="decimal" className="sn-input" value={discount} onChange={(e) => setDiscount(e.target.value)} />
        </label>
        <div className="sn-field">
          PPN
          <div className="sn-input">{ppn > 0 ? `${ppn}% otomatis (perusahaan PKP)` : "Tidak dipungut (belum PKP)"}</div>
        </div>
      </div>

      <div className="sn-totals" style={{ margin: "1.25rem 0 1.25rem auto" }}>
        <span className="sn-muted">Subtotal</span>
        <span style={{ textAlign: "right" }}>{idr(totals.subtotal)}</span>
        {totals.discount ? (
          <>
            <span className="sn-muted">Diskon</span>
            <span style={{ textAlign: "right" }}>-{idr(totals.discount)}</span>
          </>
        ) : null}
        {totals.tax ? (
          <>
            <span className="sn-muted">PPN</span>
            <span style={{ textAlign: "right" }}>{idr(totals.tax)}</span>
          </>
        ) : null}
        <strong>Total</strong>
        <strong style={{ textAlign: "right", fontSize: "1.15rem" }}>{idr(totals.total)}</strong>
        {pph23 ? (
          <>
            <span className="sn-muted">Bila klien memotong PPh 23 (2%)</span>
            <span style={{ textAlign: "right" }}>-{idr(Math.round(totals.taxable * 0.02))}</span>
            <span className="sn-muted">Yang kamu terima</span>
            <span style={{ textAlign: "right" }}>{idr(totals.total - Math.round(totals.taxable * 0.02))}</span>
          </>
        ) : null}
      </div>

      <label className="sn-field">
        Syarat &amp; ketentuan
        <textarea name="terms" rows={4} maxLength={3000} className="sn-input" defaultValue={initial.terms} />
      </label>

      <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "1.25rem" }}>
        <button name="intent" value="save" className="sn-btn">
          Simpan draft
        </button>
        <button name="intent" value="submit" className="sn-btn sn-btn-primary">
          Simpan &amp; ajukan ke owner
        </button>
      </div>
    </form>
  );
}
