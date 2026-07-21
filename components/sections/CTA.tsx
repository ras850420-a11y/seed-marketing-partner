import { ArrowRight } from "lucide-react";

import { ctaConfig } from "@/data/cta";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function CTA() {
  return (
    <Section tone="brand" className="bg-[linear-gradient(135deg,var(--color-navy),#0b5f65)] py-14">
      <Container>
        <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold text-white/75">無料相談</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
              {ctaConfig.title}
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/80">{ctaConfig.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <ButtonLink
              href={ctaConfig.consultationHref}
              icon={<ArrowRight aria-hidden className="h-4 w-4" />}
            >
              {ctaConfig.primaryLabel}
            </ButtonLink>
            <ButtonLink
              href={ctaConfig.contactHref}
              variant="secondary"
              className="border-white/80 bg-white/95 text-brand hover:bg-white"
            >
              {ctaConfig.contactLabel}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
