import type { ReactNode } from "react";

/**
 * Scroll-in animation done in CSS (see .reveal in globals.css) instead of
 * JavaScript. Content is fully visible by default: before hydration, with
 * JavaScript off, in browsers without scroll-driven animations, and for
 * visitors who prefer reduced motion. Where supported, elements fade up as
 * they enter the viewport.
 */
export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className ?? ""}`}>{children}</div>;
}

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  /** Kept for existing callers; the scroll timeline sets the pace now. */
  delay?: number;
}) {
  return <div className={`reveal ${className ?? ""}`}>{children}</div>;
}
