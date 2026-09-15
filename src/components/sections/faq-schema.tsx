import { faqs } from "@/config/company";

/**
 * FAQPage structured data. Render this on exactly one page — Google's
 * guidance is to mark up a repeated FAQ only once, so the homepage shows
 * the featured questions without emitting it again.
 *
 * Kept as a plain server component (not "use client") so the JSON-LD
 * <script> tag only ever renders during SSR — React warns about <script>
 * tags rendered client-side, since they're inert after client renders.
 */
export function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
