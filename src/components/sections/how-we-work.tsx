"use client";

import { processSteps } from "@/config/process";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { useLocale } from "@/i18n/locale-context";

export function HowWeWork({ align = "left" }: { align?: "left" | "center" }) {
  const { t, locale } = useLocale();
  return (
    <Container className="max-w-6xl">
      <SectionHeading eyebrow={t.howWeWork.eyebrow} title={t.howWeWork.title} align={align} />

      <div className="relative mt-12 md:mt-16">
        {/* Dashed rail linking the steps on wide screens */}
        <div
          aria-hidden="true"
          className="absolute left-[10%] right-[10%] top-[38px] hidden border-t-2 border-dashed border-line-strong md:block"
        />

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
          {processSteps.map((step, i) => (
            <li
              key={step.step}
              className="reveal relative flex flex-col rounded-3xl border border-line bg-surface-0 p-6 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-[44px] font-extrabold leading-none tracking-tight text-gradient">
                  {step.step}
                </span>
                <span
                  aria-hidden="true"
                  className={
                    i === processSteps.length - 1
                      ? "h-3 w-3 rounded-full bg-[image:var(--gradient-text)] ring-4 ring-gold/20"
                      : "h-3 w-3 rounded-full border-2 border-line-strong bg-surface-0"
                  }
                />
              </div>
              <h3 className="mt-6 text-[17px] font-bold text-ink">{step.title[locale]}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                {step.description[locale]}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
