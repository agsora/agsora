import type { Block } from "@/config/blog";
import { RelatedServices } from "@/components/sections/related-services";

export function PostBody({
  blocks,
  postSlug,
}: {
  blocks: Block[];
  postSlug?: string;
}) {
  return (
    <div className="max-w-2xl">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-12 text-[20px] font-semibold tracking-tight text-ink first:mt-0"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 text-[16px] font-medium text-ink">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="mt-4 text-[15px] leading-[1.75] text-ink-muted"
              >
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="mt-5 space-y-2.5">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-[1.7] text-ink-muted"
                  >
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mt-5 space-y-2.5">
                {block.items.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-[1.7] text-ink-muted"
                  >
                    <span className="mt-[3px] text-[12px] tabular-nums text-ink-subtle">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <div
                key={i}
                className="mt-8 rounded-lg border border-line bg-surface-1 p-5"
              >
                <p className="text-[13px] font-medium text-ink">
                  {block.title}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                  {block.text}
                </p>
              </div>
            );
        }
      })}
      {postSlug ? <RelatedServices postSlug={postSlug} /> : null}
    </div>
  );
}
