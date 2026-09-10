import { industries } from "@/config/industries";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function IndustriesGrid() {
  return (
    <Container className="max-w-6xl">
      <SectionHeading
        eyebrow="Industries"
        title="Dipercaya untuk berbagai jenis bisnis"
        description="Sistem AG·SORA dirancang fleksibel untuk kebutuhan operasional yang berbeda di setiap industri."
      />

      <RevealGroup className="mt-14 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <RevealItem key={industry.name}>
              <div className="group h-full border-b border-r border-line p-6 transition-colors hover:bg-surface-1">
                <Icon className="h-[18px] w-[18px] text-ink-subtle transition-colors group-hover:text-accent" />
                <h3 className="mt-5 text-[14px] font-medium text-ink">
                  {industry.name}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
                  {industry.description}
                </p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Container>
  );
}
