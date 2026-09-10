import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function ContactCta() {
  return (
    <Container className="max-w-6xl">
      <Reveal>
        <div className="glow-top relative overflow-hidden rounded-lg border border-line bg-surface-1 px-6 py-16 text-center md:py-20">
          <div className="relative">
            <h2 className="headline mx-auto max-w-2xl text-[30px] font-semibold text-ink sm:text-[38px]">
              Siap membangun sistem yang tumbuh bersama bisnis Anda?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-ink-muted">
              Diskusikan kebutuhan Anda dengan tim AG·SORA — tanpa biaya,
              tanpa komitmen.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-2.5 sm:flex-row">
              <Button
                href="/contact"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Konsultasi Gratis
              </Button>
              <Button href="/pricing" size="lg" variant="outline">
                Request Proposal
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
