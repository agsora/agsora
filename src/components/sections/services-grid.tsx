"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/services";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const items = compact ? services.slice(0, 6) : services;

  return (
    <Container className="max-w-6xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Custom Development"
          title="Layanan yang membangun fondasi digital bisnis Anda"
          description="Dari website sederhana hingga sistem enterprise — tim AG·SORA merancang solusi yang sesuai dengan proses kerja Anda."
        />
        {compact ? (
          <Button href="/services" variant="outline" size="sm" className="shrink-0">
            Lihat Semua Layanan
          </Button>
        ) : null}
      </div>

      <RevealGroup className="mt-14 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service) => {
          const Icon = service.icon;
          return (
            <RevealItem key={service.id}>
              <Link
                href={service.href}
                className="focus-ring group flex h-full flex-col border-b border-r border-line p-7 transition-colors hover:bg-surface-1"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-5 w-5 text-ink-subtle transition-colors group-hover:text-accent" />
                  <ArrowUpRight className="h-4 w-4 text-ink-subtle opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 text-[15px] font-medium text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <p className="mt-6 text-[12px] text-ink-subtle">
                  Mulai dari{" "}
                  <span className="tabular-nums text-ink-muted">
                    {service.startingFrom}
                  </span>
                </p>
              </Link>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Container>
  );
}
