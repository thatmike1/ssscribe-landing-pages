import { ChatPreview } from "@/components/chat-preview";
import { CheckList, Eyebrow, Section, SectionHeading } from "./primitives";
import type { ProductConfig } from "./types";

const PREVIEW_BULLETS = [
  "auto language detection — no setup",
  "clean text with real punctuation",
  "ai tl;dr for the 6-minute voice notes",
  "honest confidence score on every transcript",
] as const;

export function LivePreviewSection({ product }: { product: ProductConfig }) {
  return (
    <Section style={{ padding: "var(--pad-y-md) var(--pad-x) var(--pad-y-lg)" }}>
      <div className="preview-grid">
        <div>
          <Eyebrow>live preview · click a flag</Eyebrow>
          <SectionHeading
            style={{ margin: "0 0 18px", fontSize: "clamp(32px, 6vw, 56px)" }}
          >
            try it in <span style={{ color: "var(--accent)" }}>your</span>{" "}
            language.
          </SectionHeading>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 17,
              lineHeight: 1.5,
              margin: "0 0 16px",
              fontWeight: 500,
            }}
          >
            pick any flag below and the conversation updates live — voice note
            in, transcript plus tl;dr out. exactly how it works inside{" "}
            {product.platform}.
          </p>
          <CheckList
            items={PREVIEW_BULLETS}
            marker="filled"
            style={{ fontWeight: 600, fontSize: 14.5 }}
          />
        </div>
        <ChatPreview app={product.app} />
      </div>
    </Section>
  );
}
