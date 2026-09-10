import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function LegalCta() {
  return (
    <Container className="max-w-6xl">
      <div className="flex max-w-3xl flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
        <p className="text-[13px] text-ink-muted">
          Ada pertanyaan lebih lanjut mengenai ketentuan ini?
        </p>
        <Button href="/contact" size="sm" variant="outline" className="shrink-0">
          Hubungi Kami
        </Button>
      </div>
    </Container>
  );
}
