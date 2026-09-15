"use client";

import { commitments } from "@/config/company";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
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

      <RevealGroup className="mt-10 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {commitments.map((commitment) => (
          <RevealItem key={commitment.title.id}>
            <div className="h-full border-b border-r border-line p-6">
              <h3 className="text-[14px] font-medium text-ink">
                {commitment.title[locale]}
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-ink-muted">
                {commitment.description[locale]}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  );
}
