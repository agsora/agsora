"use client";

import { Container } from "@/components/ui/container";
import { useLocale } from "@/i18n/locale-context";

export type LegalSection = {
  id: { title: string; body: string[] };
  en: { title: string; body: string[] };
  zh: { title: string; body: string[] };
};

export function LegalContent({
  updatedAt,
  sections,
}: {
  updatedAt: string;
  sections: LegalSection[];
}) {
  const { locale } = useLocale();
  const label =
    locale === "id"
      ? "Terakhir diperbarui"
      : locale === "en"
        ? "Last updated"
        : "最后更新";

  return (
    <Container className="max-w-6xl">
      <div className="max-w-3xl">
        <p className="text-[12px] text-ink-subtle">
          {label}: {updatedAt}
        </p>
        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <div key={section.id.title}>
              <h2 className="text-[15px] font-semibold text-ink">
                {section[locale].title}
              </h2>
              <div className="mt-3 space-y-3">
                {section[locale].body.map((p, i) => (
                  <p key={i} className="text-[14px] leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
