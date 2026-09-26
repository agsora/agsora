"use client";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { RibbonLogo } from "@/components/ribbon-logo";
import { Accent } from "@/components/home/heading";
import { useLocale } from "@/i18n/locale-context";

export function FinalCta() {
  const { t } = useLocale();
  return (
    <Container className="max-w-6xl">
      <div className="relative overflow-hidden rounded-[32px] border border-line bg-surface-1 px-6 py-20 text-center md:px-16 md:py-28">
        <div aria-hidden className="aurora-bottom pointer-events-none absolute inset-0" />
        <div aria-hidden className="grain pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent"
        />

        <div className="relative">
          <RibbonLogo className="mx-auto h-9 w-auto" />
          <h2 className="zh-phrases mx-auto mt-8 max-w-3xl text-balance text-[34px] font-medium leading-[1.05] tracking-[-0.04em] text-ink sm:text-[46px] md:text-[58px]">
            <Accent text={t.home.ctaTitle} />
          </h2>
          <p className="mx-auto mt-6 max-w-md text-pretty text-[15px] leading-relaxed text-ink-muted md:text-[16px]">
            {t.contactCta.description}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              {t.contactCta.ctaPrimary}
            </Button>
            <Button href={siteConfig.whatsapp.href} external size="lg" variant="outline">
              {t.home.ctaWhatsapp}
            </Button>
          </div>
          <p className="mt-8 text-[13px] text-ink-subtle">
            {t.home.ctaEmail}{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="focus-ring text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}
