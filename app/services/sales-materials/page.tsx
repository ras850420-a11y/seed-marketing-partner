import type { Metadata } from "next";

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
import { materialFaq } from "@/data/faq";
import {
  materialFlowSteps,
  materialProductionItems,
  materialUseScenes
} from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";

const breadcrumbs = [
  { label: "ホーム", href: "/" },
  { label: "サービス", href: "/services" },
  { label: "営業資料制作", href: "/services/sales-materials" }
];

export const metadata: Metadata = createPageMetadata({
  title: "税理士専門営業資料制作｜SEED",
  description:
    "税理士事務所向けの営業資料、会社案内、提案資料、PDF資料を制作します。説明しやすく信頼につながる資料へ整えます。",
  path: "/services/sales-materials"
});

export default function SalesMaterialsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), faqJsonLd(materialFaq)]} />
      <PageHeader
        title="営業資料制作"
        label="税理士事務所専門"
        lead="説明しやすい資料は、信頼につながります。"
        breadcrumbs={breadcrumbs}
      />
      <Section>
        <Container>
          <SectionTitle title="制作できるもの" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {materialProductionItems.map((item) => (
              <Card className="p-5" key={item}>
                <IconBadge icon="file" />
                <h3 className="mt-4 font-bold text-brand">{item}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section tone="soft">
        <Container>
          <SectionTitle title="利用シーン" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {materialUseScenes.map((item) => (
              <Card className="p-5 text-center" key={item.title}>
                <IconBadge className="mx-auto" icon={item.icon} />
                <h3 className="mt-4 font-bold text-brand">{item.title}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle title="制作の流れ" />
          <Flow steps={materialFlowSteps} />
        </Container>
      </Section>
      <Section tone="soft">
        <Container>
          <SectionTitle title="よくある質問" />
          <FAQ items={materialFaq} />
        </Container>
      </Section>
      <CTA />
    </>
  );
}
