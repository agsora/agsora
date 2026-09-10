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
    <Container>
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-muted-2">Terakhir diperbarui: {updatedAt}</p>
        <div className="mt-8 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-navy">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted">
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
