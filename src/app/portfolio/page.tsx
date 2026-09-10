import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { FolderKanban, Cog, Layers, Rocket, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio / Case Studies",
  description:
    "Case study AG·SORA akan segera hadir — dokumentasi project, teknologi, dan hasil implementasi nyata.",
  alternates: { canonical: "/portfolio" },
};

const frameworkSteps = [
  { icon: FolderKanban, title: "Problem", description: "Tantangan bisnis yang dihadapi klien." },
  { icon: Cog, title: "Solution", description: "Pendekatan dan arsitektur sistem yang dirancang." },
  { icon: Layers, title: "Technology", description: "Stack teknologi yang digunakan dalam implementasi." },
  { icon: Rocket, title: "Implementation", description: "Proses build, deploy, dan adopsi oleh tim klien." },
  { icon: TrendingUp, title: "Outcome", description: "Dampak dan efisiensi yang dihasilkan." },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Case Study Coming Soon"
        description="Kami sedang menyiapkan dokumentasi project AG·SORA secara transparan — lengkap dengan konteks masalah, pendekatan solusi, dan hasil nyata. Setiap case study akan mengikuti kerangka berikut."
      />

      <Section>
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {frameworkSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full border-b border-r border-line p-6">
                  <s.icon className="h-[18px] w-[18px] text-ink-subtle" />
                  <h3 className="mt-5 text-[14px] font-medium text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-lg border border-dashed border-line bg-surface-1 p-10 text-center">
              <p className="mx-auto max-w-xl text-[13px] leading-relaxed text-ink-muted">
                Belum ada case study yang dapat dipublikasikan saat ini. Kami
                tidak menampilkan klien, testimoni, atau hasil fiktif — setiap
                case study akan tayang setelah data dan persetujuan klien
                tersedia.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
