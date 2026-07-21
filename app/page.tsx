import type { Metadata } from "next";

import { CTA } from "@/components/sections/CTA";
import { AboutSeedSection } from "@/components/sections/home/AboutSeedSection";
import { HomeFlowSection } from "@/components/sections/home/HomeFlowSection";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { ProblemsSection } from "@/components/sections/home/ProblemsSection";
import { ProfilePreviewSection } from "@/components/sections/home/ProfilePreviewSection";
import { ReasonsSection } from "@/components/sections/home/ReasonsSection";
import { ServicesPreviewSection } from "@/components/sections/home/ServicesPreviewSection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "SEED｜税理士専門の集客パートナー",
  description:
    "SEEDは税理士事務所専門の集客パートナーです。ホームページ制作と営業資料制作を通じて、事務所の強みを伝わる形に整理します。",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProblemsSection />
      <AboutSeedSection />
      <ServicesPreviewSection />
      <ReasonsSection />
      <HomeFlowSection />
      <ProfilePreviewSection />
      <CTA />
    </>
  );
}
