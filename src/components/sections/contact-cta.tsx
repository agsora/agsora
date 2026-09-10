import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function ContactCta() {
  return (
    <Container>
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-16 text-center text-white sm:px-12 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 0%, rgba(43,98,246,0.35) 0%, rgba(43,98,246,0) 70%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Siap membangun sistem yang tumbuh
              <br className="hidden sm:block" /> bersama bisnis Anda?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Diskusikan kebutuhan Anda dengan tim AG·SORA — tanpa biaya, tanpa
              komitmen.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href="/contact"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Konsultasi Gratis
              </Button>
              <Button href="/pricing" size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:border-white/40">
                Request Proposal
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
