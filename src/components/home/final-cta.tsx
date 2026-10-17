"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LogoMark } from "@/components/brand-logo";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/locale-context";

export function FinalCta() {
  const { t } = useLocale();
  return (
    <Container className="max-w-6xl">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center text-white md:px-16 md:py-20 ring-1 ring-white/10">
        {/* Glows and a ghosted mark behind the copy */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gold/30 blur-[100px]" />
          <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-[#3a5fb4]/40 blur-[110px]" />
          <LogoMark
            className="absolute -right-10 top-1/2 h-72 w-auto -translate-y-1/2 opacity-[0.06] md:h-96"
            style={{ ["--logo-frame" as string]: "#eef0f4", ["--logo-gold" as string]: "#d4b06a" }}
          />
        </div>

        <div className="relative">
          <h2 className="headline zh-phrases mx-auto max-w-3xl text-balance text-[32px] font-extrabold sm:text-[40px] md:text-[48px]">
            {t.home.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[16px] leading-relaxed text-white/70 md:text-[17px]">
            {t.contactCta.description}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="/contact"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
              className="bg-white text-navy shadow-none hover:bg-white/90"
            >
              {t.contactCta.ctaPrimary}
            </Button>
            <Button
              href={siteConfig.whatsapp.href}
              external
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/5 text-white hover:border-white hover:bg-white/10"
            >
              {t.home.ctaWhatsapp}
            </Button>
          </div>

          <p className="mt-7 inline-flex flex-wrap items-center justify-center gap-x-2 text-[13px] text-white/60">
            <CheckCircle2 className="h-4 w-4 text-gold" />
            {t.home.ctaEmail}{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="focus-ring font-medium text-white underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}
