import { valueProps } from "@/config/process";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { CheckCircle2 } from "lucide-react";

export function WhyAgsora() {
  return (
    <div className="bg-navy py-20 text-white md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why AG·SORA"
          title={
            <span className="text-white">
              Teknologi yang tumbuh bersama bisnis Anda
            </span>
          }
          description={
            <span className="text-white/70">
              Kami tidak menjual template — kami membangun sistem yang
              dirancang untuk kebutuhan spesifik dan arah pertumbuhan
              perusahaan Anda.
            </span>
          }
          className="[&_.text-blue]:text-cyan"
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {valueProps.map((prop) => (
            <RevealItem key={prop.title}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <CheckCircle2 className="h-5 w-5 text-cyan" />
                <h3 className="mt-4 text-base font-semibold">{prop.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {prop.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </div>
  );
}
