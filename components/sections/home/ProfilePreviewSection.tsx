import { siteConfig } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

import { SoftTextureBackground } from "./SoftTextureBackground";

const profileItems = [
  "1985年4月生まれ　千葉県出身",
  "東京都内の大手家賃保証会社にて法人営業を約10年経験。",
  "マネージャーとして部下の育成や新規拠点立ち上げなどを牽引。",
  "大手税理士紹介会社へ転職。営業コンサルタントとして約100事務所の顧問獲得や営業戦略をサポート。",
  "2026年3月、福島県郡山市に移住。同年4月に独立。"
];

export function ProfilePreviewSection() {
  return (
    <Section id="profile" className="relative isolate overflow-hidden">
      <SoftTextureBackground />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div>
            <SectionTitle eyebrow="代表紹介" title={siteConfig.representative} />
            <p className="text-sm font-bold text-teal">
              {siteConfig.name}｜{siteConfig.subtitle}
            </p>
            <div className="mt-6 space-y-5 leading-8 text-muted">
              <p>私はホームページを作ることより、「伝わること」を大切にしています。</p>
              <p>
                税理士事務所には、それぞれ違う魅力があります。その魅力を整理し、相談したくなるホームページや営業資料を制作します。
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-[#b8c9d6] bg-[var(--color-card-tint)] p-6 shadow-soft">
            <h3 className="text-lg font-bold text-brand">経歴</h3>
            <ul className="mt-5 space-y-4">
              {profileItems.map((item) => (
                <li className="border-l-4 border-teal/40 pl-4 font-bold leading-8 text-ink" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
