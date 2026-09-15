"use client";

import { valueProps } from "@/config/process";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { useLocale } from "@/i18n/locale-context";

export function WhyAgsora() {
  const { t, locale } = useLocale();
  return (
    <Container className="max-w-6xl">
        <SectionHeading
          eyebrow={t.whyAgsora.eyebrow}
          title={t.whyAgsora.title}
          description={t.whyAgsora.description}
        />

        <RevealGroup className="mt-8 grid grid-cols-1 gap-x-10 gap-y-7 sm:mt-10 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
          {valueProps.map((prop, i) => (
            <RevealItem key={prop.title}>
              <div className="border-t border-line pt-5">
                <span className="text-[11px] tabular-nums text-ink-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[14px] font-medium text-ink">
                  {prop.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                  {prop.description[locale]}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
    </Container>
  );
}
