"use client";

import { ArrowRight, Bell } from "lucide-react";
import { LogoMark } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, breadcrumbSchema } from "@/components/ui/breadcrumbs";
import { productsStrings } from "@/config/portfolio";
import { useLocale } from "@/i18n/locale-context";
import { jsonLd } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export function ProductsBody() {
  const { locale, t } = useLocale();
  const s = productsStrings[locale];
  const crumbs = [
    { name: t.breadcrumbHome, href: "/" },
    { name: t.nav.products, href: "/products" },
  ];

  return (
    <div className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({ "@context": "https://schema.org", ...breadcrumbSchema(crumbs, locale) }),
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-[85%] -translate-y-1/2 rounded-full bg-gold/25 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-[15%] -translate-y-1/2 rounded-full bg-[#3a5fb4]/20 blur-[120px]" />
        <LogoMark className="absolute left-1/2 top-1/2 h-[420px] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.04] md:h-[560px]" />
      </div>

      <Container className="relative flex min-h-[calc(100svh-72px)] max-w-4xl flex-col py-10 md:py-14">
        <Breadcrumbs items={crumbs} label={t.breadcrumbLabel} />

        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <h1 className="headline mt-8 text-[56px] font-extrabold leading-none sm:text-[88px] md:text-[112px]">
            <span className="text-gradient">{s.title}</span>
          </h1>
          <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface-0/80 px-4 py-1.5 text-[13px] font-medium text-ink-muted backdrop-blur">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            {s.badge}
          </p>
          <p className="mt-8 max-w-xl text-pretty text-[16px] leading-relaxed text-ink-muted md:text-[18px]">
            {s.description}
          </p>
          <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Button
              href={whatsappLink(s.notifyMessage)}
              external
              size="lg"
              icon={<Bell className="h-4 w-4" />}
            >
              {s.notify}
            </Button>
            <Button href="/services" size="lg" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
              {s.services}
            </Button>
          </div>
          <Button href="/portofolio" variant="ghost" className="mt-4">
            {s.portfolio}
          </Button>
        </div>
      </Container>
    </div>
  );
}
