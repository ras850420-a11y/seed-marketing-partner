import type { FeatureItem } from "@/types/content";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

import { IconBadge } from "./IconBadge";

interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <Card className={cn("relative h-full overflow-hidden", className)}>
      <span className="absolute inset-x-0 top-0 h-1 bg-teal" aria-hidden />
      <IconBadge icon={feature.icon} />
      <h3 className="mt-5 text-lg font-bold text-brand">{feature.title}</h3>
      <p className="mt-3 leading-8 text-muted">{feature.description}</p>
    </Card>
  );
}
