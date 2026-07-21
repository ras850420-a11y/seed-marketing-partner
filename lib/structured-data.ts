import { siteConfig } from "@/data/company";
import type { FaqItem, LinkItem } from "@/types/content";
import type { JsonObject } from "@/types/json";

import { absoluteUrl } from "./metadata";

export function websiteJsonLd(): JsonObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.subtitle,
    url: siteConfig.url,
    inLanguage: "ja"
  };
}

export function professionalServiceJsonLd(): JsonObject {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    areaServed: "JP",
    serviceType: ["税理士事務所専門ホームページ制作", "税理士事務所専門営業資料制作"]
  };
}

export function breadcrumbJsonLd(items: LinkItem[]): JsonObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href)
    }))
  };
}

export function faqJsonLd(items: FaqItem[]): JsonObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function contactPageJsonLd(path: string): JsonObject {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "お問い合わせ",
    url: absoluteUrl(path),
    about: {
      "@type": "ProfessionalService",
      name: siteConfig.name
    }
  };
}
