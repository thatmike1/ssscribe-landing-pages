import { Eyebrow, Section, SectionHeading } from "./primitives";
import { INK_BORDER, SHADOWS } from "./styles";

const FREE_LINES = [
    ["  20 min audio / mo", "incl."],
    ["  47 languages", "incl."],
    ["  tl;dr summaries", "incl."],
] as const;

const PAID_LINES = [
    ["  priority queue", "incl."],
    ["  no usage cap", "incl."],
    ["  warm fuzzies", "incl."],
] as const;

const TORN_EDGE_CLIP =
    "polygon(0 0, 100% 0, 100% calc(100% - 14px), 96% 100%, 92% calc(100% - 12px), 88% 100%, 84% calc(100% - 12px), 80% 100%, 76% calc(100% - 12px), 72% 100%, 68% calc(100% - 12px), 64% 100%, 60% calc(100% - 12px), 56% 100%, 52% calc(100% - 12px), 48% 100%, 44% calc(100% - 12px), 40% 100%, 36% calc(100% - 12px), 32% 100%, 28% calc(100% - 12px), 24% 100%, 20% calc(100% - 12px), 16% 100%, 12% calc(100% - 12px), 8% 100%, 4% calc(100% - 12px), 0 100%)";

function ReceiptRow({
    label,
    value,
    big = false,
    dim = false,
}: {
    label: string;
    value: string;
    big?: boolean;
    dim?: boolean;
}) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "10px 0",
                borderBottom: "1px dashed rgba(10,24,64,0.18)",
                color: dim ? "var(--muted)" : "var(--ink)",
                fontSize: big ? 17 : 14,
                fontWeight: big ? 700 : 500,
            }}
        >
            <span>{label}</span>
            <span>{value}</span>
        </div>
    );
}

function Receipt() {
    return (
        <div
            style={{
                background: "#fffdf7",
                border: INK_BORDER,
                padding: "28px 28px 36px",
                fontFamily: "var(--font-mono)",
                boxShadow: SHADOWS.inkStamp,
                clipPath: TORN_EDGE_CLIP,
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                }}
            >
                messscribe
            </div>
            <div
                style={{
                    textAlign: "center",
                    fontSize: 10,
                    color: "var(--muted)",
                    marginBottom: 16,
                }}
            >
                order #2026-04 · thanks for forwarding
            </div>

            <div style={{ borderTop: "1px dashed var(--ink)", paddingTop: 14 }}>
                <ReceiptRow label="free tier" value="$0.00" />
                {FREE_LINES.map(([l, r]) => (
                    <ReceiptRow key={l} label={l} value={r} dim />
                ))}
            </div>

            <div
                style={{
                    marginTop: 18,
                    paddingTop: 14,
                    borderTop: "1px dashed var(--ink)",
                }}
            >
                <ReceiptRow label="unlimited" value="$4.00 / mo" big />
                {PAID_LINES.map(([l, r]) => (
                    <ReceiptRow key={l} label={l} value={r} dim />
                ))}
            </div>

            <div
                style={{
                    marginTop: 18,
                    padding: "12px 0",
                    borderTop: "2px solid var(--ink)",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 18,
                    fontWeight: 700,
                }}
            >
                <span>your move</span>
                <span style={{ color: "var(--accent)" }}>$0 — $4</span>
            </div>

            <div
                style={{
                    textAlign: "center",
                    marginTop: 16,
                    fontSize: 10,
                    color: "var(--muted)",
                }}
            >
                * cancel any time · refund mid-month · ssstill cooking
            </div>
        </div>
    );
}

function Commentary() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                paddingTop: 0,
            }}
        >
            <div>
                <div
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(24px, 3vw, 32px)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        marginBottom: 12,
                    }}
                >
                    free is a real plan.
                </div>
                <div
                    style={{
                        fontSize: 15,
                        color: "var(--muted)",
                        lineHeight: 1.55,
                        fontWeight: 500,
                    }}
                >
                    not a 7-day teaser. not a feature ladder. 20 minutes a month covers the average
                    human's voice-note diet for free, forever.
                </div>
            </div>
            <div>
                <div
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(24px, 3vw, 32px)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        marginBottom: 12,
                    }}
                >
                    <span style={{ color: "var(--accent)" }}>$4</span> is the indie price.
                </div>
                <div
                    style={{
                        fontSize: 15,
                        color: "var(--muted)",
                        lineHeight: 1.55,
                        fontWeight: 500,
                    }}
                >
                    built by one person, priced like a sandwich. unlimited because metering it would
                    cost more than running it.
                </div>
            </div>
        </div>
    );
}

export function PricingSection() {
    return (
        <Section style={{ padding: "var(--pad-y-md) var(--pad-x)", textAlign: "center" }}>
            <Eyebrow>pricing · short receipt</Eyebrow>
            <SectionHeading style={{ margin: "0 0 28px" }}>
                two prices. one of them is zero.
            </SectionHeading>
            <div className="pricing-receipt-grid" style={{ textAlign: "left" }}>
                <Receipt />
                <Commentary />
            </div>
        </Section>
    );
}
