import Link from "@/i18n/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  // hover:bg-ink/85 used to turn the light-theme button white-on-white.
  primary: "bg-ink text-surface-0 shadow-[0_8px_20px_-10px_rgba(11,18,32,0.6)] hover:-translate-y-px hover:bg-ink/90",
  secondary: "bg-surface-2 text-ink hover:bg-surface-3",
  outline: "border border-line-strong bg-surface-0 text-ink hover:-translate-y-px hover:border-ink",
  ghost: "text-ink-muted hover:text-ink hover:bg-surface-1",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-[13px] px-4 py-2 rounded-lg",
  md: "text-sm px-5 py-2.5 rounded-xl",
  lg: "text-[15px] px-6 py-3.5 rounded-xl",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "children">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  icon,
  ...props
}: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    const Comp: ElementType = external ? "a" : Link;
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Comp href={href} className={classes} {...externalProps}>
        {children}
        {icon}
      </Comp>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon}
    </button>
  );
}
