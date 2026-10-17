"use client";

import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/home/hero-visual";
import { clients } from "@/config/clients";
import { services } from "@/config/services";
import { growth } from "@/i18n/growth";
import { useLocale } from "@/i18n/locale-context";

export function Hero() {
  const { t, locale } = useLocale();
  const proof = growth[locale].proof;

  return (
    <section className="relative overflow-hidden">
      {/* Backdrop: dotted field fading out, warm and cool glows behind the headline */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-gold/25 blur-[120px]" />
        <div className="absolute -right-32 top-0 h-[460px] w-[460px] rounded-full bg-[#3a5fb4]/20 blur-[120px]" />
      </div>

      <Container className="relative max-w-6xl pb-16 pt-14 text-center md:pb-24 md:pt-24">
        <div className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface-0/80 px-4 py-1.5 text-[13px] font-medium text-ink-muted shadow-card backdrop-blur">
          <BadgeCheck className="h-4 w-4 text-accent" />
          {clients.length} {proof.clients}
          <span className="text-line-strong">·</span>
          {services.length} {proof.services}
        </div>

        {/* LCP element, deliberately not animated. */}
        <h1 className="headline zh-phrases mx-auto mt-7 max-w-4xl text-balance text-[40px] font-extrabold text-ink sm:text-[56px] lg:text-[72px]">
          {t.hero.titleLead} <span className="text-gradient">{t.hero.titleHighlight}</span>
        </h1>

        <p className="rise mx-auto mt-7 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-muted [animation-delay:80ms] md:text-[19px]">
          {t.hero.description}
        </p>

        <div className="rise mt-9 flex flex-col items-center justify-center gap-3 [animation-delay:140ms] sm:flex-row">
          <Button href="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            {t.hero.ctaPrimary}
          </Button>
          <Button href="/services" size="lg" variant="outline">
            {t.hero.ctaSecondary}
          </Button>
        </div>

        <ul className="rise mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-[13px] text-ink-muted [animation-delay:200ms]">
          {t.home.assurances.map((item) => (
            <li key={item} className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-positive" />
              {item}
            </li>
          ))}
        </ul>

        <div className="rise mx-auto mt-14 max-w-5xl text-left [animation-delay:260ms] md:mt-20">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
