"use client";

import Image from "next/image";
import { BadgeCheck, FileSignature, MapPin, ShieldCheck } from "lucide-react";
import { DarkHero, HeroStats } from "@/components/sections/dark-hero";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactCta } from "@/components/sections/contact-cta";
import { Principles } from "@/components/sections/principles";
import { Commitments } from "@/components/sections/commitments";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { useProofCounts } from "@/components/site-data";
import { WARRANTY_DAYS } from "@/config/guarantees";
import { valueProps } from "@/config/process";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/i18n/locale-context";

const aboutIntro: Record<string, string> = {
  id: `${siteConfig.legalName} adalah perusahaan teknologi yang membantu bisnis membangun, mengintegrasikan, dan mengembangkan sistem digital, melalui pengembangan software custom yang mengikuti proses kerja masing-masing bisnis.`,
  en: `${siteConfig.legalName} is a technology company that helps businesses build, integrate, and develop digital systems, through custom development built around how each business works.`,
  zh: `${siteConfig.legalName} 是一家科技公司，通过贴合各企业业务流程的定制开发服务，帮助企业构建、集成并发展其数字系统。`,
};

const UI = {
  id: {
    clients: "klien",
    services: "layanan",
    warranty: "hari garansi",
    legalEyebrow: "Legalitas",
    legalTitle: "Badan usaha resmi, bukan freelancer",
    legal: [
      { k: "Badan hukum", v: siteConfig.legalName },
      { k: "NIB (OSS)", v: siteConfig.company.nib },
      { k: "Domisili", v: `${siteConfig.company.locality}, ${siteConfig.company.region}` },
      { k: "Kontrak", v: `Perjanjian dwibahasa, garansi ${WARRANTY_DAYS} hari, source code milik klien` },
    ],
  },
  en: {
    clients: "clients",
    services: "services",
    warranty: "day warranty",
    legalEyebrow: "Legal",
    legalTitle: "A registered company, not a freelancer",
    legal: [
      { k: "Legal entity", v: siteConfig.legalName },
      { k: "Business ID (NIB)", v: siteConfig.company.nib },
      { k: "Registered in", v: `${siteConfig.company.locality}, ${siteConfig.company.region}, Indonesia` },
      { k: "Contract", v: `Bilingual agreement, ${WARRANTY_DAYS}-day warranty, client owns the source code` },
    ],
  },
  zh: {
    clients: "客户",
    services: "项服务",
    warranty: "天保修",
    legalEyebrow: "合规",
    legalTitle: "正规注册公司，而非个人接单",
    legal: [
      { k: "公司名称", v: siteConfig.legalName },
      { k: "营业编号 (NIB)", v: siteConfig.company.nib },
      { k: "注册地", v: `${siteConfig.company.locality}，${siteConfig.company.region}，印度尼西亚` },
      { k: "合同", v: `双语合同，${WARRANTY_DAYS} 天保修，源代码归客户所有` },
    ],
  },
} as const;

const LEGAL_ICONS = [BadgeCheck, ShieldCheck, MapPin, FileSignature];

export function AboutBody() {
  const { t, locale } = useLocale();
  const ui = UI[locale];
  const proof = useProofCounts();

  return (
    <>
      <DarkHero trail={[{ name: t.nav.about, href: "/about" }]} eyebrow={t.pageEyebrows.about} title={t.aboutPage.heroTitle} description={aboutIntro[locale]}>
        <HeroStats
          items={[
            [proof.clients, ui.clients],
            [proof.services, ui.services],
            [String(WARRANTY_DAYS), ui.warranty],
          ]}
        />
      </DarkHero>

      <Section>
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading eyebrow={t.aboutPage.positioningEyebrow} title={t.aboutPage.positioningTitle} description={t.aboutPage.positioningDescription} />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative isolate aspect-[4/3] overflow-hidden rounded-[2rem] bg-navy text-white shadow-elev">
                <Image src="/services/about.webp" alt="" fill unoptimized sizes="(min-width: 1024px) 540px, 100vw" className="-z-10 object-cover" />
                <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070b14] via-[#070b14]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-gold">{t.aboutPage.brandPersonality}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.aboutPage.brandTraits.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[14px] font-medium text-white backdrop-blur">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-line bg-surface-1">
        <Container className="max-w-6xl">
          <SectionHeading eyebrow={t.aboutPage.whatWeBelieveEyebrow} title={t.aboutPage.whatWeBelieveTitle} />
          <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <RevealItem key={v.title.en} className={i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}>
                {i === 0 ? (
                  <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-elev">
                    <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/30 blur-[80px]" />
                    <span className="relative text-[64px] font-extrabold leading-none tracking-tight text-gold">01</span>
                    <h3 className="relative mt-6 text-[24px] font-extrabold">{v.title[locale]}</h3>
                    <p className="relative mt-3 max-w-md text-[15px] leading-relaxed text-white/75">{v.description[locale]}</p>
                  </div>
                ) : (
                  <div className="h-full rounded-3xl border border-line bg-surface-0 p-6 shadow-card">
                    <span className="text-[32px] font-extrabold leading-none tracking-tight text-gradient">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-4 text-[16px] font-bold text-ink">{v.title[locale]}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{v.description[locale]}</p>
                  </div>
                )}
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section>
        <Principles />
      </Section>

      <Section className="bg-navy text-white">
        <Container className="max-w-6xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-gold">{ui.legalEyebrow}</p>
          <h2 className="mt-4 text-[28px] font-extrabold tracking-tight md:text-[36px]">{ui.legalTitle}</h2>
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ui.legal.map((row, i) => {
              const Icon = LEGAL_ICONS[i];
              return (
                <div key={row.k} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <Icon className="h-6 w-6 text-gold" />
                  <dt className="mt-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/50">{row.k}</dt>
                  <dd className="mt-1.5 text-[15px] font-semibold leading-snug text-white">{row.v}</dd>
                </div>
              );
            })}
          </dl>
        </Container>
      </Section>

      <Section className="border-b border-line bg-surface-1">
        <Commitments />
      </Section>

      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
