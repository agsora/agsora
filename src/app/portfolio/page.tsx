import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { ClientLogos } from "@/components/sections/client-logos";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactCta } from "@/components/sections/contact-cta";
import { Reveal } from "@/components/motion/reveal";
import { portfolioProjects } from "@/config/portfolio";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio & Capability Showcase",
  description:
    "Contoh implementasi ERP, landing page, dan e-commerce yang dikerjakan tim AG·SORA, plus daftar klien yang pernah kami bantu.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        breadcrumb={{ name: "Portfolio", href: "/portfolio" }}
        eyebrow="Portfolio"
        title="Contoh kerja dan kapasitas tim kami"
        description="Bagian ini menampilkan capability showcase — implementasi yang dikerjakan tim internal untuk mendemonstrasikan pendekatan dan kualitas build, bukan case study klien dengan metrik bisnis terverifikasi. Case study klien dengan hasil terukur akan tayang setelah data dan persetujuan tersedia."
      />

      <Section className="pt-0">
        <ClientLogos />
      </Section>

      <Section className="border-t border-line pt-16">
        <Container className="max-w-6xl">
          <SectionHeading
            eyebrow="Capability Showcase"
            title="Implementasi yang pernah kami bangun"
          />

          <div className="mt-14 space-y-20">
            {portfolioProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <article className="border-t border-line pt-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-accent">
                      {project.category}
                    </span>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-line bg-surface-1 px-2 py-1 text-[11px] text-ink-subtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="headline mt-4 text-[22px] font-semibold text-ink sm:text-[26px]">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-muted">
                    {project.tagline}
                  </p>

                  <div className="mt-8 grid gap-8 lg:grid-cols-2">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-ink-subtle">
                        Problem
                      </p>
                      <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-ink-subtle">
                        Solution
                      </p>
                      <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-ink-subtle">
                      Fitur utama
                    </p>
                    <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-muted"
                        >
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-6 text-[12px] text-ink-subtle">
                    Tech stack: {project.tech}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.images.map((img) => (
                      <figure
                        key={img.src}
                        className="overflow-hidden rounded-lg border border-line bg-surface-1"
                      >
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={img.src}
                            alt={img.caption}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover object-top"
                          />
                        </div>
                        <figcaption className="border-t border-line px-3 py-2 text-[11px] leading-relaxed text-ink-subtle">
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <ContactCta />
      </Section>
    </>
  );
}
