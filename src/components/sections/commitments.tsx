"use client";

import { commitments } from "@/config/company";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ShieldCheck } from "lucide-react";
import { useLocale } from "@/i18n/locale-context";

export function Commitments() {
  const { t, locale } = useLocale();
  return (
    <Container className="max-w-6xl">
      <SectionHeading
        eyebrow={t.commitmentsSection.eyebrow}
        title={t.commitmentsSection.title}
        description={t.commitmentsSection.description}
      />

      <RevealGroup className="mt-10 grid grid-cols-1 gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {commitments.map((commitment) => (
          <RevealItem key={commitment.title.id}>
            <div className="h-full rounded-3xl border border-line bg-surface-0 shadow-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-accent">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-[17px] font-bold text-ink">
                {commitment.title[locale]}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">
                {commitment.description[locale]}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  );
}
