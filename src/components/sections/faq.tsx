"use client";

import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { faqsTranslated } from "@/config/company";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { useLocale } from "@/i18n/locale-context";

export function Faq({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const { t, locale } = useLocale();
  const source = featuredOnly
    ? faqsTranslated.filter((faq) => faq.featured)
    : faqsTranslated;
  const items = source.map((faq) => ({ ...faq[locale], key: faq.id.question }));

  return (
    <Container className="max-w-6xl">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={t.faqSection.eyebrow}
            title={t.faqSection.title}
            description={t.faqSection.description}
          />
          {featuredOnly ? (
            <Link
              href="/pricing#faq"
              className="focus-ring mt-6 inline-flex items-center gap-2 text-[13px] text-ink-muted transition-colors hover:text-ink"
            >
              {t.faqSection.seeAll}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>

        <div className="divide-y divide-line border-y border-line">
          {items.map((faq, i) => (
            <details
              key={faq.key}
              name="agsora-faq"
              // Collapsed on the homepage: a scannable list of questions is
              // shorter on a phone, and the reader opens the one they care about.
              open={!featuredOnly && i === 0}
              className="group"
            >
              <summary className="focus-ring flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <span className="text-[14px] text-ink-muted transition-colors group-open:text-ink">
                  {faq.question}
                </span>
                <Plus className="mt-0.5 h-4 w-4 shrink-0 text-ink-subtle transition-transform duration-200 group-open:rotate-45 group-open:text-accent" />
              </summary>
              <p className="animate-fade-in pb-6 pr-10 text-[13px] leading-relaxed text-ink-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Container>
  );
}
