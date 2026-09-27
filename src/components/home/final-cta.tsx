"use client";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/locale-context";

export function FinalCta() {
  const { t } = useLocale();
  return (
    <Container className="max-w-6xl">
      <div className="grid gap-10 rounded-lg border border-line bg-surface-1 p-8 md:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
        <div>
          <h2 className="zh-phrases text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[36px] md:text-[42px]">
            {t.home.ctaTitle}
          </h2>
          <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-ink-muted md:text-[16px]">
            {t.contactCta.description}
          </p>
        </div>

        <div className="lg:justify-self-end">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              {t.contactCta.ctaPrimary}
            </Button>
            <Button href={siteConfig.whatsapp.href} external size="lg" variant="outline">
              {t.home.ctaWhatsapp}
            </Button>
          </div>
          <p className="mt-5 font-mono text-[12px] text-ink-subtle">
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
