import { capabilities } from "@/config/company";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function Capabilities() {
  return (
    <Container className="max-w-6xl">
      <SectionHeading
        eyebrow="Capabilities"
        title="Apa yang bisa kami bangun dan hubungkan"
        description="Ruang lingkup teknis yang kami tangani — dari bentuk aplikasinya, sistem yang perlu disambungkan, sampai cara sistem itu dijalankan."
      />

      <RevealGroup className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((group) => (
          <RevealItem key={group.title}>
            <div className="border-t border-line pt-5">
              <h3 className="text-[14px] font-medium text-ink">
                {group.title}
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-ink-subtle">
                {group.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] text-ink-muted"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  );
}
