import type { FeatureItem, FlowStep } from "@/types/content";

export const heroTrustItems = [
  "全国対応",
  "オンライン対応",
  "ホームページがなくても相談OK",
  "営業資料だけでもOK"
] as const;

export const problemItems = [
  "ホームページが無い",
  "ホームページが古い",
  "営業資料がない",
  "事務所の強みを伝えられてない",
  "開業したばかり",
  "相談相手がいない"
] as const;

export const seedReasons: FeatureItem[] = [
  {
    title: "税理士専門",
    description:
      "税理士事務所の相談導線やサービス説明に合わせて、伝える順番から整理します。",
    icon: "badge"
  },
  {
    title: "「何も決まってない」から相談できます。",
    description:
      "構成や台本が決まってなくても大丈夫。SEEDがゼロから一緒に作ります。",
    icon: "lightbulb"
  },
  {
    title: "内容整理からサポート",
    description:
      "言葉にしにくい強みや代表者の想いを、相談者に届く表現へ整えます。",
    icon: "layout"
  },
  {
    title: "公開後も相談できる",
    description:
      "保守や修正、営業資料の更新など、運用しながら必要な改善を相談できます。",
    icon: "lifebuoy"
  }
];

export const homeFlowSteps: FlowStep[] = [
  {
    title: "無料相談",
    description: "現状や相談したい内容をお聞きします。",
    icon: "message"
  },
  {
    title: "ヒアリング",
    description: "事務所の特徴、サービス、届けたい相手を整理します。",
    icon: "clipboard"
  },
  {
    title: "内容整理",
    description: "強みや導線を、伝わる構成へ組み立てます。",
    icon: "layout"
  },
  {
    title: "デザイン制作",
    description: "信頼感と読みやすさを重視して形にします。",
    icon: "pen"
  },
  {
    title: "修正",
    description: "確認内容を反映し、必要な調整を行います。",
    icon: "refresh"
  },
  {
    title: "納品",
    description: "公開やPDF納品後も必要に応じて相談できます。",
    icon: "check"
  }
];
