"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/locale-context";

export function LegalCta() {
  const { locale } = useLocale();
  const text =
    locale === "id"
      ? "Ada pertanyaan lebih lanjut mengenai ketentuan ini?"
      : locale === "en"
        ? "Have further questions about these terms?"
        : "对这些条款还有其他疑问吗？";
  const cta = locale === "id" ? "Hubungi Kami" : locale === "en" ? "Contact Us" : "联系我们";

  return (
    <Container className="max-w-6xl">
      <div className="flex max-w-3xl flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
        <p className="text-[13px] text-ink-muted">{text}</p>
        <Button href="/contact" size="sm" variant="outline" className="shrink-0">
          {cta}
        </Button>
      </div>
    </Container>
  );
}
