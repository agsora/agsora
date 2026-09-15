import type { Metadata } from "next";
import { AboutBody } from "@/components/sections/about-body";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tentang Kami",
  description:
    "PT Agsora Teknologi Indonesia adalah software house yang membantu bisnis membangun, mengintegrasikan, dan mengembangkan sistem digital.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutBody />;
}
