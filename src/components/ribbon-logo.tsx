import Image from "next/image";
import { cn } from "@/lib/utils";

export function RibbonLogo({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Image
      src="/brand/icon-header.png"
      alt=""
      width={320}
      height={271}
      priority
      className={cn("h-8 w-auto", className)}
      style={style}
    />
  );
}
