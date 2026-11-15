"use client";

import Image from "next/image";
import Link from "@/i18n/link";
import { ArrowRight, ArrowUpRight, MonitorPlay } from "lucide-react";
import { DarkHero, HeroStats } from "@/components/sections/dark-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ContactCta } from "@/components/sections/contact-cta";
import { useProofCounts } from "@/components/site-data";
import { industries } from "@/config/industries";
import { industryDetails } from "@/config/industry-details";
import { industryUi, industryVisuals } from "@/config/industry-visuals";
import { TEMPLATES } from "@/config/templates";
import { useLocale } from "@/i18n/locale-context";

/** Bento rhythm on a 3-column grid: these cards span two columns, so every row stays full (2+1, 1+1+1, …). */
const WIDE = new Set([0, 5, 11]);

export function IndustriesBody() {
  const { t, locale } = useLocale();
  const ui = industryUi[locale];
  const proof = useProofCounts();
  const moduleCount = Object.values(industryDetails).reduce((n, d) => n + d.solutions.length, 0);

  return (
    <>
      <DarkHero trail={[{ name: t.nav.industries, href: "/industries" }]} eyebrow={t.pageEyebrows.industries} title={t.industriesPage.heroTitle} description={t.industriesPage.heroDescription}>
        <HeroStats
          items={[
            [String(industries.length), ui.statIndustries],
            [proof.clients, ui.statClients],
            [`${moduleCount}+`, ui.statModules],
          ]}
        />
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">{ui.jump}</span>
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <a
                  key={ind.slug}
                  href={`#${ind.slug}`}
                  className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[13px] font-medium text-white/80 transition-colors hover:border-gold/60 hover:bg-gold/10 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5 text-gold" />
                  {ind.name[locale]}
                </a>
              );
            })}
          </div>
      </DarkHero>

      <Section>
        <Container className="max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              const visual = industryVisuals[ind.slug];
              const detail = industryDetails[ind.slug];
              const wide = WIDE.has(i);
              const demo = TEMPLATES.find((x) => x.slug === visual?.demo);
              return (
                <article
                  key={ind.slug}
                  id={ind.slug}
                  className={`group relative isolate flex min-h-[380px] scroll-mt-28 flex-col justify-end overflow-hidden rounded-[28px] bg-navy text-white shadow-elev ${wide ? "lg:col-span-2" : ""}`}
                >
                  {visual ? (
                    <Image
                      src={visual.photo}
                      alt=""
                      fill
                      unoptimized
                      sizes={wide ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 1024px) 380px, 100vw"}
                      className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}
                  <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070b14] via-[#070b14]/75 to-[#070b14]/10" />
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                    <Icon className="h-5 w-5 text-gold" />
                  </span>
                  <span className="absolute right-5 top-6 text-[13px] font-semibold tabular-nums text-white/50">{String(i + 1).padStart(2, "0")}</span>

                  <div className="p-6 md:p-7">
                    <h2 className="text-[24px] font-extrabold tracking-tight md:text-[28px]">
                      <Link href={`/industries/${ind.slug}`} className="focus-ring after:absolute after:inset-0 after:content-['']">
                        {ind.name[locale]}
                      </Link>
                    </h2>
                    <p className={`mt-2 text-[14px] leading-relaxed text-white/75 md:text-[15px] ${wide ? "max-w-xl" : ""}`}>{ind.description[locale]}</p>
                    {detail ? (
                      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={ui.modules}>
                        {detail.solutions.slice(0, wide ? 4 : 3).map((s) => (
                          <li key={s.title.id} className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[12px] text-white/85 backdrop-blur">
                            {s.title[locale]}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-gold">
                        {ui.solutions} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

          <div className="mt-16 grid items-center gap-8 overflow-hidden rounded-[28px] border border-line bg-surface-1 p-8 md:grid-cols-[1fr_auto] md:p-10">
            <div>
              <h2 className="text-[26px] font-extrabold tracking-tight text-ink md:text-[30px]">{ui.demosTitle}</h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-muted md:text-[16px]">{ui.demosLead}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {TEMPLATES.slice(0, 6).map((tpl) => (
                  <li key={tpl.slug}>
                    <Link href={`/contoh/${tpl.slug}`} className="focus-ring inline-flex items-center gap-1 rounded-full border border-line bg-surface-0 px-3 py-1.5 text-[13px] font-medium text-ink-muted transition-colors hover:border-ink hover:text-ink">
                      {tpl.name[locale]} <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Button href="/contoh" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              {ui.demosCta}
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
