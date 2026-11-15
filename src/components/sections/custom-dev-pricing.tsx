"use client";

import Link from "@/i18n/link";
import { ArrowRight, Globe, Layers, Zap, ShieldCheck, Palette, Server, GraduationCap, type LucideIcon } from "lucide-react";
import { PRICING_CATEGORIES, type PricingCategory } from "@/config/pricing";
import { usePricing } from "@/components/site-data";
import { useLocale } from "@/i18n/locale-context";
import { track } from "@/lib/track";
import { formatRupiah } from "@/lib/utils";

const categoryIcons: Record<PricingCategory, LucideIcon> = {
  "Website & Digital": Globe,
  "Sistem Bisnis": Layers,
  "Automation & Integrasi": Zap,
  "Support & Enterprise": ShieldCheck,
  "Desain & Konten": Palette,
  "Infrastruktur & Keamanan": Server,
  "Konsultasi & Pelatihan": GraduationCap,
};

export function CustomDevPricing() {
  const { t, locale } = useLocale();
  const customDevPricing = usePricing();
  // Fixed display order; categories with no items are hidden.
  const categories = PRICING_CATEGORIES.filter((c) => customDevPricing.some((item) => item.category === c));
  const categoryLabels: Record<PricingCategory, string> = {
    "Website & Digital": t.pricingCategories.websiteDigital,
    "Sistem Bisnis": t.pricingCategories.businessSystems,
    "Automation & Integrasi": t.pricingCategories.automationIntegration,
    "Support & Enterprise": t.pricingCategories.supportEnterprise,
    "Desain & Konten": t.pricingCategories.designContent,
    "Infrastruktur & Keamanan": t.pricingCategories.infrastructureSecurity,
    "Konsultasi & Pelatihan": t.pricingCategories.consultingTraining,
  };

  const slug = (c: string) => `kategori-${c.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div>
      {/* Jump to a category; the full list stays in the page for search engines and Ctrl+F. */}
      <nav aria-label={t.pricingPage.customDevTitle} className="sticky top-16 z-20 -mx-4 mb-10 overflow-x-auto bg-surface-0/90 px-4 py-3 backdrop-blur [scrollbar-width:none] md:mx-0 md:overflow-visible md:rounded-2xl md:border md:border-line md:px-3 md:shadow-card [&::-webkit-scrollbar]:hidden">
        <ul className="flex min-w-max gap-1.5 md:min-w-0 md:flex-wrap md:justify-center">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return (
              <li key={category}>
                <a href={`#${slug(category)}`} className="focus-ring inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink">
                  <Icon className="h-3.5 w-3.5 text-accent" aria-hidden />
                  {categoryLabels[category]}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="space-y-12">
        {categories.map((category) => {
          const Icon = categoryIcons[category];
          const items = customDevPricing.filter((i) => i.category === category);
          return (
            <section key={category} id={slug(category)} className="scroll-mt-32">
              <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 to-gold/5 text-accent ring-1 ring-gold/30">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[20px] font-bold tracking-tight text-ink md:text-[22px]">{categoryLabels[category]}</h3>
                </div>
              </div>

              <ul className="grid gap-x-10 md:grid-cols-2">
                {items.map((item) => (
                  <li key={item.id} id={item.id} className="scroll-mt-32 border-b border-line/70">
                    <Link
                      href={`/contact?plan=${item.id}&from=/pricing`}
                      onClick={() => track("quote_click", { plan: item.id })}
                      className="focus-ring group flex items-baseline gap-3 py-4"
                    >
                      <span className="text-[15px] font-medium text-ink transition-colors group-hover:text-accent">{item.name[locale]}</span>
                      <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-line-strong/70" />
                      <span className="whitespace-nowrap text-right">
                        <span className="text-[16px] font-bold tabular-nums text-ink">
                          {item.price === null ? t.pricingPage.customQuote : formatRupiah(item.price, locale)}
                        </span>
                        {item.unit ? <span className="ml-1 text-[12px] text-ink-subtle">{item.unit[locale]}</span> : null}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 self-center text-ink-subtle opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
