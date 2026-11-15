"use client";

import { Quote as QuoteIcon, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useSiteData } from "@/components/site-data";
import { useLocale } from "@/i18n/locale-context";

const COPY = {
  id: { eyebrow: "Bukti nyata", title: "Studi kasus & testimoni", result: "Hasil" },
  en: { eyebrow: "Real results", title: "Case studies & testimonials", result: "Result" },
  zh: { eyebrow: "真实成果", title: "案例与客户评价", result: "成果" },
} as const;

/** Case studies and client quotes managed from the dashboard (Atur Website → Portofolio). Hidden while empty. */
export function CaseStudies() {
  const { portfolio } = useSiteData();
  const { locale } = useLocale();
  const t = COPY[locale];
  if (!portfolio.length) return null;

  return (
    <Section className="border-t border-line py-20 md:py-28">
      <Container className="max-w-6xl">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">{t.eyebrow}</p>
        <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight text-ink md:text-[44px]">{t.title}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.slice(0, 6).map((p, i) => (
            <article key={i} className="flex flex-col rounded-3xl border border-line bg-surface-0 p-7 shadow-card">
              <p className="text-[13px] font-semibold text-ink-muted">{p.industry}</p>
              <h3 className="mt-1 text-[20px] font-bold text-ink">{p.client}</h3>
              {p.summary ? <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{p.summary}</p> : null}
              {p.result ? (
                <p className="mt-4 flex items-start gap-2 text-[15px] font-semibold text-ink">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>
                    <span className="sr-only">{t.result}: </span>
                    {p.result}
                  </span>
                </p>
              ) : null}
              {p.testimonial ? (
                <blockquote className="mt-auto border-t border-line pt-5 text-[15px] italic leading-relaxed text-ink">
                  <QuoteIcon className="mb-2 h-4 w-4 text-accent" aria-hidden />
                  {p.testimonial}
                  {p.person ? <footer className="mt-2 text-[13px] not-italic text-ink-muted">{p.person}</footer> : null}
                </blockquote>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
