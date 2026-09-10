"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/config/process";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section";

export function HowWeWork() {
  return (
    <Container>
      <SectionHeading
        eyebrow="How We Work"
        title="Proses kerja yang jelas, dari ide hingga sistem berjalan"
        align="center"
        className="mx-auto"
      />

      <div className="relative mt-14">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-surface-border to-transparent md:block" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue to-cyan text-sm font-bold text-white shadow-[0_10px_20px_-6px_rgba(43,98,246,0.5)]">
                {step.step}
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
