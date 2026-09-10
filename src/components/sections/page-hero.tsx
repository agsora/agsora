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
    <div className="glow-top relative overflow-hidden border-b border-line pb-16 pt-16 md:pb-20 md:pt-20">
      <Container className="max-w-6xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="headline mt-5 max-w-3xl text-[34px] font-semibold text-ink sm:text-[42px] md:text-[48px]">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-muted">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </div>
  );
}
