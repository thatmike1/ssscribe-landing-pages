import { SECTION_IDS } from "@/lib/site";
import { SnakeIcon } from "./snake";
import { VoiceWaveform } from "./voice-waveform";

type App = "messenger" | "whatsapp";

/* mockup type scales *up* as the viewport narrows: the three cards stack below 768px, so a phone
 * has width the desktop three-up layout does not. each ramp hits its legibility floor at 390px and
 * its original desktop size at 1024px, so wide viewports look unchanged. */
const MOCK_TEXT = "clamp(9px, 12.23px - 0.315vw, 11px)"; // bubble text, chips, transcript lines
const MOCK_META = "clamp(8px, 12.85px - 0.473vw, 11px)"; // "typing…", detected-language line
const MOCK_LABEL = "clamp(7px, 11.85px - 0.473vw, 10px)"; // uppercase micro-eyebrows
const MOCK_GLYPH = "clamp(7px, 10.23px - 0.315vw, 9px)"; // ▶ inside the play dot

export function Storyboard({ app, name }: { app: App; name: string }) {
    const isWA = app === "whatsapp";
    const userBubble = isWA ? "#d9fdd3" : "#0084ff";
    const userText = isWA ? "#111" : "white";
    const waveColor = isWA ? "#666" : "white";
    const variant = isWA ? "green" : "blue";

    return (
        <section
            id={SECTION_IDS.howItWorks}
            style={{
                padding: "var(--pad-y-sm) var(--pad-x)",
                background: "var(--ink)",
                color: "var(--bg)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div style={{ marginBottom: "clamp(16px, 3vw, 28px)" }}>
                <div
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        marginBottom: 8,
                    }}
                >
                    how it worksss · 8 seconds
                </div>
                <h2
                    style={{
                        fontSize: "clamp(24px, 4vw, 40px)",
                        fontWeight: 800,
                        letterSpacing: "-0.04em",
                        margin: 0,
                        lineHeight: 1,
                    }}
                >
                    forward. wait. <span style={{ color: "var(--accent)" }}>read.</span>
                </h2>
            </div>
            <div className="story-grid">
                <div className="story-block">
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                        <span
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: 11,
                                color: "var(--accent)",
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                            }}
                        >
                            01
                        </span>
                        <h3
                            style={{
                                fontSize: 22,
                                fontWeight: 800,
                                letterSpacing: "-0.03em",
                                margin: 0,
                            }}
                        >
                            forward
                        </h3>
                    </div>
                    <div
                        style={{
                            background: "rgba(255,255,255,0.06)",
                            borderRadius: 12,
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 6,
                        }}
                    >
                        <div style={{ alignSelf: "flex-end", maxWidth: "85%" }}>
                            <div
                                style={{
                                    background: userBubble,
                                    color: userText,
                                    borderRadius: 12,
                                    padding: "6px 8px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 5,
                                    fontSize: MOCK_TEXT,
                                }}
                            >
                                <span
                                    style={{
                                        width: 14,
                                        height: 14,
                                        borderRadius: 999,
                                        background: isWA
                                            ? "rgba(0,0,0,0.1)"
                                            : "rgba(255,255,255,0.25)",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: MOCK_GLYPH,
                                    }}
                                >
                                    ▶
                                </span>
                                <VoiceWaveform width={45} height={8} bars={10} color={waveColor} />
                                <span>0:34</span>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: 4,
                                fontSize: MOCK_TEXT,
                                fontWeight: 600,
                            }}
                        >
                            <span
                                style={{
                                    background: "var(--accent)",
                                    color: "var(--ink)",
                                    borderRadius: 6,
                                    padding: "3px 8px",
                                }}
                            >
                                forward →
                            </span>
                            <span
                                style={{
                                    background: "rgba(255,255,255,0.1)",
                                    color: "rgba(255,255,255,0.7)",
                                    borderRadius: 6,
                                    padding: "3px 8px",
                                }}
                            >
                                reply
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            fontSize: 13,
                            color: "rgba(255,255,255,0.65)",
                            lineHeight: 1.5,
                        }}
                    >
                        long-press any voice note, hit forward, pick {name}.
                    </div>
                </div>
                <div className="story-block">
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                        <span
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: 11,
                                color: "var(--accent)",
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                            }}
                        >
                            02
                        </span>
                        <h3
                            style={{
                                fontSize: 22,
                                fontWeight: 800,
                                letterSpacing: "-0.03em",
                                margin: 0,
                            }}
                        >
                            wait
                        </h3>
                    </div>
                    <div
                        style={{
                            background: "rgba(255,255,255,0.06)",
                            borderRadius: 12,
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 6,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                paddingBottom: 5,
                                borderBottom: "1px solid rgba(255,255,255,0.08)",
                            }}
                        >
                            <SnakeIcon size={18} variant={variant} />
                            <span style={{ fontSize: MOCK_TEXT, fontWeight: 700, color: "#fff" }}>
                                {name}
                            </span>
                            <span
                                style={{
                                    marginLeft: "auto",
                                    fontSize: MOCK_META,
                                    color: "rgba(255,255,255,0.6)",
                                    fontFamily: "var(--font-mono)",
                                }}
                            >
                                typing…
                            </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                            {[0, 0.15, 0.3].map((d) => (
                                <span
                                    key={d}
                                    style={{
                                        width: 5,
                                        height: 5,
                                        borderRadius: 999,
                                        background: "var(--accent)",
                                        animation: `typing-dot 1.2s ease-in-out ${d}s infinite`,
                                    }}
                                />
                            ))}
                        </div>
                        <div
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: MOCK_META,
                                color: "var(--accent)",
                                letterSpacing: "0.05em",
                            }}
                        >
                            detected · pt-BR · 99%
                        </div>
                    </div>
                    <div
                        style={{
                            fontSize: 13,
                            color: "rgba(255,255,255,0.65)",
                            lineHeight: 1.5,
                        }}
                    >
                        auto-detects 47+ languages. about 3 seconds.
                    </div>
                </div>
                <div className="story-block">
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                        <span
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: 11,
                                color: "var(--accent)",
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                            }}
                        >
                            03
                        </span>
                        <h3
                            style={{
                                fontSize: 22,
                                fontWeight: 800,
                                letterSpacing: "-0.03em",
                                margin: 0,
                            }}
                        >
                            read
                        </h3>
                    </div>
                    <div
                        style={{
                            background: "rgba(255,255,255,0.06)",
                            borderRadius: 12,
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 5,
                        }}
                    >
                        <div
                            style={{
                                background: "rgba(255,255,255,0.9)",
                                borderRadius: 10,
                                padding: "8px 9px",
                                fontSize: MOCK_TEXT,
                                color: "#1a1a1a",
                                lineHeight: 1.4,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: MOCK_LABEL,
                                    fontWeight: 800,
                                    color: "var(--ink)",
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    marginBottom: 2,
                                }}
                            >
                                🇧🇷 Português
                            </div>
                            <div>oi! só pra te avisar que o voo atrasou uma hora…</div>
                        </div>
                        <div
                            style={{
                                background: "var(--accent)",
                                borderRadius: 10,
                                padding: "8px 9px",
                                fontSize: MOCK_TEXT,
                                color: "var(--ink)",
                                lineHeight: 1.35,
                                border: "1.5px solid var(--ink)",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: MOCK_LABEL,
                                    fontWeight: 800,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    marginBottom: 2,
                                }}
                            >
                                tl;dr
                            </div>
                            <div style={{ fontWeight: 600 }}>
                                flight delayed an hour — arriving ~9:30.
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            fontSize: 13,
                            color: "rgba(255,255,255,0.65)",
                            lineHeight: 1.5,
                        }}
                    >
                        clean transcript plus a tl;dr. tap to translate.
                    </div>
                </div>
            </div>
        </section>
    );
}
