import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { faqs } from "@/config/company";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";

export function Faq({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const items = featuredOnly ? faqs.filter((faq) => faq.featured) : faqs;

  return (
    <Container className="max-w-6xl">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang sering diajukan"
            description="Hal-hal yang biasanya ditanyakan sebelum memulai project. Kalau pertanyaan Anda belum terjawab di sini, silakan hubungi kami langsung."
          />
          {featuredOnly ? (
            <Link
              href="/pricing#faq"
              className="focus-ring mt-6 inline-flex items-center gap-2 text-[13px] text-ink-muted transition-colors hover:text-ink"
            >
              Lihat semua pertanyaan
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>

        <div className="divide-y divide-line border-y border-line">
          {items.map((faq, i) => (
            <details
              key={faq.question}
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

/**
 * FAQPage structured data. Render this on exactly one page — Google's
 * guidance is to mark up a repeated FAQ only once, so the homepage shows
 * the featured questions without emitting it again.
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
