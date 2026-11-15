import type { Metadata } from "next";
import "../globals.css";

// Private client pages: unlisted, never cached.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Penawaran | AG·SORA",
  robots: { index: false, follow: false },
};

export default function ClientPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body style={{ background: "#f5f6fb", color: "#1e2536", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif", margin: 0 }}>{children}</body>
    </html>
  );
}
