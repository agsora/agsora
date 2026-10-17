import { Eyebrow, SectionHeading } from "@/components/ui/section";

/** Pill label above a section title; same as the site-wide Eyebrow. */
export const HomeEyebrow = Eyebrow;

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
    <SectionHeading
      eyebrow={eyebrow}
      title={title}
      description={description}
      align={align}
      className={className}
    />
  );
}
