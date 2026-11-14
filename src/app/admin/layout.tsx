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
