"use client";

import Link from "@/i18n/link";
import { ArrowRight } from "lucide-react";
import { faqsTranslated } from "@/config/company";
import { Container } from "@/components/ui/container";
import { FaqList } from "@/components/sections/faq";
import { HomeHeading } from "@/components/home/heading";
import { useLocale } from "@/i18n/locale-context";

const featured = faqsTranslated.filter((faq) => faq.featured);

/** Visual only — FAQPage schema is emitted once, on /pricing. */
export function HomeFaq() {
  const { t, locale } = useLocale();
  const items = featured.map((faq) => ({ ...faq[locale], key: faq.id.question }));

  return (
    <Container className="grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div>
        <HomeHeading
          eyebrow={t.faqSection.eyebrow}
          title={t.home.faqTitle}
          description={t.faqSection.description}
        />
        <Link
          href="/pricing#faq"
          className="focus-ring group mt-7 inline-flex items-center gap-2 text-[14px] text-ink-muted transition-colors hover:text-ink"
        >
          {t.faqSection.seeAll}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      <FaqList items={items} />
    </Container>
  );
}
