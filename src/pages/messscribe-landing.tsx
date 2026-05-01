import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { LanguagesSection } from "@/components/landing/languages-section";
import { LivePreviewSection } from "@/components/landing/live-preview-section";
import { PageShell } from "@/components/landing/primitives";
import { PricingSection } from "@/components/landing/pricing-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteNav } from "@/components/landing/site-nav";
import type { ProductConfig } from "@/components/landing/types";
import { Storyboard } from "@/components/storyboard";

const MESSSCRIBE: ProductConfig = {
  app: "messenger",
  name: "messscribe",
  platform: "messenger",
  variant: "blue",
  themeClass: "theme-messscribe",
};

export default function MesscribeLanding() {
  return (
    <PageShell themeClass={MESSSCRIBE.themeClass}>
      <SiteNav product={MESSSCRIBE} />
      <HeroSection product={MESSSCRIBE} />
      <LivePreviewSection product={MESSSCRIBE} />
      <Storyboard app={MESSSCRIBE.app} name={MESSSCRIBE.name} />
      <LanguagesSection />
      <PricingSection />
      <FinalCtaSection product={MESSSCRIBE} />
      <SiteFooter product={MESSSCRIBE} />
    </PageShell>
  );
}
