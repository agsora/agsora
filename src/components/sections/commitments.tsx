import { commitments } from "@/config/company";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function Commitments() {
  return (
    <Container className="max-w-6xl">
      <SectionHeading
        eyebrow="Our Commitments"
        title="Yang kami pastikan di setiap kerja sama"
        description="Kepercayaan dibangun dari hal-hal yang bisa dipegang, bukan dari klaim. Berikut yang berlaku pada setiap project AG·SORA."
      />

      <RevealGroup className="mt-10 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {commitments.map((commitment) => (
          <RevealItem key={commitment.title}>
            <div className="h-full border-b border-r border-line p-6">
              <h3 className="text-[14px] font-medium text-ink">
                {commitment.title}
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-ink-muted">
                {commitment.description}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  );
}
