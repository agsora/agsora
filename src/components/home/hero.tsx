"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/home/hero-visual";
import { useLocale } from "@/i18n/locale-context";

export function Hero() {
  const { t } = useLocale();
  return (
    <section className="border-b border-line">
      <Container className="max-w-6xl pt-16 md:pt-24">
        {/* LCP element — deliberately not animated. */}
        <h1 className="zh-phrases max-w-4xl text-balance text-[38px] font-semibold leading-[1.06] tracking-[-0.025em] text-ink sm:text-[52px] lg:text-[64px]">
          {t.hero.titleLead} {t.hero.titleHighlight}
        </h1>

        <div className="rise mt-8 grid gap-8 [animation-delay:80ms] md:mt-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <p className="max-w-xl text-pretty text-[16px] leading-relaxed text-ink-muted md:text-[17px]">
              {t.hero.description}
            </p>
            <p className="mt-5 font-mono text-[12px] text-ink-subtle">
              {t.home.assurances.join("  /  ")}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              {t.hero.ctaPrimary}
            </Button>
            <Button href="/services" size="lg" variant="outline">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </Container>

      <Container className="rise mt-12 max-w-6xl pb-16 [animation-delay:200ms] md:mt-16 md:pb-24">
        <HeroVisual />
      </Container>
    </section>
  );
}
