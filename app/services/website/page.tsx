import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Flow } from "@/components/sections/Flow";
import { IconBadge } from "@/components/sections/IconBadge";
import { PageHeader } from "@/components/sections/PageHeader";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { websiteFaq } from "@/data/faq";
import { websiteFlowSteps, websiteOrganizeSteps, websiteProductionItems, websiteTargets } from "@/data/services";
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
          <div className="rounded-lg border border-teal/25 bg-[#f4f8f7] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold text-teal">制作料金について</p>
                <h2 className="mt-3 text-2xl font-bold leading-tight text-brand sm:text-3xl">
                  事務所の状況に合わせて選べる3つのプラン
                </h2>
                <p className="mt-4 max-w-3xl leading-8 text-muted">
                  ホームページ制作では、事務所の状況やご希望に合わせて3つのプランをご用意しています。まずは短期間で公開したい場合から、事務所の強みや集客導線までしっかり整えたい場合まで、目的に応じてお選びいただけます。
                </p>
                <p className="mt-3 text-sm font-bold text-muted">どのプランが合うか分からない方は無料相談へ</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/pricing" icon={<ArrowRight aria-hidden className="h-4 w-4" />}>
                  料金表を見る
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" icon={<ArrowRight aria-hidden className="h-4 w-4" />}>
                  無料相談へ
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle title="制作時に整理する内容" />
          <ol className="grid gap-3 md:grid-cols-5">
            {websiteOrganizeSteps.map((item, index) => (
              <li className="rounded-lg border border-line bg-white p-5 text-center" key={item}>
                <span className="text-sm font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
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
