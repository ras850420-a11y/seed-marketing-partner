export const siteConfig = {
  name: "SEED",
  subtitle: "税理士専門の集客パートナー",
  representative: "本多綱貴",
  tradeName: "SEED",
  description:
    "SEEDは税理士事務所専門の集客パートナーです。ホームページ制作と営業資料制作を通じて、事務所の魅力や強みを伝わる形に整理します。",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://seedmapartner.netlify.app",
  ogImage: "/images/ogp.svg",
  email: "info@example.com",
  phone: "",
  address: "所在地未設定",
  areaServed: "全国対応",
  supportStyle: "オンライン対応"
} as const;
