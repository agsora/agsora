"use client";

import { ArrowRight } from "lucide-react";
import { LogoMark } from "@/components/brand-logo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/i18n/locale-context";

export function ContactCta() {
  const { t } = useLocale();
  return (
    <Container className="max-w-6xl">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-center text-white md:py-20 ring-1 ring-white/10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gold/30 blur-[100px]" />
            <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-[#3a5fb4]/40 blur-[110px]" />
            <LogoMark
              className="absolute -right-10 top-1/2 h-72 w-auto -translate-y-1/2 opacity-[0.06] md:h-96"
              style={{ ["--logo-frame" as string]: "#eef0f4", ["--logo-gold" as string]: "#d4b06a" }}
            />
          </div>
          <div className="relative">
            <h2 className="headline zh-phrases mx-auto max-w-2xl text-balance text-[30px] font-extrabold sm:text-[40px]">
              {t.contactCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-white/70 md:text-[16px]">
              {t.contactCta.description}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href="/contact"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
                className="bg-white text-navy shadow-none hover:bg-white/90"
              >
                {t.contactCta.ctaPrimary}
              </Button>
              <Button
                href="/pricing"
                size="lg"
                variant="outline"
                className="border-white/25 bg-white/5 text-white hover:border-white hover:bg-white/10"
              >
                {t.contactCta.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
