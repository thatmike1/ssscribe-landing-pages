import { track } from "@vercel/analytics";
import { Snake } from "@/components/snake";
import { BrandButton, Section, SectionHeading } from "./primitives";
import type { ProductConfig } from "./types";

export function FinalCtaSection({ product }: { product: ProductConfig }) {
  return (
    <Section
      style={{
        padding: "var(--pad-y-lg) var(--pad-x)",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div style={{ display: "inline-block", marginBottom: 18 }}>
        <Snake size={140} variant={product.variant} motion="calm" />
      </div>
      <SectionHeading size="cta">okay, sssold?</SectionHeading>
      <p
        style={{
          fontSize: "clamp(16px, 1.8vw, 19px)",
          color: "var(--muted)",
          fontWeight: 500,
          maxWidth: 480,
          margin: "18px auto 0",
        }}
      >
        it's free to try, takes ten seconds to add, and works where you already
        chat.
      </p>
      <BrandButton
        size="large"
        stamp="accent"
        style={{ marginTop: 28 }}
        onClick={() => track("cta_click", { location: "final", action: "add", product: product.name })}
      >
        add {product.name} to {product.platform} →
      </BrandButton>
    </Section>
  );
}
