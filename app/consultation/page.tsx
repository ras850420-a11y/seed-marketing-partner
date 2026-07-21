import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { consultationFaq } from "@/data/faq";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, contactPageJsonLd, faqJsonLd } from "@/lib/structured-data";

const breadcrumbs = [
  { label: "ホーム", href: "/" },
  { label: "無料相談", href: "/consultation" }
];

const topics = [
  "ホームページ制作",
  "リニューアル",
  "営業資料",
  "開業相談",
  "ホームページを作るべきか",
  "制作費について",
  "その他"
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "無料相談｜SEED",
  description:
    "SEEDへの無料相談ページです。ホームページが無い方、営業資料だけ作りたい方、開業予定の方もお気軽にご相談ください。",
  path: "/consultation"
});

export default function ConsultationPage() {
  return (
    <>
      <JsonLd
        data={[breadcrumbJsonLd(breadcrumbs), contactPageJsonLd("/consultation"), faqJsonLd(consultationFaq)]}
      />
      <PageHeader
        title="無料相談"
        lead="ホームページが無い方も、営業資料だけ作りたい方も、開業予定の方も、お気軽にご相談ください。"
        breadcrumbs={breadcrumbs}
      />
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionTitle title="相談できる内容" />
              <div className="grid gap-3">
                {topics.map((topic) => (
                  <Card className="p-4" key={topic}>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 aria-hidden className="h-5 w-5 text-teal" />
                      <p className="font-bold text-brand">{topic}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <ContactForm variant="consultation" />
            </div>
          </div>
        </Container>
      </Section>
      <Section tone="soft">
        <Container>
          <SectionTitle title="よくある質問" />
          <FAQ items={consultationFaq} />
        </Container>
      </Section>
    </>
  );
}
