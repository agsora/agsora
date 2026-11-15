"use client";

import { useActionState, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { PRICING_CATEGORIES, PRICING_UNITS, type PricingItem } from "@/config/pricing";
import type { ContactInfo, ProposalContent, TaxSettings } from "@/config/site-data";
import { saveContact, savePricing, saveProposal, saveServicePrices, saveTax, type SaveResult } from "./actions";

function Result({ state, pending }: { state: SaveResult; pending: boolean }) {
  if (pending) return <span className="sn-muted">Menyimpan…</span>;
  if (!state) return null;
  return <span style={{ color: state.ok ? "var(--sn-success)" : "var(--sn-danger)", fontSize: "0.875rem" }}>{state.message}</span>;
}

const CATEGORIES = PRICING_CATEGORIES;

type Row = { id: string; name_id: string; name_en: string; name_zh: string; price: string; unit: string; category: PricingItem["category"] };

const toRow = (p: PricingItem): Row => ({
  id: p.id,
  name_id: p.name.id,
  name_en: p.name.en,
  name_zh: p.name.zh,
  price: p.price === null ? "" : String(p.price),
  unit: Object.entries(PRICING_UNITS).find(([, u]) => u.id === p.unit?.id)?.[0] ?? "",
  category: p.category,
});

export function PricingEditor({ items }: { items: PricingItem[] }) {
  const [rows, setRows] = useState<Row[]>(items.map(toRow));
  const [state, action, pending] = useActionState(savePricing, null);
  const set = (i: number, patch: Partial<Row>) => setRows((l) => l.map((r, n) => (n === i ? { ...r, ...patch } : r)));

  return (
    <form action={action} style={{ padding: "0 1.5rem 1.5rem" }}>
      <input type="hidden" name="items" value={JSON.stringify(rows)} />
      <div className="sn-table-wrap">
        <table className="sn-table">
          <thead>
            <tr>
              <th>Nama (ID)</th>
              <th>English</th>
              <th>中文</th>
              <th>Harga mulai (Rp)</th>
              <th>Satuan</th>
              <th>Kategori</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>
                  <input className="sn-input" value={r.name_id} maxLength={120} onChange={(e) => set(i, { name_id: e.target.value })} aria-label="Nama Indonesia" />
                </td>
                <td>
                  <input className="sn-input" value={r.name_en} maxLength={120} onChange={(e) => set(i, { name_en: e.target.value })} aria-label="Nama English" />
                </td>
                <td>
                  <input className="sn-input" value={r.name_zh} maxLength={120} onChange={(e) => set(i, { name_zh: e.target.value })} aria-label="Nama Mandarin" />
                </td>
                <td>
                  <input
                    className="sn-input"
                    inputMode="numeric"
                    value={r.price}
                    placeholder="kosong = sesuai kesepakatan"
                    style={{ minWidth: "10rem" }}
                    onChange={(e) => set(i, { price: e.target.value.replace(/\D/g, "") })}
                    aria-label="Harga"
                  />
                </td>
                <td>
                  <select className="sn-input" value={r.unit} onChange={(e) => set(i, { unit: e.target.value })} aria-label="Satuan">
                    <option value="">–</option>
                    {Object.entries(PRICING_UNITS).map(([key, u]) => (
                      <option key={key} value={key}>
                        {u.id}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <select className="sn-input" value={r.category} onChange={(e) => set(i, { category: e.target.value as Row["category"] })} aria-label="Kategori">
                    {CATEGORIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <button type="button" className="sn-btn sn-btn-sm" aria-label="Hapus baris" onClick={() => setRows((l) => l.filter((_, n) => n !== i))}>
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginTop: "1rem", flexWrap: "wrap" }}>
        <button
          type="button"
          className="sn-btn"
          onClick={() => setRows((l) => [...l, { id: "", name_id: "", name_en: "", name_zh: "", price: "", unit: "", category: "Website & Digital" }])}
        >
          <Plus size={14} /> Tambah layanan
        </button>
        <button className="sn-btn sn-btn-primary" disabled={pending}>
          Simpan daftar harga
        </button>
        <Result state={state} pending={pending} />
      </div>
    </form>
  );
}

export function ServicePricesForm({ services, prices }: { services: { id: string; title: string }[]; prices: Record<string, number> }) {
  const [state, action, pending] = useActionState(saveServicePrices, null);
  return (
    <form action={action} style={{ padding: "0 1.5rem 1.5rem" }}>
      <div className="sn-form-grid" style={{ marginTop: 0 }}>
        {services.map((s) => (
          <label key={s.id} className="sn-field">
            {s.title}
            <input name={`price_${s.id}`} inputMode="numeric" className="sn-input" defaultValue={prices[s.id]} />
          </label>
        ))}
      </div>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginTop: "1rem" }}>
        <button className="sn-btn sn-btn-primary" disabled={pending}>
          Simpan harga Mulai dari
        </button>
        <Result state={state} pending={pending} />
      </div>
    </form>
  );
}

export function ContactForm({ contact }: { contact: ContactInfo }) {
  const [state, action, pending] = useActionState(saveContact, null);
  return (
    <form action={action} style={{ padding: "0 1.5rem 1.5rem" }}>
      <div className="sn-form-grid" style={{ marginTop: 0 }}>
        <label className="sn-field">
          Email
          <input name="email" type="email" required className="sn-input" defaultValue={contact.email} />
        </label>
        <label className="sn-field">
          Nomor WhatsApp
          <input name="whatsappNumber" required className="sn-input" defaultValue={contact.whatsappNumber} />
        </label>
        <label className="sn-field">
          Instagram (URL)
          <input name="instagram" className="sn-input" defaultValue={contact.instagram} />
        </label>
        <label className="sn-field">
          Facebook (URL)
          <input name="facebook" className="sn-input" defaultValue={contact.facebook} />
        </label>
        <label className="sn-field">
          LinkedIn (URL)
          <input name="linkedin" className="sn-input" defaultValue={contact.linkedin} />
        </label>
        <label className="sn-field">
          TikTok (URL)
          <input name="tiktok" className="sn-input" defaultValue={contact.tiktok} />
        </label>
      </div>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginTop: "1rem" }}>
        <button className="sn-btn sn-btn-primary" disabled={pending}>
          Simpan kontak
        </button>
        <Result state={state} pending={pending} />
      </div>
    </form>
  );
}

export function TaxForm({ tax }: { tax: TaxSettings }) {
  const [state, action, pending] = useActionState(saveTax, null);
  return (
    <form action={action} style={{ padding: "0 1.5rem 1.5rem", display: "grid", gap: "0.85rem" }}>
      <label style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <input type="checkbox" name="pkp" defaultChecked={tax.pkp} />
        <span>
          Perusahaan sudah <strong>PKP</strong> (Pengusaha Kena Pajak). PPN otomatis ditambahkan ke setiap proposal. Matikan kalau belum PKP.
        </span>
      </label>
      <div className="sn-form-grid" style={{ marginTop: 0 }}>
        <label className="sn-field">
          Tarif PPN efektif (%)
          <input name="ppnRate" inputMode="decimal" className="sn-input" defaultValue={tax.ppnRate} />
        </label>
        <label className="sn-field">
          NPWP perusahaan (tampil di proposal)
          <input name="npwp" className="sn-input" maxLength={30} placeholder="00.000.000.0-000.000" defaultValue={tax.npwp} />
        </label>
        <label className="sn-field">
          NIB (tampil di proposal)
          <input name="nib" className="sn-input" inputMode="numeric" maxLength={20} placeholder="13 digit" defaultValue={tax.nib} />
        </label>
      </div>
      <label style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <input type="checkbox" name="pph23Note" defaultChecked={tax.pph23Note} />
        <span>Cantumkan catatan PPh 23 (klien badan memotong 2% dan memberi bukti potong) di proposal</span>
      </label>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        <button className="sn-btn sn-btn-primary" disabled={pending}>
          Simpan pengaturan pajak
        </button>
        <Result state={state} pending={pending} />
      </div>
    </form>
  );
}

const pairText = (l: { title: string; text: string }[]) => l.map((p) => `${p.title} | ${p.text}`).join("\n");

export function ProposalForm({ proposal }: { proposal: ProposalContent }) {
  const [state, action, pending] = useActionState(saveProposal, null);
  return (
    <form action={action} style={{ padding: "0 1.5rem 1.5rem", display: "grid", gap: "0.85rem" }}>
      <label className="sn-field">
        Tagline
        <input name="tagline" className="sn-input" maxLength={160} defaultValue={proposal.tagline} />
      </label>
      <label className="sn-field">
        Judul filosofi
        <input name="philosophyTitle" className="sn-input" maxLength={80} defaultValue={proposal.philosophyTitle} />
      </label>
      <label className="sn-field">
        Filosofi
        <textarea name="philosophy" rows={5} className="sn-input" maxLength={1500} defaultValue={proposal.philosophy} />
      </label>
      <label className="sn-field">
        Pilar (satu per baris: Judul | penjelasan)
        <textarea name="pillars" rows={4} className="sn-input" defaultValue={pairText(proposal.pillars)} />
      </label>
      <label className="sn-field">
        Tahapan kerja (satu per baris: Judul | penjelasan)
        <textarea name="process" rows={6} className="sn-input" defaultValue={pairText(proposal.process)} />
      </label>
      <label className="sn-field">
        Komitmen (satu per baris)
        <textarea name="commitments" rows={4} className="sn-input" defaultValue={proposal.commitments.join("\n")} />
      </label>
      <label className="sn-field">
        Kalimat penutup
        <textarea name="closing" rows={3} className="sn-input" maxLength={600} defaultValue={proposal.closing} />
      </label>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        <button className="sn-btn sn-btn-primary" disabled={pending}>
          Simpan isi proposal
        </button>
        <Result state={state} pending={pending} />
      </div>
    </form>
  );
}
