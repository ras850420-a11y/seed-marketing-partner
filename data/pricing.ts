import type { FaqItem, FlowStep, IconName } from "@/types/content";

export type PricingPlanId = "starter" | "standard" | "premium";

export interface PricingPlanSummary {
  id: PricingPlanId;
  title: string;
  planName: string;
  description: string;
  price: string;
  href: string;
  icon: IconName;
  label?: string;
}

export interface PricingComparisonRow {
  label: string;
  starter: string;
  standard: string;
  premium: string;
}

export interface PricingPlanDetail {
  id: PricingPlanId;
  name: string;
  price: string;
  lead: string;
  included: string[];
  label?: string;
  note?: string;
}

export interface MonthlySupportRow {
  plan: string;
  price: string;
  content: string;
}

export const pricingHero = {
  title: "料金表",
  label: "税理士事務所専門ホームページ制作",
  lead: "税理士事務所の状況に合わせて選べるホームページ制作プラン",
  body: [
    "SEEDでは、ホームページをこれから持ちたい事務所様から、現在のホームページをリニューアルしたい事務所様、集客導線までしっかり整えたい事務所様まで、状況に合わせて選べる3つの制作プランをご用意しています。",
    "どのプランが合うか分からない場合も、無料相談で事務所の状況をお伺いしたうえで、無理のない内容をご案内します。"
  ]
} as const;

export const pricingPlanSummaries: PricingPlanSummary[] = [
  {
    id: "starter",
    title: "まずはホームページを公開したい",
    planName: "スタータープラン",
    description: "税理士事務所向けテンプレートをもとに、必要な情報を整理して短期間で公開するプランです。",
    price: "30万円〜（税別）",
    href: "#starter",
    icon: "monitor"
  },
  {
    id: "standard",
    title: "事務所の強みまで伝えたい",
    planName: "スタンダードプラン",
    label: "おすすめ",
    description: "ヒアリングを通して事務所の強みを整理し、コピーやFAQまで整えるおすすめプランです。",
    price: "45万円〜（税別）",
    href: "#standard",
    icon: "clipboard"
  },
  {
    id: "premium",
    title: "集客まで見据えて作り込みたい",
    planName: "プレミアムプラン",
    description: "ページ構成から設計し、サービス詳細ページやSEO設計まで対応する本格プランです。",
    price: "70万円〜（税別）",
    href: "#premium",
    icon: "search"
  }
];

export const pricingComparisonRows: PricingComparisonRow[] = [
  {
    label: "初期費用（税別）",
    starter: "30万円〜",
    standard: "45万円〜",
    premium: "70万円〜"
  },
  {
    label: "こんな方に",
    starter: "まずは早く・確実にHPを持ちたい方",
    standard: "事務所の強みをしっかり伝えたい方",
    premium: "集客導線まで作り込みたい方"
  },
  {
    label: "制作期間目安",
    starter: "約1ヶ月",
    standard: "約1.5〜2ヶ月",
    premium: "約2〜3ヶ月"
  },
  {
    label: "ページ構成",
    starter: "既存テンプレートを利用",
    standard: "既存テンプレートベース",
    premium: "事務所に合わせて構成をカスタム"
  },
  { label: "テキスト差し替え", starter: "○", standard: "○", premium: "○" },
  { label: "写真・ロゴ差し替え", starter: "○", standard: "○", premium: "○" },
  { label: "コピーライティング調整", starter: "ー", standard: "○", premium: "○" },
  { label: "お悩み訴求・FAQ設計", starter: "ー", standard: "○", premium: "○" },
  { label: "お客様の声掲載", starter: "ー", standard: "○", premium: "○" },
  { label: "サービス詳細ページ追加", starter: "ー", standard: "ー", premium: "○（2ページまで）" },
  { label: "問い合わせフォーム設置", starter: "○", standard: "○", premium: "○" },
  { label: "独自ドメイン接続・SSL設定", starter: "○", standard: "○", premium: "○" },
  {
    label: "GA4設置",
    starter: "○（設置のみ）",
    standard: "○（設置のみ）",
    premium: "○（CV計測設計込み）"
  },
  { label: "基本SEO設定", starter: "○", standard: "○", premium: "○" },
  { label: "SEOキーワード設計", starter: "ー", standard: "ー", premium: "○" },
  { label: "修正回数", starter: "1回まで", standard: "2回まで", premium: "3回まで" },
  { label: "公開後サポート", starter: "別途月額", standard: "別途月額", premium: "別途月額" }
];

export const pricingPlanDetails: PricingPlanDetail[] = [
  {
    id: "starter",
    name: "スタータープラン",
    price: "30万円〜（税別）",
    lead: "まずはホームページを持ちたい事務所様向けのプランです。税理士事務所向けテンプレートをもとに、必要な情報を整理して短期間で公開します。",
    included: [
      "事務所名・代表者名・住所・電話番号・営業時間の反映",
      "代表メッセージの原稿反映",
      "サービス内容文言の軽微な調整",
      "代表者写真・事務所写真の差し替え",
      "ロゴの差し替え",
      "問い合わせフォームの送信先設定",
      "Googleマップの位置情報差し替え",
      "独自ドメインへの接続・SSL設定",
      "GA4タグ設置",
      "本番動作確認・公開作業"
    ],
    note: "強みの深掘りやFAQ設計まで行いたい場合は、スタンダードプランをおすすめしています。"
  },
  {
    id: "standard",
    name: "スタンダードプラン",
    label: "おすすめ",
    price: "45万円〜（税別）",
    lead: "事務所の強みが伝わることを重視したプランです。スタータープランの内容に加えて、事務所ごとの特徴を整理し、相談者に伝わるコピーやFAQまで整えます。",
    included: [
      "スタータープランの内容一式",
      "強み・特徴のヒアリング",
      "コピーライティング調整",
      "お悩み訴求文のカスタマイズ",
      "FAQ項目の見直し・追加",
      "お客様の声の掲載",
      "写真の色調補正・簡易加工",
      "修正2回まで対応"
    ]
  },
  {
    id: "premium",
    name: "プレミアムプラン",
    price: "70万円〜（税別）",
    lead: "集客導線まで見据えて作り込みたい事務所様向けの本格プランです。事務所の状況に合わせてページ構成から設計し、サービスごとの詳細ページやSEO設計まで対応します。",
    included: [
      "スタンダードプランの内容一式",
      "ページ構成のゼロからの設計",
      "サービス詳細ページの追加（2ページまで）",
      "SEOキーワード設計",
      "GA4でのコンバージョン計測設計",
      "問い合わせ導線の設計",
      "修正3回まで対応"
    ]
  }
];

export const monthlySupportRows: MonthlySupportRow[] = [
  {
    plan: "スターター向け",
    price: "5,000円〜",
    content: "サーバー・ドメイン維持、軽微な文言修正"
  },
  {
    plan: "スタンダード向け",
    price: "10,000円〜",
    content: "上記に加えて、写真差し替え、フォーム項目調整"
  },
  {
    plan: "プレミアム向け",
    price: "15,000円〜",
    content: "上記に加えて、アクセス状況の簡易レポート、改善提案"
  }
];

export const pricingFlowSteps: FlowStep[] = [
  { title: "無料相談", description: "現状や目的、気になる点を確認します。", icon: "message" },
  { title: "ヒアリング", description: "事務所の特徴や必要な情報を伺います。", icon: "clipboard" },
  { title: "お見積り", description: "内容に合わせて無理のない進め方を整理します。", icon: "file" },
  { title: "制作", description: "構成、文章、デザインを形にします。", icon: "monitor" },
  { title: "ご確認・修正", description: "内容を確認しながら必要な修正を行います。", icon: "refresh" },
  { title: "公開", description: "本番環境で表示や送信を確認して公開します。", icon: "check" },
  { title: "公開後サポート", description: "必要に応じて修正や運用の相談に対応します。", icon: "lifebuoy" }
];

export const pricingFaq: FaqItem[] = [
  {
    question: "どのプランを選べばよいか分かりません。",
    answer: "無料相談で事務所の状況や目的をお伺いしたうえで、無理のないプランをご提案します。"
  },
  {
    question: "まだホームページを持っていなくても相談できますか？",
    answer: "はい。開業予定や初めてホームページを作る事務所様でもご相談いただけます。"
  },
  {
    question: "原稿はすべて用意する必要がありますか？",
    answer: "代表メッセージなど元になる情報はご提供いただきますが、文章の整理や表現の調整はSEEDでお手伝いします。"
  },
  {
    question: "写真やロゴがまだありません。",
    answer: "写真はご提供素材をもとに掲載できます。ロゴがない場合は、テキストロゴでの対応も可能です。"
  },
  {
    question: "表示金額以外に費用はかかりますか？",
    answer:
      "ご依頼内容やドメイン・運用環境によって、別途お見積りとなる場合があります。事前に確認したうえでご案内します。"
  }
];
