import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {children}
    </section>
  );
}

/** Small pill above a section title: a gold dot and an uppercase label. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface-1 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="headline zh-phrases mt-5 text-balance text-[30px] font-bold text-ink sm:text-[38px] md:text-[44px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-[16px] leading-relaxed text-ink-muted md:text-[17px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
