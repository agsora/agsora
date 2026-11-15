"use client";

import Link from "@/i18n/link";
import { ArrowRight, BadgeCheck, Calculator, Code2, ReceiptText, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { breadcrumbSchema } from "@/components/ui/breadcrumbs";
import { WARRANTY_DAYS } from "@/config/guarantees";
import { useLocale } from "@/i18n/locale-context";
import { jsonLd } from "@/lib/seo";

const COPY = {
  id: {
    eyebrow: "Harga transparan",
    chips: ["PT resmi & kontrak tertulis", `Garansi bug ${WARRANTY_DAYS} hari`, "Source code milik Anda", "DP mulai 30%"],
    primary: "Konsultasi gratis",
    secondary: "Hitung estimasi",
  },
  en: {
    eyebrow: "Transparent pricing",
    chips: ["Registered company & contract", `${WARRANTY_DAYS}-day bug warranty`, "You own the source code", "From 30% down payment"],
    primary: "Free consultation",
    secondary: "Estimate your cost",
  },
  zh: {
    eyebrow: "价格透明",
    chips: ["正规公司与书面合同", `${WARRANTY_DAYS} 天缺陷保修`, "源代码归您所有", "首付 30% 起"],
    primary: "免费咨询",
    secondary: "估算费用",
  },
} as const;

const CHIP_ICONS = [BadgeCheck, ShieldCheck, Code2, ReceiptText];

/** Dark, premium hero for the pricing page, with the guarantees that make the prices worth trusting. */
export function PricingHero() {
  const { t, locale } = useLocale();
  const c = COPY[locale as keyof typeof COPY] ?? COPY.id;
  const crumbs = [
    { name: t.breadcrumbHome, href: "/" },
    { name: t.nav.pricing, href: "/pricing" },
  ];

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", ...breadcrumbSchema(crumbs, locale) }) }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/25 blur-[140px]" />
        <div className="absolute -left-40 bottom-[-12rem] h-[460px] w-[460px] rounded-full bg-[#3a5fb4]/30 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,black,transparent)]" />
      </div>

      <Container className="relative max-w-6xl pb-20 pt-10 md:pb-28 md:pt-14">
        <nav aria-label={t.breadcrumbLabel} className="text-[12px] text-white/60">
          <Link href="/" className="focus-ring hover:text-white">
            {t.breadcrumbHome}
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <span aria-current="page" className="text-white/85">
            {t.nav.pricing}
          </span>
        </nav>

        <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {c.eyebrow}
        </p>
        <h1 className="headline zh-phrases mt-6 max-w-3xl text-balance text-[38px] font-extrabold leading-[1.05] sm:text-[52px] md:text-[64px]">{t.pricingPage.heroTitle}</h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/75 md:text-[19px]">{t.pricingPage.heroDescription}</p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/contact?from=/pricing"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[15px] font-bold text-navy shadow-[0_10px_30px_-10px_rgba(212,176,106,.8)] transition-transform hover:-translate-y-0.5"
          >
            {c.primary}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#estimasi" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10">
            <Calculator className="h-4 w-4" />
            {c.secondary}
          </a>
        </div>

        <ul className="mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {c.chips.map((chip, i) => {
            const Icon = CHIP_ICONS[i];
            return (
              <li key={chip} className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[13px] font-medium text-white/85 backdrop-blur">
                <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                {chip}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
