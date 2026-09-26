"use client";

import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/home/hero-visual";
import { useLocale } from "@/i18n/locale-context";

export function Hero() {
  const { t } = useLocale();
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="aurora-top pointer-events-none absolute inset-x-0 top-0 h-[760px]" />
      {/* Grain fades out before the section ends so there's no visible seam. */}
      <div aria-hidden className="grain pointer-events-none absolute inset-x-0 top-0 h-[900px] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />

      <Container className="relative max-w-6xl pt-16 md:pt-28">
        {/* LCP element — deliberately not animated. */}
        <h1 className="zh-phrases max-w-5xl text-balance text-[40px] font-medium leading-[1.03] tracking-[-0.04em] text-ink sm:text-[56px] lg:text-[76px]">
          {t.hero.titleLead}{" "}
          <span className="accent-serif">{t.hero.titleHighlight}</span>
        </h1>

        <div className="rise mt-10 grid gap-8 border-t border-line pt-8 [animation-delay:80ms] md:mt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <p className="max-w-xl text-pretty text-[16px] leading-relaxed text-ink-muted md:text-[17px]">
              {t.hero.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
              {t.home.assurances.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[13px] text-ink-subtle"
                >
                  <Check className="h-3.5 w-3.5 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
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

      <Container className="rise relative mt-14 max-w-6xl [animation-delay:200ms] md:mt-20">
        <HeroVisual />
      </Container>
    </section>
  );
}
