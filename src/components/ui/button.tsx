import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "md" | "lg" | "sm";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-blue to-cyan text-white shadow-[0_8px_20px_-6px_rgba(43,98,246,0.5)] hover:shadow-[0_12px_28px_-6px_rgba(43,98,246,0.6)] hover:-translate-y-0.5",
  secondary:
    "bg-navy text-white hover:bg-navy-2 hover:-translate-y-0.5",
  outline:
    "border border-surface-border bg-white text-navy hover:border-blue/40 hover:-translate-y-0.5",
  ghost: "text-navy hover:bg-bg-soft",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-3",
  lg: "text-base px-7 py-3.5",
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
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out",
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
