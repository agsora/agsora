"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/locale-context";

// Shown for notFound() and for any unmatched path (via [...rest]), inside
// the localized layout — the visitor gets their own language.
export default function NotFound() {
  const { t } = useLocale();
  return (
    <div className="glow-top relative flex min-h-[70vh] items-center overflow-hidden">
      <Container className="max-w-6xl">
        <div className="max-w-lg">
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
            {t.notFound.eyebrow}
          </p>
          <h1 className="headline mt-5 text-[34px] font-semibold text-ink sm:text-[42px]">
            {t.notFound.title}
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
            {t.notFound.description}
          </p>
          <div className="mt-9 flex flex-col gap-2.5 sm:flex-row">
            <Button href="/" icon={<ArrowRight className="h-4 w-4" />}>
              {t.notFound.home}
            </Button>
            <Button href="/contact" variant="outline">
              {t.notFound.contact}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
