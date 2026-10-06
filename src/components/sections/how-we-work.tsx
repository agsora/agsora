"use client";

import { processSteps } from "@/config/process";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { useLocale } from "@/i18n/locale-context";

export function HowWeWork() {
  const { t, locale } = useLocale();
  return (
    <Container className="max-w-6xl">
      <SectionHeading eyebrow={t.howWeWork.eyebrow} title={t.howWeWork.title} />

      <div className="relative mt-8 sm:mt-10">
        <div className="absolute left-0 right-0 top-[5px] hidden h-px bg-line md:block" />

        <div className="grid grid-cols-1 gap-7 md:grid-cols-5 md:gap-6">
          {processSteps.map((step) => (
            <div key={step.step} className="reveal relative">
              <div className="relative z-10 h-[11px] w-[11px] rounded-full border-2 border-surface-0 bg-accent" />
              <p className="mt-5 text-[12px] tabular-nums text-ink-subtle">
                {step.step}
              </p>
              <h3 className="mt-2 text-[15px] font-medium text-ink">
                {step.title[locale]}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                {step.description[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
