import { cn } from "@/lib/utils";

/** Small technical label above a section title, set in Plex Mono. */
export function HomeEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("font-mono text-[12px] uppercase tracking-[0.08em] text-ink-subtle", className)}>
      {children}
    </p>
  );
}

export function HomeHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
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
      <HomeEyebrow>{eyebrow}</HomeEyebrow>
      <h2 className="zh-phrases mt-4 text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[36px] md:text-[42px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-[15px] leading-relaxed text-ink-muted md:text-[16px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
