import Image from "next/image";
import type { PortfolioImage } from "@/config/portfolio";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

/** A screenshot inside a minimal browser window, with the site's address in the bar. */
export function BrowserFrame({
  image,
  locale,
  url,
  sizes,
  priority,
  className,
}: {
  image: PortfolioImage;
  locale: Locale;
  url?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const host = url ? new URL(url).host : null;
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-surface-0 shadow-elev ring-1 ring-black/[0.03]",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface-1 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        {host ? (
          <div className="mx-auto flex max-w-[60%] flex-1 items-center justify-center truncate rounded-md bg-surface-0 px-3 py-1 text-[11px] text-ink-subtle ring-1 ring-line">
            {host}
          </div>
        ) : null}
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      <Image
        src={image.src}
        alt={image.alt[locale]}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}

/** A mobile screenshot inside a phone outline. */
export function PhoneFrame({
  image,
  locale,
  className,
}: {
  image: PortfolioImage;
  locale: Locale;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[1.4rem] bg-navy p-[4%] shadow-elev ring-1 ring-white/10 sm:rounded-[2.2rem]",
        className
      )}
    >
      {/* Sized in percent so the notch stays in proportion on small frames. */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-[3.5%] z-10 h-[2.2%] w-[34%] -translate-x-1/2 rounded-full bg-navy"
      />
      <Image
        src={image.src}
        alt={image.alt[locale]}
        width={image.width}
        height={image.height}
        sizes="240px"
        className="block h-auto w-full rounded-[1rem] sm:rounded-[1.75rem]"
      />
    </div>
  );
}
