"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimatedMesh } from "@/components/sections/animated-mesh";
import { DashboardMockup } from "@/components/sections/dashboard-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh bg-grid pt-16 pb-20 md:pt-24 md:pb-28">
      <AnimatedMesh className="pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/40 to-white" />

      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-blue backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            PT Agsora Teknologi Indonesia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl"
          >
            Build Smarter Systems.
            <br />
            <span className="text-gradient">Grow Without Limits.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            AG·SORA membangun software, sistem bisnis, dan produk digital yang
            membantu perusahaan bekerja lebih efisien, terintegrasi, dan
            scalable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              href="/contact"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Konsultasi Gratis
            </Button>
            <Button href="/services" size="lg" variant="outline">
              Lihat Solusi
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-2"
          >
            <span>Custom Development</span>
            <span className="h-1 w-1 rounded-full bg-muted-2/50" />
            <span>Proprietary SaaS Products</span>
            <span className="h-1 w-1 rounded-full bg-muted-2/50" />
            <span>Enterprise-Ready</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DashboardMockup />
        </motion.div>
      </Container>
    </section>
  );
}
