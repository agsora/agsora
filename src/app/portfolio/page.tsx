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
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {frameworkSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-surface-border bg-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-soft text-blue">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-dashed border-surface-border bg-bg-alt p-10 text-center">
              <p className="text-sm text-muted">
                Belum ada case study yang dapat dipublikasikan saat ini. Kami
                tidak menampilkan klien, testimoni, atau hasil fiktif — setiap
                case study akan tayang setelah data dan persetujuan klien
                tersedia.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-bg-alt pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
