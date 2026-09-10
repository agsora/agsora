import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-mesh bg-grid pb-16 pt-14 md:pb-20 md:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-white" />
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-navy sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </div>
  );
}
