import type { FaqItem } from "@/types/content";

interface FAQProps {
  items: FaqItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className="divide-y divide-line rounded-lg border border-line bg-white">
      {items.map((item) => (
        <details className="group p-5 sm:p-6" key={item.question}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-brand focus-ring">
            <span>{item.question}</span>
            <span className="mt-0.5 text-xl leading-none text-teal group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 leading-8 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
