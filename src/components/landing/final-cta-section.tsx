import { track } from "@vercel/analytics";
import { Snake } from "@/components/snake";
import { BrandLink, Eyebrow, Section, SectionHeading } from "./primitives";
import { Reveal } from "./reveal";
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
            <Reveal>
                <Eyebrow>ten seconds, then done</Eyebrow>
                {/* the snake IS the first s of "sssold?" — its body is already
                    an s-curve, so it reads as a letter while staying a mascot.
                    sized against the heading's em so it scales with the clamp. */}
                <SectionHeading size="cta">
                    okay,{" "}
                    <span
                        style={{
                            color: "var(--accent)",
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "baseline",
                        }}
                    >
                        <span
                            style={{
                                position: "relative",
                                display: "inline-block",
                                width: "0.72em",
                                height: "1em",
                                margin: "0 0.03em",
                                transform: "translateY(0.12em)",
                            }}
                        >
                            {/* the square svg canvas has transparent side
                                margins; oversizing and centering it makes the
                                drawn snake fill the narrow letter slot. */}
                            <span
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -53%)",
                                    width: "1.32em",
                                    height: "1.32em",
                                }}
                            >
                                <Snake size="100%" variant={product.variant} motion="calm" poke />
                            </span>
                        </span>
                        ssold?
                    </span>
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
                <BrandLink
                    size="large"
                    stamp="accent"
                    href={product.botUrl}
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
                </BrandLink>
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
            </Reveal>
        </Section>
    );
}
