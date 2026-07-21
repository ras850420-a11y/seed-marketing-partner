import { ArrowRight, CheckCircle2 } from "lucide-react";

import type { ServiceItem } from "@/types/content";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

import { IconBadge } from "./IconBadge";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="relative flex h-full flex-col overflow-hidden border-[#b8c9d6] bg-[var(--color-card-tint)] shadow-[0_22px_46px_rgba(8,39,68,0.12)]">
      <span className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden />
      <div className="flex items-start gap-4">
        <IconBadge icon={service.icon} />
        <div>
          <h3 className="text-xl font-bold text-brand">{service.title}</h3>
          <p className="mt-2 leading-8 text-muted">{service.description}</p>
        </div>
      </div>
      <ul className="mt-6 grid gap-3 text-sm text-ink sm:grid-cols-2">
        {service.features.slice(0, 6).map((feature) => (
          <li className="flex items-start gap-2" key={feature}>
            <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7">
        <ButtonLink href={service.href} icon={<ArrowRight aria-hidden className="h-4 w-4" />}>
          詳しく見る
        </ButtonLink>
      </div>
    </Card>
  );
}
