"use server";

import { revalidatePath, updateTag } from "next/cache";
import { isAdmin } from "@/lib/admin-auth";
import { sbWrite } from "@/lib/supabase";
import { SITE_CONTENT_TAG } from "@/lib/site-content";
import { defaultContact, defaultProposal, defaultServicePrices, defaultTax } from "@/config/site-data";
import { services } from "@/config/services";
import { PRICING_CATEGORIES, PRICING_UNITS, type PricingItem } from "@/config/pricing";

const CATEGORIES: readonly string[] = PRICING_CATEGORIES;

export type SaveResult = { ok: boolean; message: string } | null;

async function put(key: string, value: unknown): Promise<SaveResult> {
  if (!(await isAdmin())) return { ok: false, message: "Tidak diizinkan." };
  const ok = await sbWrite(
    "site_content",
    "POST",
    { key, value, updated_at: new Date().toISOString() },
    "on_conflict=key",
    "resolution=merge-duplicates,return=minimal"
  );
  if (!ok) return { ok: false, message: "Gagal menyimpan. Pastikan migrasi site_content sudah dijalankan di Supabase." };
  updateTag(SITE_CONTENT_TAG);
  revalidatePath("/", "layout");
  return { ok: true, message: "Tersimpan. Website sudah memakai data terbaru." };
}

const str = (f: FormData, name: string, max: number) => String(f.get(name) ?? "").trim().slice(0, max);
const rupiah = (v: unknown) => {
  const n = Number(String(v ?? "").replace(/\D/g, ""));
  return Number.isFinite(n) ? Math.min(n, 1e12) : 0;
};

export async function savePricing(_: SaveResult, formData: FormData): Promise<SaveResult> {
  let raw: unknown;
  try {
    raw = JSON.parse(String(formData.get("items") ?? "[]"));
  } catch {
    return { ok: false, message: "Data tidak valid." };
  }
  if (!Array.isArray(raw)) return { ok: false, message: "Data tidak valid." };

  const seen = new Set<string>();
  const items: PricingItem[] = [];
  for (const r of raw.slice(0, 60) as Record<string, unknown>[]) {
    const nameId = String(r.name_id ?? "").trim().slice(0, 120);
    if (!nameId) continue;
    let id =
      String(r.id ?? "").toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 40) ||
      nameId.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) ||
      "item";
    while (seen.has(id)) id += "-2";
    seen.add(id);
    const priceRaw = String(r.price ?? "").replace(/\D/g, "");
    const unit = (PRICING_UNITS as Record<string, PricingItem["unit"]>)[String(r.unit ?? "")];
    const category = CATEGORIES.includes(String(r.category)) ? (r.category as PricingItem["category"]) : "Website & Digital";
    items.push({
      id,
      name: {
        id: nameId,
        en: String(r.name_en ?? "").trim().slice(0, 120) || nameId,
        zh: String(r.name_zh ?? "").trim().slice(0, 120) || nameId,
      },
      price: priceRaw ? rupiah(priceRaw) : null,
      ...(unit ? { unit } : {}),
      category,
    });
  }
  if (items.length === 0) return { ok: false, message: "Daftar harga tidak boleh kosong." };
  return put("pricing", items);
}

export async function saveServicePrices(_: SaveResult, formData: FormData): Promise<SaveResult> {
  const out: Record<string, number> = {};
  for (const s of services) {
    const n = rupiah(formData.get(`price_${s.id}`));
    out[s.id] = n > 0 ? n : defaultServicePrices[s.id];
  }
  return put("service_prices", out);
}

export async function saveContact(_: SaveResult, formData: FormData): Promise<SaveResult> {
  const email = str(formData, "email", 200);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, message: "Email tidak valid." };
  const url = (name: "instagram" | "facebook" | "linkedin" | "tiktok") => {
    const v = str(formData, name, 300);
    return /^https?:\/\//i.test(v) ? v : defaultContact[name];
  };
  const number = str(formData, "whatsappNumber", 40).replace(/[^\d+\s-]/g, "");
  const waDigits = number.replace(/\D/g, "");
  if (waDigits.length < 8) return { ok: false, message: "Nomor WhatsApp tidak valid." };
  return put("contact", {
    email,
    whatsappNumber: number,
    whatsappHref: `https://wa.me/${waDigits.startsWith("0") ? "62" + waDigits.slice(1) : waDigits}`,
    instagram: url("instagram"),
    facebook: url("facebook"),
    linkedin: url("linkedin"),
    tiktok: url("tiktok"),
  });
}

export async function saveTax(_: SaveResult, formData: FormData): Promise<SaveResult> {
  const rate = Number(String(formData.get("ppnRate") ?? "").replace(",", "."));
  const npwp = str(formData, "npwp", 30).replace(/[^\d.\-]/g, "");
  return put("tax", {
    pkp: formData.get("pkp") === "on",
    ppnRate: Number.isFinite(rate) && rate >= 0 && rate <= 25 ? rate : defaultTax.ppnRate,
    npwp,
    nib: str(formData, "nib", 20).replace(/\D/g, ""),
    bankInfo: str(formData, "bankInfo", 400),
    pph23Note: formData.get("pph23Note") === "on",
  });
}

export async function saveProposal(_: SaveResult, formData: FormData): Promise<SaveResult> {
  const lines = (name: string, max: number, count: number) =>
    str(formData, name, max * count)
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)
      .slice(0, count);
  /** One "Title | text" per line. */
  const pairs = (name: string, count: number, fallback: { title: string; text: string }[]) => {
    const out = lines(name, 400, count)
      .map((l) => {
        const [title, ...rest] = l.split("|");
        return { title: title.trim().slice(0, 80), text: rest.join("|").trim().slice(0, 400) };
      })
      .filter((p) => p.title);
    return out.length ? out : fallback;
  };
  const commitments = lines("commitments", 200, 8);
  return put("proposal", {
    tagline: str(formData, "tagline", 160) || defaultProposal.tagline,
    philosophyTitle: str(formData, "philosophyTitle", 80) || defaultProposal.philosophyTitle,
    philosophy: str(formData, "philosophy", 1500) || defaultProposal.philosophy,
    pillars: pairs("pillars", 4, defaultProposal.pillars),
    process: pairs("process", 8, defaultProposal.process),
    commitments: commitments.length ? commitments : defaultProposal.commitments,
    closing: str(formData, "closing", 600) || defaultProposal.closing,
  });
}

export async function savePromo(_: SaveResult, formData: FormData): Promise<SaveResult> {
  const pct = Number(String(formData.get("discountPct") ?? "").replace(",", "."));
  const until = String(formData.get("validUntil") ?? "");
  return put("promo", {
    enabled: formData.get("enabled") === "on",
    code: str(formData, "code", 24).toUpperCase().replace(/[^A-Z0-9_-]/g, ""),
    title: str(formData, "title", 80),
    text: str(formData, "text", 200),
    discountPct: Number.isFinite(pct) && pct >= 0 && pct <= 50 ? pct : 0,
    validUntil: /^\d{4}-\d{2}-\d{2}$/.test(until) ? until : "",
    ctaLabel: str(formData, "ctaLabel", 30) || "Konsultasi gratis",
  });
}

/** One case study per line: Klien | Industri | Ringkasan | Hasil | Testimoni | Nama, jabatan. */
export async function savePortfolio(_: SaveResult, formData: FormData): Promise<SaveResult> {
  const items = str(formData, "items", 12000)
    .split("\n")
    .map((line) => line.split("|").map((x) => x.trim()))
    .filter((p) => p[0])
    .slice(0, 12)
    .map(([client, industry = "", summary = "", result = "", testimonial = "", person = ""]) => ({
      client: client.slice(0, 80),
      industry: industry.slice(0, 60),
      summary: summary.slice(0, 300),
      result: result.slice(0, 160),
      testimonial: testimonial.slice(0, 400),
      person: person.slice(0, 80),
    }));
  return put("portfolio", items);
}
