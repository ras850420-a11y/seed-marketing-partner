"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/data/company";
import { ctaConfig } from "@/data/cta";
import { primaryNavigation } from "@/data/navigation";
import { ButtonLink, buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/95 shadow-[0_8px_24px_rgba(8,39,68,0.08)] backdrop-blur">
        <Container className="flex min-h-20 items-center justify-between gap-8 py-3">
          <Link className="rounded-sm focus-ring" href="/" aria-label="SEED トップページ">
            <span className="block text-2xl font-bold leading-none text-brand">
              {siteConfig.name}
            </span>
            <span className="mt-1 block text-xs font-bold text-teal">
              {siteConfig.subtitle}
            </span>
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            <nav className="flex items-center gap-1" aria-label="メインメニュー">
              {primaryNavigation.map((item) => (
                <Link
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-bold text-muted hover:bg-teal/10 hover:text-brand focus-ring",
                    pathname === item.href && "bg-teal/10 text-brand"
                  )}
                  href={item.href}
                  key={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ButtonLink href={ctaConfig.consultationHref} size="sm">
              無料相談
            </ButtonLink>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white text-brand shadow-sm focus-ring lg:hidden"
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </Container>

        {open ? (
          <div className="border-t border-line bg-white lg:hidden">
            <Container className="grid gap-2 py-4">
              {primaryNavigation.map((item) => (
                <Link
                  className="rounded-lg px-3 py-3 font-bold text-brand hover:bg-teal/10 focus-ring"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink className="mt-2" href={ctaConfig.consultationHref}>
                無料相談
              </ButtonLink>
            </Container>
          </div>
        ) : null}
      </header>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 py-3 shadow-[0_-10px_28px_rgba(8,39,68,0.08)] backdrop-blur lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <Link
            className={buttonStyles({ variant: "primary", size: "sm" })}
            href={ctaConfig.consultationHref}
          >
            無料相談
          </Link>
          <Link
            className={buttonStyles({ variant: "secondary", size: "sm" })}
            href={ctaConfig.servicesHref}
          >
            サービス
          </Link>
        </div>
      </div>
    </>
  );
}
