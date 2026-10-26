"use client";

import { PageHero } from "@/components/sections/page-hero";
import { ContactCta } from "@/components/sections/contact-cta";
import { LogoStrip } from "@/components/home/logo-strip";
import { FeaturedProject, NextProjectCard, ProjectCard } from "@/components/portfolio/project-card";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { Pagination } from "@/components/ui/pagination";
import {
  getProjectsForPage,
  getTotalProjectPages,
  portfolioPageHref,
  portfolioStrings,
  projects,
} from "@/config/portfolio";
import { clients } from "@/config/clients";
import { industries } from "@/config/industries";
import { useLocale } from "@/i18n/locale-context";

export function PortfolioIndex({ page = 1 }: { page?: number }) {
  const { locale, t } = useLocale();
  const s = portfolioStrings[locale];
  const total = getTotalProjectPages();
  const pageProjects = getProjectsForPage(page);
  // Page 1 opens with its newest project as a large card; later pages are all grid.
  const [featured, ...rest] = page === 1 ? pageProjects : [null, ...pageProjects];
  const isLastPage = page === total;
  const gridProjects = rest.filter((p) => p !== null);

  const stats = [
    { value: `${clients.length}+`, label: s.statClients },
    { value: String(projects.length), label: s.statProjects },
    { value: String(industries.length), label: s.statIndustries },
  ];

  return (
    <>
      <PageHero
        breadcrumb={{ name: t.nav.portfolio, href: "/portofolio" }}
        eyebrow={s.eyebrow}
        title={
          <>
            {s.title} <span className="text-gradient">{s.titleHighlight}</span>
          </>
        }
        description={s.description}
      >
        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <dt className="order-2 text-[13px] font-medium uppercase tracking-[0.12em] text-ink-subtle">
                {stat.label}
              </dt>
              <dd className="text-[34px] font-extrabold leading-none tracking-tight text-ink">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {featured ? (
        <Section className="pb-0 md:pb-0">
          <Container className="max-w-6xl">
            <FeaturedProject project={featured} />
          </Container>
        </Section>
      ) : null}

      {gridProjects.length || total > 1 ? (
        <Section>
          <Container className="max-w-6xl">
            <SectionHeading eyebrow={s.allProjects} title={s.eyebrow} />
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gridProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
              {isLastPage ? <NextProjectCard /> : null}
            </div>
            <div className="mt-14">
              <Pagination current={page} total={total} href={portfolioPageHref} />
            </div>
          </Container>
        </Section>
      ) : (
        // Only the featured project so far: no grid, just room before the logos.
        <div className="h-16 md:h-24" />
      )}

      <LogoStrip />

      <Section>
        <ContactCta />
      </Section>
    </>
  );
}
