import { ArrowDown } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

const diagramItems = ["税理士事務所", "強みを整理", "ホームページ・営業資料", "相談につながる"];

export function AboutSeedSection() {
  return (
    <Section id="about" tone="brand" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgba(8, 39, 68, 0.98) 0%, rgba(11, 77, 82, 0.94) 56%, rgba(8, 39, 68, 0.98) 100%), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.11) 0 1px, transparent 1px 92px), repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 72px)",
          backgroundBlendMode: "normal, screen, screen"
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(8,39,68,0.3)_100%)]" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="SEEDについて"
              title="税理士事務所専門の集客パートナーです。"
              description="ホームページを作るだけでも、営業資料をデザインするだけでもありません。事務所の魅力や強みを整理し、相談者へ分かりやすく伝えることを目的としています。"
              light
            />
            <div className="space-y-5 leading-8 text-white/85">
              <p>
                ホームページがまだ無い方も、開業予定の方も、古いホームページを改善したい方も、お気軽にご相談ください。
              </p>
              <p>
                SEEDでは、相談から制作、修正まで一貫して対応します。事務所の考え方や大切にしている価値を丁寧に受け取り、相談者に届く形へ整えます。
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-white/40 bg-white p-6 shadow-sm">
            <ol className="grid gap-3">
              {diagramItems.map((item, index) => (
                <li key={item}>
                  <div className="rounded-lg border border-line bg-white px-5 py-4 text-center font-bold text-brand">
                    {item}
                  </div>
                  {index < diagramItems.length - 1 ? (
                    <div className="flex justify-center py-2 text-teal">
                      <ArrowDown aria-hidden className="h-5 w-5" />
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
