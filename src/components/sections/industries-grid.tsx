import { industries } from "@/config/industries";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function IndustriesGrid() {
  return (
    <Container>
      <SectionHeading
        eyebrow="Industries"
        title="Dipercaya untuk berbagai jenis bisnis"
        description="Sistem AG·SORA dirancang fleksibel untuk kebutuhan operasional yang berbeda di setiap industri."
      />

      <RevealGroup className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <RevealItem key={industry.name}>
              <div className="group h-full rounded-2xl border border-surface-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-soft text-blue transition-colors group-hover:bg-gradient-to-br group-hover:from-blue group-hover:to-cyan group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 text-sm font-semibold text-navy">
                  {industry.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
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
