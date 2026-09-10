import { Container } from "@/components/ui/container";

export type LegalSection = {
  title: string;
  body: string[];
};

export function LegalContent({
  updatedAt,
  sections,
}: {
  updatedAt: string;
  sections: LegalSection[];
}) {
  return (
    <Container className="max-w-6xl">
      <div className="max-w-3xl">
        <p className="text-[12px] text-ink-subtle">
          Terakhir diperbarui: {updatedAt}
        </p>
        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-[15px] font-semibold text-ink">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((p, i) => (
                  <p key={i} className="text-[14px] leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
