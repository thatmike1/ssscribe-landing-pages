import { track } from "@vercel/analytics";
import { Snake } from "@/components/snake";
import { BrandButton, Eyebrow, Section, SectionHeading } from "./primitives";
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
            <Eyebrow>ten seconds, then done</Eyebrow>
            {/* TODO: experiment with using the snake svg as one of the "s" in "sssold" */}
            <SectionHeading size="cta">
                okay, <span style={{ color: "var(--accent)" }}>sssold?</span>
            </SectionHeading>
            <p
                style={{
                    fontSize: "clamp(16px, 1.8vw, 19px)",
                    color: "var(--muted)",
                    fontWeight: 500,
                    maxWidth: 480,
                    margin: "18px auto 0",
                    lineHeight: 1.5,
                }}
            >
                free to try, ten seconds to add, works in the chat app you've already got open.
            </p>
            <BrandButton
                size="large"
                stamp="accent"
                style={{ marginTop: 28 }}
                onClick={() =>
                    track("cta_click", {
                        location: "final",
                        action: "add",
                        product: product.name,
                    })
                }
            >
                add {product.name} to {product.platform} →
            </BrandButton>
            <div
                style={{
                    marginTop: 14,
                    fontSize: 13,
                    color: "var(--muted)",
                    fontFamily: "var(--font-mono)",
                }}
            >
                no signup · no app · just forward
            </div>
        </Section>
    );
}
