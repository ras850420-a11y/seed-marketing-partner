import { homeFlowSteps } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { Flow } from "../Flow";

export function HomeFlowSection() {
  return (
    <Section>
      <Container>
        <SectionTitle title="制作の流れ" />
        <Flow steps={homeFlowSteps} />
      </Container>
    </Section>
  );
}
