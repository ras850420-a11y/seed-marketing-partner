import { seedReasons } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { FeatureCard } from "../FeatureCard";

export function ReasonsSection() {
  return (
    <Section tone="brand" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(145deg, rgba(9, 35, 62, 0.98) 0%, rgba(8, 39, 68, 0.92) 42%, rgba(10, 91, 94, 0.95) 100%), repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0 2px, transparent 2px 84px), linear-gradient(135deg, transparent 0 58%, rgba(240, 138, 36, 0.24) 58% 64%, transparent 64% 100%)",
          backgroundBlendMode: "normal, screen, normal"
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,39,68,0.18)_0%,rgba(8,39,68,0.46)_100%)]" />
      <Container>
        <SectionTitle title="SEEDが選ばれる理由" light />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {seedReasons.map((feature) => (
            <FeatureCard
              feature={feature}
              key={feature.title}
              className="bg-white"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
