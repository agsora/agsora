import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function LegalCta() {
  return (
    <Container>
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-surface-border bg-bg-alt p-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted">
          Ada pertanyaan lebih lanjut mengenai ketentuan ini?
        </p>
        <Button href="/contact" size="sm" variant="outline" className="shrink-0">
          Hubungi Kami
        </Button>
      </div>
    </Container>
  );
}
