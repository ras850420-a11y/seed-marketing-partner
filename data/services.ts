import type { FlowStep, ServiceItem } from "@/types/content";

export const services: ServiceItem[] = [
  {
    id: "website",
    title: "ホームページ制作",
    href: "/services/website",
    lead: "税理士事務所専門だからこそ、相談されるホームページを制作します。",
    description:
      "事務所の強みや専門性を整理し、相談者が安心して問い合わせできる導線を整えます。",
    features: [
      "新規制作",
      "リニューアル",
      "スマートフォン対応",
      "問い合わせ導線設計",
      "基本SEO設定",
      "Googleマップ導線",
      "保守・修正"
    ],
    targets: [
      "ホームページを持っていない",
      "古いホームページを改善したい",
      "開業予定",
      "紹介だけに頼っている"
    ],
    icon: "monitor"
  },
  {
    id: "sales-materials",
    title: "営業資料制作",
    href: "/services/sales-materials",
    lead: "説明しやすい資料は、信頼につながります。",
    description:
      "会社案内、提案資料、サービス資料などを、面談や紹介先で使いやすい形に整えます。",
    features: [
      "会社案内",
      "顧問契約資料",
      "サービス紹介資料",
      "相続資料",
      "会社設立資料",
      "営業PDF",
      "パンフレット",
      "提案書"
    ],
    targets: [
      "営業資料がない",
      "サービス説明が難しい",
      "金融機関へ説明したい",
      "紹介先へ渡す資料が欲しい"
    ],
    icon: "file"
  }
];

export const websiteProductionItems = [
  "新規制作",
  "リニューアル",
  "スマートフォン対応",
  "問い合わせ導線",
  "Googleマップ導線",
  "基本SEO",
  "保守"
] as const;

export const websiteTargets = [
  "ホームページが無い",
  "古い",
  "スマートフォン対応していない",
  "問い合わせが少ない",
  "開業予定"
] as const;

export const websiteOrganizeSteps = [
  "事務所",
  "強み",
  "ターゲット",
  "サービス",
  "ホームページ"
] as const;

export const websiteFlowSteps: FlowStep[] = [
  { title: "相談", description: "現状と目的を確認します。", icon: "message" },
  { title: "ヒアリング", description: "強みやサービス内容を伺います。", icon: "clipboard" },
  { title: "構成", description: "必要なページと導線を整理します。", icon: "layout" },
  { title: "デザイン", description: "信頼感と読みやすさを形にします。", icon: "pen" },
  { title: "制作", description: "スマートフォン表示まで整えます。", icon: "monitor" },
  { title: "公開", description: "公開後の修正も相談できます。", icon: "check" }
];

export const materialProductionItems = [
  "会社案内",
  "サービス案内",
  "提案書",
  "パンフレット",
  "PDF資料",
  "相続資料",
  "会社設立資料",
  "営業資料"
] as const;

export const materialUseScenes = [
  { title: "面談", icon: "message" },
  { title: "営業", icon: "briefcase" },
  { title: "金融機関", icon: "landmark" },
  { title: "紹介", icon: "handshake" },
  { title: "セミナー", icon: "file" },
  { title: "メール送付", icon: "mail" }
] as const;

export const materialFlowSteps: FlowStep[] = [
  { title: "相談", description: "使う場面や目的を確認します。", icon: "message" },
  { title: "内容整理", description: "伝えるべき情報を整理します。", icon: "layout" },
  { title: "構成", description: "ページ順と見せ方を組み立てます。", icon: "clipboard" },
  { title: "デザイン", description: "読みやすく説明しやすい形にします。", icon: "pen" },
  { title: "修正", description: "表現や内容を調整します。", icon: "refresh" },
  { title: "納品", description: "PDFなど使いやすい形式で納品します。", icon: "check" }
];
