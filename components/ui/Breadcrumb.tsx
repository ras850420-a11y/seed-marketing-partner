import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

import type { LinkItem } from "@/types/content";

interface BreadcrumbProps {
  items: LinkItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="mb-8 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li className="flex items-center gap-2" key={item.href}>
              {index > 0 ? <ChevronRight aria-hidden className="h-4 w-4" /> : null}
              {isLast ? (
                <span aria-current="page" className="font-bold text-ink">
                  {item.label}
                </span>
              ) : (
                <Link
                  className="inline-flex items-center gap-1 rounded-sm hover:text-teal focus-ring"
                  href={item.href}
                >
                  {index === 0 ? <Home aria-hidden className="h-4 w-4" /> : null}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
