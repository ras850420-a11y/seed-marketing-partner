import Link from "next/link";

import { siteConfig } from "@/data/company";
import { footerNavigation } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div>
            <Link className="inline-block rounded-sm focus-ring" href="/">
              <span className="block text-3xl font-bold leading-none text-brand">
                {siteConfig.name}
              </span>
              <span className="mt-2 block text-sm font-bold text-teal">
                {siteConfig.subtitle}
              </span>
            </Link>
            <p className="mt-5 max-w-sm leading-8 text-muted">
              税理士事務所の魅力や強みを整理し、伝わるホームページと営業資料へ整えます。
            </p>
          </div>
          <nav aria-label="フッターメニュー">
            <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link className="text-sm font-bold text-muted hover:text-brand focus-ring" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
          © SEED All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
