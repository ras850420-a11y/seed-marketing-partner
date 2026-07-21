import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { FAQ } from "@/components/sections/FAQ";
import { Flow } from "@/components/sections/Flow";
import { IconBadge } from "@/components/sections/IconBadge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { imageAssets } from "@/data/image-assets";
import {
  monthlySupportRows,
  pricingComparisonRows,
  pricingFaq,
  pricingFlowSteps,
  pricingHero,
  pricingPlanDetails,
  pricingPlanSummaries
} from "@/data/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";

const breadcrumbs = [
  { label: "ホーム", href: "/" },
  { label: "料金表", href: "/pricing" }
];

export const metadata: Metadata = createPageMetadata({
  title: "料金表｜税理士専門ホームページ制作・営業資料制作｜SEED",
  description:
    "SEEDの税理士事務所向けホームページ制作プランの料金表です。スタータープラン、スタンダードプラン、プレミアムプランから事務所の状況に合わせてお選びいただけます。",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), faqJsonLd(pricingFaq)]} />
      <section className="overflow-hidden bg-soft pb-16 pt-10 sm:pb-20">
        <Container>
          <Breadcrumb items={breadcrumbs} />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold text-teal">{pricingHero.label}</p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-brand sm:text-5xl">{pricingHero.title}</h1>
              <p className="mt-5 text-xl font-bold leading-9 text-brand sm:text-2xl">{pricingHero.lead}</p>
              <div className="mt-5 space-y-4 leading-8 text-muted">
                {pricingHero.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact" size="lg" icon={<ArrowRight aria-hidden className="h-4 w-4" />}>
                  無料相談する
                </ButtonLink>
                <ButtonLink
                  href="/services/website"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight aria-hidden className="h-4 w-4" />}
                >
                  ホームページ制作を見る
                </ButtonLink>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-line bg-white shadow-soft sm:min-h-[420px] lg:min-h-[500px]">
              <Image
                src={imageAssets.hero.src}
                alt="資料とパソコンを確認しながらホームページ制作の費用を検討するイメージ"
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/30 via-transparent to-white/5" />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionTitle
            title="まずは目的からお選びください"
            description="料金だけで選ぶよりも、今の事務所に必要な状態から考えると、無理のないプランを選びやすくなります。"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPlanSummaries.map((plan) => (
              <Card
                className={`flex h-full flex-col bg-[#f8fbfa] p-6 ${
                  plan.id === "standard" ? "border-teal shadow-[0_14px_32px_rgba(0,128,121,0.12)]" : ""
                }`}
                key={plan.id}
              >
                <div className="flex items-start justify-between gap-4">
                  <IconBadge icon={plan.icon} />
                  {plan.label ? (
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                      {plan.label}
                    </span>
                  ) : null}
                </div>
                <p className="mt-5 text-sm font-bold text-teal">{plan.title}</p>
                <h2 className="mt-2 text-2xl font-bold text-brand">{plan.planName}</h2>
                <p className="mt-4 flex-1 leading-8 text-muted">{plan.description}</p>
                <p className="mt-5 text-2xl font-bold text-brand">{plan.price}</p>
                <ButtonLink
                  className="mt-6 self-start"
                  href={plan.href}
                  variant={plan.id === "standard" ? "primary" : "secondary"}
                  icon={<ArrowRight aria-hidden className="h-4 w-4" />}
                >
                  詳細を見る
                </ButtonLink>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SectionTitle
            title="ホームページ制作プラン"
            description="PCでは表として確認しやすく、スマートフォンでは横にスクロールして比較できます。"
          />
          <div className="overflow-x-auto rounded-lg border border-line bg-white shadow-sm">
            <table className="min-w-[920px] table-fixed border-collapse text-left">
              <thead className="bg-brand text-white">
                <tr>
                  <th className="w-[23%] px-5 py-4 text-sm font-bold" scope="col">
                    項目
                  </th>
                  <th className="w-[25.5%] px-5 py-4 text-sm font-bold" scope="col">
                    スターター
                  </th>
                  <th className="w-[25.5%] px-5 py-4 text-sm font-bold" scope="col">
                    <span className="flex items-center gap-2">
                      スタンダード
                      <span className="whitespace-nowrap rounded-full bg-accent px-2 py-0.5 text-xs">おすすめ</span>
                    </span>
                  </th>
                  <th className="w-[26%] px-5 py-4 text-sm font-bold" scope="col">
                    プレミアム
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {pricingComparisonRows.map((row) => (
                  <tr className="odd:bg-white even:bg-[#f8fbfa]" key={row.label}>
                    <th className="px-5 py-4 text-sm font-bold text-brand" scope="row">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-sm leading-7 text-muted">{row.starter}</td>
                    <td className="px-5 py-4 text-sm leading-7 font-bold text-brand">{row.standard}</td>
                    <td className="px-5 py-4 text-sm leading-7 text-muted">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section tone="brand">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-bold text-accent">迷ったときの考え方</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-4xl">スタンダードプランをおすすめする理由</h2>
            <div className="mt-6 space-y-4 leading-8 text-white/80">
              <p>ホームページは、事務所名やサービス内容を載せるだけでは、他の事務所との違いが伝わりにくいものです。</p>
              <p>
                スタンダードプランでは、事務所の強みや相談者に伝えたい特徴を整理し、トップページのコピーやお悩み訴求、FAQまで調整します。
              </p>
              <p>
                「ただホームページを持つ」だけでなく、「この事務所に相談してみたい」と感じてもらえるホームページを目指す場合は、スタンダードプランをおすすめしています。
              </p>
            </div>
            <ButtonLink className="mt-8" href="/contact" icon={<ArrowRight aria-hidden className="h-4 w-4" />}>
              スタンダードプランについて相談する
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle title="プラン詳細" />
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPlanDetails.map((plan) => (
              <article
                className={`rounded-lg border bg-[#f9fbf7] p-6 shadow-sm ${
                  plan.id === "standard" ? "border-teal" : "border-line"
                }`}
                id={plan.id}
                key={plan.id}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-brand">{plan.name}</h2>
                    <p className="mt-2 text-2xl font-bold text-accent">{plan.price}</p>
                  </div>
                  {plan.label ? (
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                      {plan.label}
                    </span>
                  ) : null}
                </div>
                <p className="mt-5 leading-8 text-muted">{plan.lead}</p>
                <h3 className="mt-6 text-sm font-bold text-brand">含まれる内容</h3>
                <ul className="mt-4 space-y-3">
                  {plan.included.map((item) => (
                    <li className="flex gap-3 text-sm leading-7 text-muted" key={item}>
                      <CheckCircle2 aria-hidden className="mt-1 h-5 w-5 shrink-0 text-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {plan.note ? (
                  <p className="mt-5 rounded-lg bg-white px-4 py-3 text-sm leading-7 text-muted">{plan.note}</p>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SectionTitle
            title="公開後の月額サポート"
            description="公開後の修正や管理をご希望の場合は、月額サポートもご用意しています。必要な範囲に応じて、無理のない形でご提案します。"
          />
          <div className="overflow-x-auto rounded-lg border border-line bg-white shadow-sm">
            <table className="min-w-[760px] table-fixed border-collapse text-left">
              <thead className="bg-brand text-white">
                <tr>
                  <th className="w-[25%] px-5 py-4 text-sm font-bold" scope="col">
                    プラン
                  </th>
                  <th className="w-[22%] px-5 py-4 text-sm font-bold" scope="col">
                    月額目安
                  </th>
                  <th className="px-5 py-4 text-sm font-bold" scope="col">
                    内容
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {monthlySupportRows.map((row) => (
                  <tr className="odd:bg-white even:bg-[#f8fbfa]" key={row.plan}>
                    <th className="px-5 py-4 text-sm font-bold text-brand" scope="row">
                      {row.plan}
                    </th>
                    <td className="px-5 py-4 text-sm font-bold text-accent">{row.price}</td>
                    <td className="px-5 py-4 text-sm leading-7 text-muted">{row.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">内容により別途お見積りとなる場合があります。</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle title="制作の流れ" />
          <Flow steps={pricingFlowSteps} />
        </Container>
      </Section>

      <Section tone="soft">
        <Container>
          <SectionTitle title="よくある質問" />
          <FAQ items={pricingFaq} />
        </Container>
      </Section>

      <Section tone="brand">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold leading-tight sm:text-4xl">
                どのプランが合うか分からなくても大丈夫です
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-white/80">
                ホームページを新しく作りたい、今のホームページを見直したい、料金感だけ先に知りたい。そんな段階でもお気軽にご相談ください。事務所の状況をお伺いしたうえで、最適な進め方をご提案します。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" icon={<ArrowRight aria-hidden className="h-4 w-4" />}>
                無料相談する
              </ButtonLink>
              <ButtonLink
                href="/services/website"
                variant="secondary"
                icon={<ArrowRight aria-hidden className="h-4 w-4" />}
              >
                ホームページ制作を見る
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
