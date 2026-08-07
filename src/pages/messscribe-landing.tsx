import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { LanguagesSection } from "@/components/landing/languages-section";
import { LivePreviewSection } from "@/components/landing/live-preview-section";
import { Marquee } from "@/components/landing/marquee";
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
    // m.me shortlink for the bot's page — opens the conversation directly.
    botUrl: "https://m.me/61565271402803",
};

export default function MesscribeLanding() {
    return (
        <PageShell themeClass={MESSSCRIBE.themeClass}>
            <SiteNav product={MESSSCRIBE} />
            <main>
                <HeroSection product={MESSSCRIBE} />
                <Marquee />
                <LivePreviewSection product={MESSSCRIBE} />
                <Storyboard app={MESSSCRIBE.app} name={MESSSCRIBE.name} />
                <LanguagesSection />
                <PricingSection />
                <FinalCtaSection product={MESSSCRIBE} />
            </main>
            <SiteFooter product={MESSSCRIBE} />
        </PageShell>
    );
}
