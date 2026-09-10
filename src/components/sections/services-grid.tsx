"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/config/services";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const items = compact ? services.slice(0, 6) : services;

  return (
    <Container>
      <SectionHeading
        eyebrow="Custom Development"
        title="Layanan yang membangun fondasi digital bisnis Anda"
        description="Dari website sederhana hingga sistem enterprise — tim AG·SORA merancang solusi yang sesuai dengan proses kerja Anda."
      />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service) => {
          const Icon = service.icon;
          return (
            <RevealItem key={service.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative h-full overflow-hidden rounded-2xl border border-surface-border bg-white p-6 shadow-soft"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-brand-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-soft text-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-xs text-muted-2">
                      Mulai dari{" "}
                      <span className="font-semibold text-navy">
                        {service.startingFrom}
                      </span>
                    </p>
                    <Link
                      href={service.href}
                      className="focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-surface-border text-navy transition-colors group-hover:border-blue/40 group-hover:text-blue"
                      aria-label={`Lihat harga ${service.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Container>
  );
}
