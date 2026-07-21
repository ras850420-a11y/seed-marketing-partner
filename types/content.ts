export type ButtonVariant = "primary" | "secondary" | "ghost";

export type IconName =
  | "badge"
  | "briefcase"
  | "building"
  | "check"
  | "clipboard"
  | "file"
  | "handshake"
  | "landmark"
  | "layout"
  | "lifebuoy"
  | "lightbulb"
  | "mail"
  | "message"
  | "monitor"
  | "pen"
  | "refresh"
  | "search"
  | "shield"
  | "smartphone"
  | "user";

export interface LinkItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: "website" | "sales-materials";
  title: string;
  href: string;
  lead: string;
  description: string;
  features: string[];
  targets: string[];
  icon: IconName;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FlowStep {
  title: string;
  description: string;
  icon: IconName;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: IconName;
}
