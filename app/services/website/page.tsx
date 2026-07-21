import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Flow } from "@/components/sections/Flow";
import { IconBadge } from "@/components/sections/IconBadge";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { websiteFaq } from "@/data/faq";
import {
  websiteFlowSteps,
  websiteOrganizeSteps,
  websiteProductionItems,
  websiteTargets
} from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";

const breadcrumbs = [
  { label: "ホーム", href: "/" },
  { label: "サービス", href: "/services" },
  { label: "ホームページ制作", href: "/services/website" }
];

export const metadata: Metadata = createPageMetadata({
  title: "税理士専門ホームページ制作｜SEED",
  description:
    "税理士事務所専門のホームページ制作。強み、専門性、問い合わせ導線を整理し、相談されるホームページへ整えます。",
  path: "/services/website"
});

export default function WebsiteServicePage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), faqJsonLd(websiteFaq)]} />
      <PageHeader
        title="ホームページ制作"
        label="税理士事務所専門"
        lead="税理士事務所専門だからこそ、相談されるホームページを制作します。"
        breadcrumbs={breadcrumbs}
      />
      <Section>
        <Container>
          <SectionTitle title="こんな方へ" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {websiteTargets.map((item) => (
              <Card className="p-5" key={item}>
                <CheckCircle2 aria-hidden className="mb-4 h-5 w-5 text-teal" />
                <p className="font-bold text-brand">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section tone="soft">
        <Container>
          <SectionTitle title="制作内容" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {websiteProductionItems.map((item) => (
              <Card className="p-5" key={item}>
                <IconBadge icon="monitor" />
                <h3 className="mt-4 font-bold text-brand">{item}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle title="制作時に整理する内容" />
          <ol className="grid gap-3 md:grid-cols-5">
            {websiteOrganizeSteps.map((item, index) => (
              <li className="rounded-lg border border-line bg-white p-5 text-center" key={item}>
                <span className="text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-bold text-brand">{item}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <Section tone="soft">
        <Container>
          <SectionTitle title="制作の流れ" />
          <Flow steps={websiteFlowSteps} />
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle title="よくある質問" />
          <FAQ items={websiteFaq} />
        </Container>
      </Section>
      <CTA />
    </>
  );
}
