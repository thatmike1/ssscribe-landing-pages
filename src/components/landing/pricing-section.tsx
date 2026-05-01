import { CheckList, Eyebrow, Section, SectionHeading, StampedCard } from "./primitives";

const FREE_FEATURES = ["all 47 languages", "tl;dr summaries", "no account needed"] as const;
const PAID_FEATURES = [
  "everything in free",
  "unlimited minutes",
  "priority processing",
  "support a tiny indie dev 🐍",
] as const;

function PricingCard({
  label,
  price,
  suffix,
  description,
  features,
  note,
  tone = "light",
}: {
  label: string;
  price: string;
  suffix?: string;
  description: string;
  features: readonly string[];
  note: string;
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "rgba(255,255,255,0.7)" : "var(--muted)";
  const noteColor = tone === "dark" ? "rgba(255,255,255,0.5)" : "var(--muted)";

  return (
    <StampedCard tone={tone}>
      <Eyebrow
        tone={tone === "dark" ? "accent" : "muted"}
        style={{ marginBottom: 10 }}
      >
        {label}
      </Eyebrow>
      <div
        style={{
          fontSize: 56,
          fontWeight: 800,
          letterSpacing: "-0.035em",
          lineHeight: 1,
        }}
      >
        {price}
        {suffix && (
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              marginLeft: 2,
            }}
          >
            {suffix}
          </span>
        )}
      </div>
      <div style={{ fontSize: 15, color: muted, marginTop: 8, fontWeight: 500 }}>
        {description}
      </div>
      <CheckList
        items={features}
        style={{
          margin: "20px 0 0",
          fontSize: 14,
          fontWeight: 500,
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          lineHeight: 1.5,
          color: noteColor,
          margin: "auto 0 0",
          paddingTop: 20,
        }}
      >
        {note}
      </p>
    </StampedCard>
  );
}

function PricingNote() {
  return (
    <aside className="pricing-note" aria-label="pricing note">
      <svg
        className="pricing-note-arrow"
        width="120"
        height="58"
        viewBox="0 0 120 58"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 110 12 C 82 14, 46 28, 14 44"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 14 44 L 26 38 M 14 44 L 26 52"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="pricing-note-title">ssstill cooking.</span>
      these numbers might shift before launch. final pricing coming sssoon-ish.
    </aside>
  );
}

export function PricingSection() {
  return (
    <Section style={{ padding: "var(--pad-y-md) var(--pad-x)" }}>
      <Eyebrow>pricing</Eyebrow>
      <SectionHeading style={{ margin: "0 0 28px" }}>
        start free. stay free if you're light.
      </SectionHeading>
      <div className="pricing-grid">
        <PricingCard
          label="free forever"
          price="$0"
          description="20 minutes of audio per month."
          features={FREE_FEATURES}
          note="free will always be free. no rugpull, no surprise meter."
        />
        <PricingCard
          label="unlimited"
          price="$4"
          suffix="ish"
          description="transcribe and summarize as much as you want."
          features={PAID_FEATURES}
          note="final price depends on what this actually costs me to run. promise it'll stay sssmall."
          tone="dark"
        />
        <PricingNote />
      </div>
    </Section>
  );
}
