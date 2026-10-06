import { jsonLd } from "@/lib/seo";
import { faqsTranslated } from "@/config/company";
import type { Locale } from "@/i18n/routing";

/**
 * FAQPage structured data, in the page's language. Render this on exactly
 * one page — Google's guidance is to mark up a repeated FAQ only once, so the
 * homepage shows the featured questions without emitting it again.
 *
 * Kept as a plain server component (not "use client") so the JSON-LD
 * <script> tag only ever renders during SSR — React warns about <script>
 * tags rendered client-side, since they're inert after client renders.
 */
export function FaqSchema({ locale }: { locale: Locale }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsTranslated.map((faq) => ({
      "@type": "Question",
      name: faq[locale].question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq[locale].answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
    />
  );
}
