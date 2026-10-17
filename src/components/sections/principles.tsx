"use client";

import { principles } from "@/config/company";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/i18n/locale-context";

export function Principles() {
  const { t, locale } = useLocale();
  return (
    <Container className="max-w-6xl">
      <SectionHeading
        eyebrow={t.principlesSection.eyebrow}
        title={t.principlesSection.title}
        description={t.principlesSection.description}
      />

      <div className="mt-12 flex flex-col gap-3">
        {principles.map((principle, i) => (
          <Reveal key={principle.title.id} delay={i * 0.05}>
            <div className="grid gap-3 rounded-3xl border border-line bg-surface-0 p-6 transition-colors hover:border-line-strong hover:shadow-card md:grid-cols-[4rem_1fr_1.4fr] md:items-center md:gap-10 md:px-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-[14px] font-bold tabular-nums text-surface-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[17px] font-bold text-ink">
                {principle.title[locale]}
              </h3>
              <p className="text-[14px] leading-relaxed text-ink-muted">
                {principle.description[locale]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
