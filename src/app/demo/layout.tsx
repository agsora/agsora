import type { Metadata } from "next";
import "../globals.css";

// Template demos open inside the gallery viewer (an iframe), so they carry no site header or footer.
// The gallery page is the one that ranks; the demos themselves stay out of search results.
export const metadata: Metadata = {
  title: "Demo Template | AG·SORA",
  robots: { index: false, follow: true },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
