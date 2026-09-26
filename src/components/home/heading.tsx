import { cn } from "@/lib/utils";

/** Renders `*phrase*` segments of a dictionary string as the serif accent. */
export function Accent({ text }: { text: string }) {
  return text.split("*").map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="accent-serif">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function HomeEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.2em] text-ink-subtle",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
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
      <HomeEyebrow className={cn(align === "center" && "justify-center")}>
        {eyebrow}
      </HomeEyebrow>
      <h2 className="zh-phrases mt-5 text-balance text-[32px] font-medium leading-[1.06] tracking-[-0.035em] text-ink sm:text-[40px] md:text-[48px]">
        <Accent text={title} />
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-[15px] leading-relaxed text-ink-muted md:text-[16px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
