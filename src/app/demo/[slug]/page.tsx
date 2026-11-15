import { notFound } from "next/navigation";
import { DEMOS } from "@/components/demos";
import { TEMPLATES } from "@/config/templates";

export const dynamicParams = false;
export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }));
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const Demo = DEMOS[(await params).slug];
  if (!Demo) notFound();
  return <Demo />;
}
