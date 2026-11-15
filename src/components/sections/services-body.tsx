"use client";

import Image from "next/image";
import Link from "@/i18n/link";
import { ArrowRight, MonitorPlay, ShieldCheck } from "lucide-react";
import { DarkHero, HeroStats } from "@/components/sections/dark-hero";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Capabilities } from "@/components/sections/capabilities";
import { ContactCta } from "@/components/sections/contact-cta";
import { useProofCounts, useSiteData } from "@/components/site-data";
import { WARRANTY_DAYS } from "@/config/guarantees";
import { services } from "@/config/services";
import { TEMPLATES } from "@/config/templates";
import { useLocale } from "@/i18n/locale-context";
import { formatRupiah } from "@/lib/utils";

/** Closest live demo per service (none for services without a visual demo). */
const DEMO: Record<string, string> = { website: "korporat", pos: "kasir", erp: "dashboard", dashboard: "dashboard", crm: "dashboard", "custom-software": "dashboard" };
/** Bento rhythm on 3 columns for 10 cards: 2+1 / 1+1+1 / 1+1+1 / 1+2. */
const WIDE = new Set([0, 9]);

const UI = {
  id: {
    statCore: "layanan inti",
    statAll: "layanan di daftar harga",
    statWarranty: `hari garansi bug`,
    from: "Mulai",
    detail: "Lihat detail",
    demo: "Coba demo",
    pricing: "Lihat daftar harga",
    consult: "Konsultasi gratis",
    trust: ["Kontrak & invoice resmi PT", "Source code milik Anda", `Garansi ${WARRANTY_DAYS} hari`],
  },
  en: {
    statCore: "core services",
    statAll: "services on the price list",
    statWarranty: "day bug warranty",
    from: "From",
    detail: "See details",
    demo: "Try the demo",
    pricing: "See the price list",
    consult: "Free consultation",
    trust: ["Contracts & invoices from a registered company", "You own the source code", `${WARRANTY_DAYS}-day warranty`],
  },
  zh: {
    statCore: "项核心服务",
    statAll: "项价目表服务",
    statWarranty: "天缺陷保修",
    from: "起价",
    detail: "查看详情",
    demo: "体验演示",
    pricing: "查看价目表",
    consult: "免费咨询",
    trust: ["正规公司合同与发票", "源代码归您所有", `${WARRANTY_DAYS} 天保修`],
  },
} as const;

export function ServicesBody() {
  const { t, locale } = useLocale();
  const ui = UI[locale];
  const proof = useProofCounts();
  const prices = useSiteData().servicePrices;

  return (
    <>
      <DarkHero
        trail={[{ name: t.nav.services, href: "/services" }]}
        eyebrow={t.pageEyebrows.services}
        title={t.servicesPage.heroTitle}
        description={t.servicesPage.heroDescription}
      >
        <HeroStats
          items={[
            [String(services.length), ui.statCore],
            [proof.services, ui.statAll],
            [String(WARRANTY_DAYS), ui.statWarranty],
          ]}
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            {ui.consult}
          </Button>
          <Link href="/pricing" className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10">
            {ui.pricing}
          </Link>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/70">
          {ui.trust.map((x) => (
            <li key={x} className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" /> {x}
            </li>
          ))}
        </ul>
      </DarkHero>

      <Section>
        <Container className="max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const wide = WIDE.has(i);
              const demo = TEMPLATES.find((x) => x.slug === DEMO[svc.id]);
              const price = prices[svc.id] ?? svc.startingFrom;
              return (
                <article
                  key={svc.id}
                  className={`group relative isolate flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[28px] bg-navy text-white shadow-elev ${wide ? "lg:col-span-2" : ""}`}
                >
                  <Image
                    src={`/services/${svc.id}.webp`}
                    alt=""
                    fill
                    unoptimized
                    sizes={wide ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 1024px) 380px, 100vw"}
                    className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070b14] via-[#070b14]/80 to-[#070b14]/15" />
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <Icon className="h-5 w-5 text-gold" />
                  </span>
                  <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[12px] font-semibold backdrop-blur">
                    {ui.from} {formatRupiah(price, locale)}
                  </span>

                  <div className="p-6 md:p-7">
                    <h2 className="text-[23px] font-extrabold tracking-tight md:text-[26px]">
                      <Link href={svc.href} className="focus-ring after:absolute after:inset-0 after:content-['']">
                        {svc.title[locale]}
                      </Link>
                    </h2>
                    <p className={`mt-2 text-[14px] leading-relaxed text-white/75 md:text-[15px] ${wide ? "max-w-xl" : ""}`}>{svc.description[locale]}</p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-gold">
                        {ui.detail} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      {demo ? (
                        <Link
                          href={`/contoh/${demo.slug}`}
                          className="focus-ring relative z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-navy transition-transform hover:-translate-y-0.5"
                        >
                          <MonitorPlay className="h-4 w-4" /> {ui.demo}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-line bg-surface-1">
        <Capabilities />
      </Section>
      <Section>
        <HowWeWork />
      </Section>
      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
