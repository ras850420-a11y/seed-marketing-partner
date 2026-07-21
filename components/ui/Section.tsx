import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionTone = "white" | "soft" | "brand";

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: SectionTone;
  className?: string;
  as?: ElementType;
}

const toneClasses: Record<SectionTone, string> = {
  white: "bg-white",
  soft: "bg-soft",
  brand: "bg-brand text-white"
};

export function Section({
  children,
  id,
  tone = "white",
  className,
  as: Tag = "section"
}: SectionProps) {
  return (
    <Tag id={id} className={cn("py-16 sm:py-20", toneClasses[tone], className)}>
      {children}
    </Tag>
  );
}
