import { useEffect, useRef } from "react";
import gsap from "gsap";
import { track } from "@vercel/analytics";
import { trackCtaClick } from "@/lib/analytics";
import { SnakeIdle } from "@/components/snake";
import { BrandLink, Section, SectionHeading, StickerPill } from "./primitives";
import type { ProductConfig } from "./types";

export function HeroSection({ product }: { product: ProductConfig }) {
    const copyRef = useRef<HTMLDivElement>(null);
    const artRef = useRef<HTMLDivElement>(null);

    // entrance — copy stack rises in sequence, snake pops onto its sticker.
    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;
        const tweens: gsap.core.Tween[] = [];
        if (copyRef.current) {
            tweens.push(
                gsap.from(copyRef.current.children, {
                    opacity: 0,
                    y: 26,
                    duration: 0.7,
                    ease: "power3.out",
                    stagger: 0.09,
                    // never "all" — these components style via inline styles,
                    // and clearProps:"all" wipes the whole style attribute.
                    clearProps: "opacity,transform",
                }),
            );
        }
        if (artRef.current) {
            tweens.push(
                gsap.from(artRef.current, {
                    opacity: 0,
                    scale: 0.55,
                    rotation: -10,
                    duration: 0.9,
                    delay: 0.2,
                    ease: "back.out(1.6)",
                    transformOrigin: "50% 60%",
                    clearProps: "opacity,transform",
                }),
            );
        }
        return () => tweens.forEach((t) => t.kill());
    }, []);

    return (
        <Section
            style={{
                padding: "var(--pad-y-md) var(--pad-x) var(--pad-y-md)",
                position: "relative",
            }}
        >
            <div className="hero-grid">
                <div ref={copyRef}>
                    <StickerPill
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "6px 14px",
                            fontWeight: 600,
                            fontSize: 13,
                            marginBottom: 24,
                            background: "var(--accent-2)",
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
                        <span style={{ color: "var(--accent)" }}>sssuddenly</span>
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
                        forward any voice message to our {product.platform} bot. get a clean
                        transcript — plus a tl;dr — in seconds. works in every language, not just
                        english.
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
                        <BrandLink
                            stamp="accent"
                            href={product.botUrl}
                            onClick={() => {
                                trackCtaClick("hero");
                                track("cta_click", {
                                    location: "hero",
                                    action: "add",
                                    product: product.name,
                                });
                            }}
                        >
                            add to {product.platform} — free →
                        </BrandLink>
                        <span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 500 }}>
                            no sign-up. no app. just forward.
                        </span>
                    </div>
                </div>

                <div
                    ref={artRef}
                    style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {/* the yolk is a real square box in flow, not an absolute
              overlay — it owns the column's height so the circle and its
              ink shadow can never bleed onto the cta row or the marquee.
              snake and sticker are absolute *inside* it, so every piece
              of the composition scales off one base. */}
                    <div
                        style={{
                            position: "relative",
                            width: "min(82%, 500px)",
                            aspectRatio: "1",
                        }}
                    >
                        {/* yolk sticker grounds the snake on the page instead of
                  letting it float in the wash. plain circle — the snake
                  is the shape. */}
                        <div
                            aria-hidden
                            style={{
                                position: "absolute",
                                inset: 0,
                                borderRadius: "50%",
                                background: "var(--accent-2)",
                                border: "2px solid var(--ink)",
                                boxShadow: "12px 12px 0 var(--ink)",
                            }}
                        />
                        {/* 112% of the yolk — the overhang that reads as intentional
                  at 1440, now held constant at every width. */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transform: "rotate(6deg)",
                            }}
                        >
                            <SnakeIdle size="112%" variant={product.variant} />
                        </div>
                        {/* the label sits inside the snake's hit box, so without
                  pointer-events:none it swallows the very click it advertises. */}
                        <StickerPill
                            style={{
                                position: "absolute",
                                bottom: "6%",
                                right: "10%",
                                padding: "5px 12px",
                                fontFamily: "var(--font-mono)",
                                fontSize: 11,
                                fontWeight: 700,
                                transform: "rotate(-6deg)",
                                boxShadow: "3px 3px 0 var(--ink)",
                                pointerEvents: "none",
                            }}
                        >
                            psst — poke me
                        </StickerPill>
                    </div>
                </div>
            </div>
        </Section>
    );
}
