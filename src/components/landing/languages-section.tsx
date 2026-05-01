import { LANGUAGE_PILLS } from "@/lib/transcripts";
import { Eyebrow, Section, SectionHeading, StickerPill } from "./primitives";

export function LanguagesSection() {
  return (
    <Section style={{ padding: "var(--pad-y-md) var(--pad-x) var(--pad-y-sm)" }}>
      <Eyebrow>47 languages · and counting</Eyebrow>
      <SectionHeading style={{ margin: "0 0 28px" }}>
        yes, it hears yoursss.
      </SectionHeading>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {LANGUAGE_PILLS.map((language, index) => (
          <StickerPill
            key={language}
            accent={index === LANGUAGE_PILLS.length - 1}
            className="lang-pill"
            style={{ fontSize: 14 }}
          >
            {language}
          </StickerPill>
        ))}
      </div>
    </Section>
  );
}
