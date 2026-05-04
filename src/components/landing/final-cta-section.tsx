import { track } from "@vercel/analytics";
import { Snake } from "@/components/snake";
import { BrandButton, Eyebrow, Section, SectionHeading } from "./primitives";
import type { ProductConfig } from "./types";

export function FinalCtaSection({ product }: { product: ProductConfig }) {
    return (
        <Section style={{ padding: "var(--pad-y-lg) var(--pad-x)" }}>
            <div
                className="final-cta-card"
                style={{
                    background: "var(--card)",
                    border: "2px solid var(--ink)",
                    borderRadius: 28,
                    boxShadow: "8px 8px 0 var(--accent)",
                    padding: "clamp(36px, 5vw, 56px) clamp(28px, 4vw, 48px)",
                    maxWidth: 1040,
                    margin: "0 auto",
                    position: "relative",
                }}
            >
                <div className="final-cta-grid">
                    <div>
                        <Eyebrow>ten seconds, then done</Eyebrow>
                        <SectionHeading size="cta" style={{ margin: 0 }}>
                            okay,
                            <br />
                            <span style={{ color: "var(--accent)" }}>sssold?</span>
                        </SectionHeading>
                        <p
                            style={{
                                marginTop: 22,
                                fontSize: "clamp(16px, 1.8vw, 19px)",
                                color: "var(--muted)",
                                fontWeight: 500,
                                lineHeight: 1.5,
                                maxWidth: 460,
                            }}
                        >
                            free to try, ten seconds to add, works in the chat app you've already
                            got open.
                        </p>
                        <div
                            style={{
                                marginTop: 28,
                                display: "flex",
                                gap: 14,
                                alignItems: "center",
                                flexWrap: "wrap",
                            }}
                        >
                            <BrandButton
                                size="large"
                                stamp="accent"
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
                            <span
                                style={{
                                    fontSize: 13,
                                    color: "var(--muted)",
                                    fontFamily: "var(--font-mono)",
                                }}
                            >
                                no signup · no app · just forward
                            </span>
                        </div>
                    </div>

                    <div className="final-cta-snake" aria-hidden="true" style={{ flexShrink: 0 }}>
                        <Snake
                            size="clamp(160px, 22vw, 220px)"
                            variant={product.variant}
                            motion="rich"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
