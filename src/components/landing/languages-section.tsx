import { SECTION_IDS } from "@/lib/site";
import { LANGUAGE_PILLS } from "@/lib/transcripts";
import { Eyebrow, Section, SectionHeading, StickerPill } from "./primitives";
import { Reveal } from "./reveal";

/**
 * full-bleed yolk band — the mid-page color beat between the dark
 * storyboard and the pale pricing section. pills sit on yellow, so the
 * accent pill swaps to ink to stay legible.
 */
export function LanguagesSection() {
    return (
        <Section
            id={SECTION_IDS.languages}
            label="supported languages"
            style={{
                padding: "var(--pad-y-md) var(--pad-x)",
                background: "var(--accent-2)",
                borderTop: "2px solid var(--ink)",
                borderBottom: "2px solid var(--ink)",
            }}
        >
            <Reveal>
                <Eyebrow tone="muted" style={{ color: "var(--ink)", opacity: 0.65 }}>
                    47 languages · and counting
                </Eyebrow>
                <SectionHeading style={{ margin: "0 0 28px" }}>
                    yes, it hears yoursss.
                </SectionHeading>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                    {LANGUAGE_PILLS.map((language, index) => {
                        const isLast = index === LANGUAGE_PILLS.length - 1;
                        return (
                            <StickerPill
                                key={language}
                                className="lang-pill"
                                style={{
                                    fontSize: 14,
                                    ...(isLast
                                        ? { background: "var(--ink)", color: "var(--accent-2)" }
                                        : undefined),
                                }}
                            >
                                {language}
                            </StickerPill>
                        );
                    })}
                </div>
            </Reveal>
        </Section>
    );
}
