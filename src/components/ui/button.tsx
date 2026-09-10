import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-ink text-surface-0 hover:bg-white",
  secondary: "bg-surface-2 text-ink border border-line-strong hover:bg-surface-3",
  outline: "border border-line-strong text-ink hover:border-ink-subtle hover:bg-surface-1",
  ghost: "text-ink-muted hover:text-ink hover:bg-surface-1",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-[13px] px-3.5 py-2",
  md: "text-sm px-4 py-2.5",
  lg: "text-[15px] px-5 py-3",
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
    "focus-ring inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150",
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
