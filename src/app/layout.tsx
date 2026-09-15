import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";
import { LocaleProvider } from "@/i18n/locale-context";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brandMark} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brandMark}`,
  },
  description: siteConfig.description,
  keywords: [
    "software house Indonesia",
    "custom software development",
    "ERP Indonesia",
    "POS Indonesia",
    "HRIS Indonesia",
    "custom application",
    "mobile app development",
    "business software Indonesia",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    siteName: siteConfig.brandMark,
    title: `${siteConfig.brandMark} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandMark} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel env vars once the
  // property is added in Google Search Console — avoids hardcoding a token.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f15" },
  ],
};

// LinkedIn is excluded: unlike Instagram/Facebook/TikTok it hasn't been
// confirmed as a live, active profile for this business.
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      alternateName: siteConfig.brandMark,
      url: siteConfig.url,
      logo: `${siteConfig.url}/apple-icon`,
      description: siteConfig.description,
      email: siteConfig.email,
      sameAs: [
        siteConfig.social.instagram,
        siteConfig.social.facebook,
        siteConfig.social.tiktok,
      ],
      areaServed: { "@type": "Country", name: "Indonesia" },
      knowsAbout: [
        "Custom Software Development",
        "Enterprise Resource Planning (ERP)",
        "Point of Sale (POS)",
        "Human Resource Information System (HRIS)",
        "Customer Relationship Management (CRM)",
        "Mobile Application Development",
        "API Integration",
        "AI Automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.brandMark,
      inLanguage: "id-ID",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ThemeProvider>
          <LocaleProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-surface-0"
            >
              Langsung ke konten utama
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
