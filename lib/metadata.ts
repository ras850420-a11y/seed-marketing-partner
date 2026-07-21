import type { Metadata } from "next";

import { siteConfig } from "@/data/company";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
  noIndex = false
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url
    },
    robots: {
      index: !noIndex,
      follow: !noIndex
    },
    openGraph: {
      title,
      description,
      url,
      siteName: `${siteConfig.name}｜${siteConfig.subtitle}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} OGP`
        }
      ],
      locale: "ja_JP",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}
