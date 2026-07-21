import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { ServiceCard } from "../ServiceCard";
import { SoftTextureBackground } from "./SoftTextureBackground";

export function ServicesPreviewSection() {
  return (
    <Section id="services" className="relative isolate overflow-hidden">
      <SoftTextureBackground />
      <Container className="relative">
        <SectionTitle title="サービス" />
        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <p className="mt-8 rounded-lg border border-[#b8c9d6] bg-[var(--color-card-tint)] p-5 font-bold leading-8 text-brand shadow-[0_16px_32px_rgba(8,39,68,0.08)]">
          ホームページと営業資料を一緒に制作することで、事務所の印象を統一できます。
        </p>
      </Container>
    </Section>
  );
}
