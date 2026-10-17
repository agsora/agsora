"use client";

import Link from "@/i18n/link";
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
              className="focus-ring mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-ink transition-colors hover:text-accent"
            >
              {t.faqSection.seeAll}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>

        {/* Collapsed on the homepage: a scannable list of questions is
            shorter on a phone, and the reader opens the one they care about. */}
        <FaqList items={items} openFirst={!featuredOnly} />
      </div>
    </Container>
  );
}

export function FaqList({
  items,
  openFirst = false,
}: {
  items: { key: string; question: string; answer: string }[];
  openFirst?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, i) => (
        <details
          key={faq.key}
          name="agsora-faq"
          open={openFirst && i === 0}
          className="group rounded-2xl border border-line bg-surface-0 transition-colors open:border-line-strong open:bg-surface-1 open:shadow-card"
        >
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
            <span className="text-[15px] font-semibold text-ink">
              {faq.question}
            </span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-2 transition-colors group-open:bg-ink group-open:text-surface-0">
              <Plus className="h-4 w-4 transition-transform duration-200 group-open:rotate-45" />
            </span>
          </summary>
          <p className="animate-fade-in px-5 pb-5 pr-14 text-[14px] leading-relaxed text-ink-muted md:px-6 md:pb-6">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
