import type { LinkItem } from "@/types/content";

export const primaryNavigation: LinkItem[] = [
  { label: "ホーム", href: "/" },
  { label: "サービス", href: "/services" },
  { label: "代表紹介", href: "/#profile" },
  { label: "お問い合わせ", href: "/contact" }
];

export const footerNavigation: LinkItem[] = [
  ...primaryNavigation,
  { label: "プライバシーポリシー", href: "/privacy" }
];
