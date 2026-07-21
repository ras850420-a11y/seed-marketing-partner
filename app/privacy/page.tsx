import type { Metadata } from "next";

import { CTA } from "@/components/sections/CTA";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

const breadcrumbs = [
  { label: "ホーム", href: "/" },
  { label: "プライバシーポリシー", href: "/privacy" }
];

const privacySections = [
  {
    title: "取得する情報",
    body: [
      "SEEDでは、お問い合わせフォームや無料相談フォームの送信時に、事務所名、氏名、メールアドレス、電話番号、ホームページURL、相談内容などを取得する場合があります。"
    ]
  },
  {
    title: "利用目的",
    body: [
      "取得した情報は、お問い合わせへの返信、無料相談の日程調整、制作内容の確認、サービス改善、必要なご連絡のために利用します。",
      "取得した情報を、上記の目的と関係のない営業活動や第三者への販売に利用することはありません。"
    ]
  },
  {
    title: "第三者提供",
    body: [
      "法令に基づく場合を除き、本人の同意なく第三者へ個人情報を提供しません。",
      "将来的にフォーム送信やメール配信など外部サービスを利用する場合は、必要な範囲で適切なサービスを選定し、個人情報の管理に配慮します。"
    ]
  },
  {
    title: "安全管理",
    body: [
      "取得した個人情報は、漏えい、紛失、改ざん、不正アクセスなどを防ぐため、合理的な範囲で適切に管理します。"
    ]
  },
  {
    title: "開示・訂正・削除",
    body: [
      "本人から個人情報の開示、訂正、利用停止、削除などの希望があった場合は、本人確認のうえ、法令に従って対応します。"
    ]
  },
  {
    title: "Cookieについて",
    body: [
      "本サイトでは、閲覧環境の確認や利便性向上のため、Cookie等の技術が利用される場合があります。Cookieだけで個人を特定するものではありません。",
      "ブラウザの設定によりCookieを無効にすることもできます。"
    ]
  },
  {
    title: "プライバシーポリシーの変更",
    body: [
      "本ページの内容は、必要に応じて変更する場合があります。重要な変更がある場合は、本サイト上で分かりやすくお知らせします。"
    ]
  },
  {
    title: "お問い合わせ",
    body: [
      "個人情報の取り扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。"
    ]
  }
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "プライバシーポリシー｜SEED",
  description: "SEEDにおける個人情報の取り扱い、利用目的、第三者提供、安全管理について掲載しています。",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHeader
        title="プライバシーポリシー"
        lead="SEEDでは、お問い合わせや無料相談で取得した情報を、必要な連絡と制作に関する確認のために適切に取り扱います。"
        breadcrumbs={breadcrumbs}
      />
      <Section>
        <Container className="max-w-3xl">
          <article className="rounded-lg border border-line bg-white p-6 shadow-soft sm:p-8">
            <p className="text-sm font-bold text-teal">最終更新日：2026年7月19日</p>
            <div className="mt-8 space-y-9 leading-8 text-muted">
              {privacySections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-brand">{section.title}</h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </Container>
      </Section>
      <CTA />
    </>
  );
}
