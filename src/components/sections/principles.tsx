import { principles } from "@/config/company";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

export function Principles() {
  return (
    <Container className="max-w-6xl">
      <SectionHeading
        eyebrow="How We Think"
        title="Cara kami memutuskan saat membangun sistem"
        description="Setiap project punya banyak persimpangan teknis. Ini prinsip yang kami pakai untuk memilih arah ketika tidak ada jawaban yang jelas benar."
      />

      <div className="mt-10 divide-y divide-line border-y border-line">
        {principles.map((principle, i) => (
          <Reveal key={principle.title} delay={i * 0.05}>
            <div className="grid gap-3 py-7 md:grid-cols-[auto_1fr_1.4fr] md:items-start md:gap-10">
              <span className="text-[11px] tabular-nums text-ink-subtle md:pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[15px] font-medium text-ink">
                {principle.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-ink-muted">
                {principle.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
