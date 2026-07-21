import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/data/company";
import { createPageMetadata } from "@/lib/metadata";
import { professionalServiceJsonLd, websiteJsonLd } from "@/lib/structured-data";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-sans"
});

export const metadata: Metadata = createPageMetadata({
  title: "SEED｜税理士専門の集客パートナー",
  description: siteConfig.description,
  path: "/"
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={notoSansJp.variable}>
      <body className="font-sans antialiased">
        <a
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-brand focus:shadow-soft"
          href="#main"
        >
          本文へ移動
        </a>
        <JsonLd data={[websiteJsonLd(), professionalServiceJsonLd()]} />
        <LenisProvider>
          <Header />
          <main id="main" className="pb-20 lg:pb-0">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
