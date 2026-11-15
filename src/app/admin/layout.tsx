import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "../globals.css";
import "./admin.css";

// Sneat's typeface; admin only.
const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

// Every admin page depends on the visitor's cookies and live data: never prerender or cache it.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin | AG·SORA",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={publicSans.variable}>
      <body className="sn">{children}</body>
    </html>
  );
}
