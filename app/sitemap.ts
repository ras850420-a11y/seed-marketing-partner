import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/company";
import { services } from "@/data/services";

const staticRoutes = ["/", "/services", "/pricing", "/consultation", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const serviceRoutes = services.map((service) => service.href);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));
}
