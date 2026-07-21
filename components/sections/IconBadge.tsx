import {
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  Handshake,
  Landmark,
  LayoutList,
  LifeBuoy,
  Lightbulb,
  Mail,
  MessageCircle,
  Monitor,
  PenTool,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  User
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { IconName } from "@/types/content";
import { cn } from "@/lib/utils";

const iconMap: Record<IconName, LucideIcon> = {
  badge: BadgeCheck,
  briefcase: Briefcase,
  building: Building2,
  check: CheckCircle2,
  clipboard: ClipboardList,
  file: FileText,
  handshake: Handshake,
  landmark: Landmark,
  layout: LayoutList,
  lifebuoy: LifeBuoy,
  lightbulb: Lightbulb,
  mail: Mail,
  message: MessageCircle,
  monitor: Monitor,
  pen: PenTool,
  refresh: RefreshCw,
  search: Search,
  shield: ShieldCheck,
  smartphone: Smartphone,
  user: User
};

interface IconBadgeProps {
  icon: IconName;
  className?: string;
  light?: boolean;
}

export function IconBadge({ icon, className, light = false }: IconBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <span
      className={cn(
        "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border",
        light ? "border-white/35 bg-white/15 text-white" : "border-teal bg-teal text-white",
        className
      )}
      aria-hidden
    >
      <Icon className="h-7 w-7" />
    </span>
  );
}
