"use client";

import Link from "@/i18n/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { usePricing } from "@/components/site-data";
import { WARRANTY_DAYS } from "@/config/guarantees";
import { useLocale } from "@/i18n/locale-context";
import { track } from "@/lib/track";
import { formatRupiah } from "@/lib/utils";

type Lang = "id" | "en" | "zh";
type Tier = { key: string; items: string[]; featured?: boolean; copy: Record<Lang, { name: string; for: string; features: string[] }> };

/** Three entry points; the price is the sum of the listed price-list items, so it follows the dashboard prices. */
const TIERS: Tier[] = [
  {
    key: "digital",
    items: ["starter-bundle"],
    copy: {
      id: { name: "Kehadiran Digital", for: "Untuk bisnis yang ingin tampil profesional dan mudah ditemukan.", features: ["Website company profile responsif", "Domain, hosting & SSL 1 tahun", "SEO dasar & formulir kontak", `Garansi bug ${WARRANTY_DAYS} hari`, "Source code milik Anda"] },
      en: { name: "Digital Presence", for: "For businesses that want to look professional and be found online.", features: ["Responsive company profile website", "Domain, hosting & SSL for 1 year", "Basic SEO & contact form", `${WARRANTY_DAYS}-day bug warranty`, "You own the source code"] },
      zh: { name: "数字形象", for: "适合希望专业展示并被客户找到的企业。", features: ["响应式企业官网", "域名、主机与 SSL 一年", "基础 SEO 与联系表单", `${WARRANTY_DAYS} 天缺陷保修`, "源代码归您所有"] },
    },
  },
  {
    key: "operations",
    items: ["pos", "dashboard", "training"],
    featured: true,
    copy: {
      id: { name: "Digitalisasi Operasional", for: "Untuk bisnis yang ingin meninggalkan pencatatan manual.", features: ["Sistem kasir, HR, atau CRM sesuai alur kerja", "Dashboard laporan real-time", "Pelatihan tim", "Tanpa biaya bulanan per outlet", `Garansi bug ${WARRANTY_DAYS} hari`] },
      en: { name: "Operations Digitisation", for: "For businesses ready to leave manual record-keeping behind.", features: ["POS, HR or CRM built around your workflow", "Real-time reporting dashboard", "Team training", "No monthly per-outlet fees", `${WARRANTY_DAYS}-day bug warranty`] },
      zh: { name: "运营数字化", for: "适合告别手工记录的企业。", features: ["按业务流程定制收银、人事或 CRM", "实时报表仪表盘", "团队培训", "无按门店月费", `${WARRANTY_DAYS} 天缺陷保修`] },
    },
  },
  {
    key: "enterprise",
    items: ["erp-basic", "data-migration", "training"],
    copy: {
      id: { name: "Sistem Enterprise", for: "Untuk perusahaan multi-divisi yang butuh satu sistem terintegrasi.", features: ["ERP: keuangan, stok, penjualan, pembelian", "Migrasi data dari Excel atau sistem lama", "Pelatihan & pendampingan go-live", "Integrasi API dengan sistem lain", "Termin 30% - 50% - 20%"] },
      en: { name: "Enterprise System", for: "For multi-division companies that need one integrated system.", features: ["ERP: finance, stock, sales, purchasing", "Data migration from Excel or legacy systems", "Training & go-live support", "API integration with other systems", "Pay 30% - 50% - 20%"] },
      zh: { name: "企业系统", for: "适合需要一体化系统的多部门企业。", features: ["ERP：财务、库存、销售、采购", "从 Excel 或旧系统迁移数据", "培训与上线陪伴", "与其他系统 API 对接", "按 30%-50%-20% 分期"] },
    },
  },
];

const COPY = {
  id: { eyebrow: "Paket unggulan", title: "Mulai dari yang paling Anda butuhkan", from: "mulai dari", popular: "Paling populer", cta: "Diskusikan paket ini", note: "Harga sebelum pajak. Lingkup final ditetapkan di proposal tertulis." },
  en: { eyebrow: "Featured packages", title: "Start with what you need most", from: "from", popular: "Most popular", cta: "Discuss this package", note: "Prices before tax. Final scope is set in the written proposal." },
  zh: { eyebrow: "精选方案", title: "从最需要的开始", from: "起价", popular: "最受欢迎", cta: "咨询此方案", note: "价格不含税，最终范围以书面方案为准。" },
} as const;

export function PricingTiers() {
  const { locale } = useLocale();
  const lang = (["id", "en", "zh"].includes(locale) ? locale : "id") as Lang;
  const c = COPY[lang];
  const pricing = usePricing();
  const priceOf = (ids: string[]) => ids.reduce((sum, id) => sum + (pricing.find((p) => p.id === id)?.price ?? 0), 0);

  return (
    <section className="relative -mt-12 md:-mt-16">
      <Container className="relative max-w-6xl">
        <div className="grid gap-5 lg:grid-cols-3">
          {TIERS.map((tier) => {
            const copy = tier.copy[lang];
            const price = priceOf(tier.items);
            return (
              <article
                key={tier.key}
                className={`relative flex flex-col rounded-[28px] p-7 md:p-8 ${
                  tier.featured
                    ? "bg-gradient-to-b from-[#1a2440] to-navy text-white shadow-[0_30px_80px_-30px_rgba(11,18,32,.65)] ring-1 ring-gold/40 lg:-translate-y-3"
                    : "border border-line bg-surface-0 text-ink shadow-elev"
                }`}
              >
                {tier.featured ? (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
                    <Sparkles className="h-3 w-3" />
                    {c.popular}
                  </span>
                ) : null}
                <h3 className="text-[20px] font-bold">{copy.name}</h3>
                <p className={`mt-2 min-h-[3rem] text-[14px] leading-relaxed ${tier.featured ? "text-white/70" : "text-ink-muted"}`}>{copy.for}</p>
                <p className={`mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] ${tier.featured ? "text-gold" : "text-accent"}`}>{c.from}</p>
                <p className="mt-1 text-[34px] font-extrabold tracking-tight tabular-nums md:text-[38px]">{formatRupiah(price, locale)}</p>
                <ul className={`mt-6 space-y-3 border-t pt-6 text-[14px] ${tier.featured ? "border-white/10" : "border-line"}`}>
                  {copy.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tier.featured ? "text-gold" : "text-accent"}`} aria-hidden />
                      <span className={tier.featured ? "text-white/85" : "text-ink-muted"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?plan=${tier.items.join(",")}&from=/pricing`}
                  onClick={() => track("quote_click", { plan: tier.key })}
                  className={`focus-ring mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-bold transition-transform hover:-translate-y-0.5 ${
                    tier.featured ? "bg-gold text-navy" : "bg-ink text-surface-0"
                  }`}
                >
                  {c.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-5 text-center text-[12px] text-ink-subtle">{c.note}</p>
      </Container>
    </section>
  );
}
