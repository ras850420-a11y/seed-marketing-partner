import type { Metadata } from "next";

import { CTA } from "@/components/sections/CTA";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/data/services";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { createPageMetadata } from "@/lib/metadata";

const breadcrumbs = [
  { label: "ホーム", href: "/" },
  { label: "サービス", href: "/services" }
];

export const metadata: Metadata = createPageMetadata({
  title: "サービス｜SEED",
  description:
    "SEEDでは税理士事務所専門にホームページ制作と営業資料制作を行っています。事務所の強みを整理し、相談につながる形へ整えます。",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHeader
        title="サービス"
        lead="SEEDでは税理士事務所専門にホームページ制作と営業資料制作を行っています。事務所の強みを整理し、相談につながる形へ整えます。"
        breadcrumbs={breadcrumbs}
      />
      <Section>
        <Container>
          <SectionTitle title="依頼できること" />
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard service={service} key={service.id} />
            ))}
          </div>
          <p className="mt-8 rounded-lg border border-line bg-soft p-5 font-bold leading-8 text-brand">
            ホームページと営業資料を一緒に制作することで、事務所全体の印象を統一できます。
          </p>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
