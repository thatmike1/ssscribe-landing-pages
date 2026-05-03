import { track } from "@vercel/analytics";
import { SnakeIdle } from "@/components/snake";
import { BrandButton, Section, SectionHeading, StickerPill } from "./primitives";
import type { ProductConfig } from "./types";

export function HeroSection({ product }: { product: ProductConfig }) {
  return (
    <Section
      style={{
        padding: "var(--pad-y-md) var(--pad-x) var(--pad-y-sm)",
        position: "relative",
      }}
    >
      <div className="hero-grid">
        <div>
          <StickerPill
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              fontWeight: 600,
              fontSize: 13,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: "var(--accent)",
                borderRadius: 999,
                boxShadow:
                  "0 0 0 3px color-mix(in srgb, var(--accent) 30%, transparent)",
              }}
            />
            hears 47 languagesss fluently
          </StickerPill>

          <SectionHeading as="h1" size="hero" style={{ lineHeight: 0.9 }}>
            voice notes,
            <br />
            <span style={{ color: "var(--accent)" }}>ssssuddenly</span>
            <br />
            readable.
          </SectionHeading>

          <p
            style={{
              marginTop: 26,
              maxWidth: 540,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.45,
              color: "var(--muted)",
              fontWeight: 500,
            }}
          >
            forward any voice message to our {product.platform} bot. get a
            clean transcript — plus a tl;dr — in seconds. works in every
            language, not just english.
          </p>

          <div
            style={{
              marginTop: 34,
              display: "flex",
              gap: 14,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <BrandButton
              stamp="accent"
              onClick={() => track("cta_click", { location: "hero", action: "add", product: product.name })}
            >
              add to {product.platform} — free →
            </BrandButton>
            <BrandButton
              variant="ghost"
              onClick={() => track("cta_click", { location: "hero", action: "demo", product: product.name })}
            >
              ▶ watch a 20-second demo
            </BrandButton>
            <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>
              no sign-up. no app. just forward.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(6deg)",
          }}
        >
          <SnakeIdle
            size="clamp(220px, min(100%, 50vw), 620px)"
            variant={product.variant}
          />
        </div>
      </div>
    </Section>
  );
}
