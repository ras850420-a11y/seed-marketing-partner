import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/data/company";
import { ctaConfig } from "@/data/cta";
import { heroTrustItems } from "@/data/home";
import { imageAssets } from "@/data/image-assets";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand text-white">
      <Image
        src={imageAssets.hero.src}
        alt={imageAssets.hero.alt}
        fill
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        priority
        sizes="100vw"
        unoptimized
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,39,68,0.96)_0%,rgba(8,39,68,0.9)_42%,rgba(8,39,68,0.52)_72%,rgba(8,39,68,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-brand/70 to-transparent" />

      <Container className="flex min-h-[calc(100svh-5rem)] items-center pb-32 pt-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-lg bg-white/95 px-3 py-2 text-sm font-bold text-teal shadow-sm">
            {siteConfig.subtitle}
          </p>
          <h1 className="mt-6 text-6xl font-bold leading-none text-white sm:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-base font-bold text-white/90">{siteConfig.subtitle}</p>
          <p className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl">
            税理士事務所の強みを、伝わる形に。
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            ホームページ制作と営業資料制作を通じて、税理士事務所の魅力や専門性を整理し、相談につながる仕組みづくりをお手伝いします。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={ctaConfig.consultationHref}
              size="lg"
              icon={<ArrowRight aria-hidden className="h-4 w-4" />}
            >
              {ctaConfig.primaryLabel}
            </ButtonLink>
            <ButtonLink
              href={ctaConfig.servicesHref}
              variant="secondary"
              size="lg"
              className="border-white/80 bg-white/95 text-brand hover:bg-white"
            >
              {ctaConfig.secondaryLabel}
            </ButtonLink>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-3 text-[0.78rem] font-bold leading-5 text-white sm:text-sm">
            {heroTrustItems.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
