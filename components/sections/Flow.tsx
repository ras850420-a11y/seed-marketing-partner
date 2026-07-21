import type { FlowStep } from "@/types/content";

import { IconBadge } from "./IconBadge";

interface FlowProps {
  steps: FlowStep[];
}

export function Flow({ steps }: FlowProps) {
  return (
    <ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
      {steps.map((step, index) => (
        <li className="relative rounded-lg border border-line bg-white p-5" key={step.title}>
          <div className="mb-4 flex items-center justify-between gap-3">
            <IconBadge icon={step.icon} />
            <span className="text-sm font-bold text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-base font-bold text-brand">{step.title}</h3>
          <p className="mt-2 text-sm leading-7 text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
