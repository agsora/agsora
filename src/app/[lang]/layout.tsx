import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { LanguageSuggestion } from "@/components/layout/language-suggestion";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";
import { translatedPostSlugs } from "@/config/blog";
import { dictionaries } from "@/i18n/dictionaries";
import { LocaleProvider } from "@/i18n/locale-context";
import { pageMeta } from "@/i18n/page-meta";
import {
  absoluteUrl,
  hreflangs,
  isLocale,
  locales,
  ogLocales,
} from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import "../globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Display accent only — italic phrases in headlines and step numerals.
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-display",
  display: "swap",
});

type Props = { children: React.ReactNode; params: Promise<{ lang: string }> };

// Every page is prerendered once per language. src/proxy.ts guarantees the
// first segment is always id/en/zh.
//
// dynamicParams stays on (the default) here and in every [slug]/[page]
// route: with it off, Next answers unknown params with its built-in
// /_not-found page, outside this layout. Letting pages call notFound() shows
// app/[lang]/not-found.tsx instead — localized, with header and footer.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const home = pageMeta.home[lang];

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: home.title,
      template: `%s | ${siteConfig.brandMark}`,
    },
    description: home.description,
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.legalName,
    openGraph: {
      type: "website",
      locale: ogLocales[lang],
      url: absoluteUrl("/", lang),
      siteName: siteConfig.brandMark,
      title: home.title,
      description: home.description,
    },
    twitter: {
      card: "summary_large_image",
      title: home.title,
      description: home.description,
    },
    // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel env vars once the
    // property is added in Google Search Console — avoids hardcoding a token.
    verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : undefined,
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f15" },
  ],
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = dictionaries[lang];

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
        url: absoluteUrl("/", lang),
        logo: `${siteConfig.url}/apple-icon`,
        description: pageMeta.about[lang].description,
        email: siteConfig.email,
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.facebook,
          siteConfig.social.tiktok,
        ],
        // Based in Indonesia, serving clients anywhere.
        address: { "@type": "PostalAddress", addressCountry: "ID" },
        knowsLanguage: locales.map((l) => hreflangs[l]),
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
        inLanguage: locales.map((l) => hreflangs[l]),
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    // suppressHydrationWarning: themeInitScript sets data-theme on <html>
    // before hydration, which React would otherwise report as a mismatch.
    <html
      lang={hreflangs[lang]}
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ThemeProvider>
          <LocaleProvider locale={lang} translatedPosts={translatedPostSlugs}>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-surface-0"
            >
              {t.skipLink}
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <LanguageSuggestion />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
