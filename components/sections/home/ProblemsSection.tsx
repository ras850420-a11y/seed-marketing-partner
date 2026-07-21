import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { problemItems } from "@/data/home";
import { problemsImage } from "@/data/problems-image";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { SoftTextureBackground } from "./SoftTextureBackground";

export function ProblemsSection() {
  return (
    <Section className="relative isolate overflow-hidden">
      <SoftTextureBackground />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1fr)] lg:items-center">
          <div>
            <SectionTitle title="こんなお悩みはありませんか？" />
            <div className="grid gap-4 sm:grid-cols-2">
              {problemItems.map((item) => (
                <Card
                  className="border-[#b8c9d6] bg-[var(--color-card-tint)] p-5 shadow-[0_18px_36px_rgba(8,39,68,0.10)]"
                  key={item}
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-teal ring-1 ring-teal/30 shadow-sm">
                      <CheckCircle2 aria-hidden className="h-5 w-5" />
                    </span>
                    <p className="font-bold text-brand">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-8 text-lg font-bold text-brand">
              その悩み、SEEDがお手伝いします。
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#b8c9d6] bg-white shadow-[0_24px_54px_rgba(8,39,68,0.16)]">
            <Image
              src={problemsImage.src}
              alt={problemsImage.alt}
              fill
              className="h-full w-full object-cover object-[58%_center]"
              sizes="(min-width: 1024px) 48vw, 100vw"
              unoptimized
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,39,68,0.08)_0%,rgba(8,39,68,0)_42%)]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
