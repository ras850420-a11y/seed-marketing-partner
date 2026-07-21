import type { Metadata } from "next";

import { CTA } from "@/components/sections/CTA";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/structured-data";

const breadcrumbs = [
  { label: "ホーム", href: "/" },
  { label: "お問い合わせ", href: "/contact" }
];

export const metadata: Metadata = createPageMetadata({
  title: "お問い合わせ｜SEED",
  description:
    "SEEDへのお問い合わせページです。ホームページ制作、営業資料制作、ご質問などお気軽にお問い合わせください。",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), contactPageJsonLd("/contact")]} />
      <PageHeader
        title="お問い合わせ"
        lead="ご相談・ご質問など、お気軽にお問い合わせください。"
        breadcrumbs={breadcrumbs}
      />
      <Section>
        <Container className="max-w-3xl">
          <ContactForm variant="contact" />
        </Container>
      </Section>
      <CTA />
    </>
  );
}
