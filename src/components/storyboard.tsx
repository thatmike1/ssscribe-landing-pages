import type { ReactNode } from "react";
import { PhoneFrame } from "./phone-frame";
import { SnakeIcon, SnakeThinking } from "./snake";
import { VoiceWaveform } from "./voice-waveform";

type App = "messenger" | "whatsapp";

/**
 * caption block under each storyboard frame. number eyebrow + big step heading
 * + body. matched 1:1 to the design source's StepCaption.
 */
function StepCaption({
  n,
  h,
  children,
}: {
  n: string;
  h: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 12,
          marginBottom: 8,
          paddingBottom: 10,
          borderBottom: "1px solid rgba(255,255,255,0.14)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--accent)",
            letterSpacing: "0.06em",
            fontWeight: 700,
          }}
        >
          {n}
        </div>
        <div
          style={{
            fontSize: 38,
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1,
          }}
        >
          {h}
        </div>
      </div>
      <div
        style={{
          fontSize: 14,
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.55,
          fontWeight: 500,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function Storyboard({
  app,
  name,
  platform,
}: {
  app: App;
  name: string;
  platform: string;
}) {
  const isWA = app === "whatsapp";
  const userBubble = isWA ? "#d9fdd3" : "#0084ff";
  const userText = isWA ? "#111" : "white";
  const chatBg = isWA ? "#efeae2" : "#f5f7fb";
  const waveColor = isWA ? "#666" : "white";
  const variant = isWA ? "green" : "blue";

  return (
    <section
      style={{
        padding: "var(--pad-y-lg) var(--pad-x)",
        background: "var(--ink)",
        color: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "clamp(36px, 6vw, 56px)",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 14,
            }}
          >
            how it worksss · 8 seconds end-to-end
          </div>
          <h2
            style={{
              fontSize: "clamp(40px, 7vw, 72px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              margin: 0,
              lineHeight: 0.95,
            }}
          >
            forward.
            <br />
            wait.
            <br />
            <span style={{ color: "var(--accent)" }}>read.</span>
          </h2>
        </div>
        <div
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.55)",
            fontWeight: 500,
            maxWidth: 220,
            lineHeight: 1.55,
            fontFamily: "var(--font-mono)",
          }}
        >
          ↓ a real conversation, frame-by-frame.
        </div>
      </div>

      <div style={{ position: "relative" }}>
        {/* dashed connector running through the rail (desktop only) */}
        <div
          className="story-connector"
          style={{
            position: "absolute",
            left: "8%",
            right: "8%",
            top: 280,
            height: 2,
            background: "rgba(255,255,255,0.12)",
            borderTop: "2px dashed rgba(255,255,255,0.22)",
            zIndex: 0,
          }}
        />

        <div className="story-rail">
          {/* ── 01 — long-press menu ───────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <PhoneFrame className="phone-cap">
              <div
                style={{
                  background: chatBg,
                  flex: 1,
                  padding: "14px 10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    alignSelf: "flex-end",
                    maxWidth: "78%",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      background: userBubble,
                      color: userText,
                      borderRadius: 14,
                      padding: "8px 10px",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      boxShadow:
                        "0 0 0 3px var(--accent), 0 4px 14px rgba(0,0,0,0.25)",
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 999,
                        background: isWA
                          ? "rgba(0,0,0,0.1)"
                          : "rgba(255,255,255,0.25)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 9,
                      }}
                    >
                      ▶
                    </span>
                    <VoiceWaveform
                      width={80}
                      height={14}
                      bars={15}
                      color={waveColor}
                    />
                    <span style={{ fontSize: 9 }}>0:34</span>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: -10,
                      right: -8,
                      background: "var(--accent)",
                      color: "var(--ink)",
                      fontSize: 9,
                      fontWeight: 800,
                      padding: "2px 7px",
                      borderRadius: 999,
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    hold ↓
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    background: "#fff",
                    borderRadius: 14,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                    overflow: "hidden",
                    fontSize: 11,
                  }}
                >
                  {[
                    { l: "Reply", icon: "↩", highlight: false },
                    { l: "Forward", icon: "➜", highlight: true },
                    { l: "Save", icon: "↓", highlight: false },
                    { l: "Delete", icon: "×", highlight: false },
                  ].map((row) => (
                    <div
                      key={row.l}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "9px 12px",
                        background: row.highlight ? "var(--accent)" : "#fff",
                        color: row.highlight ? "var(--ink)" : "#1a1a1a",
                        fontWeight: row.highlight ? 700 : 500,
                        borderBottom: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <span>{row.l}</span>
                      <span style={{ fontFamily: "monospace" }}>
                        {row.icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </PhoneFrame>

            <StepCaption n="01" h="forward">
              long-press any voice note in {platform}, hit forward, pick {name}.
            </StepCaption>
          </div>

          {/* ── 02 — bot receives, snake "thinks" ──────────────────── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              position: "relative",
            }}
          >
            <PhoneFrame className="phone-cap">
              <div
                style={{
                  background: chatBg,
                  flex: 1,
                  padding: "14px 10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <SnakeIcon size={26} variant={variant} />
                  <div
                    style={{ fontSize: 11, fontWeight: 700, color: "#1a1a1a" }}
                  >
                    {name}
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      fontSize: 9,
                      color: "#65676b",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    typing…
                  </div>
                </div>

                <div style={{ alignSelf: "flex-end", maxWidth: "78%" }}>
                  <div
                    style={{
                      fontSize: 8,
                      color: "#65676b",
                      textAlign: "right",
                      marginBottom: 2,
                    }}
                  >
                    Forwarded · 0:34 · 🇧🇷
                  </div>
                  <div
                    style={{
                      background: userBubble,
                      color: userText,
                      borderRadius: 14,
                      padding: "7px 10px",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 999,
                        background: isWA
                          ? "rgba(0,0,0,0.1)"
                          : "rgba(255,255,255,0.25)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 8,
                      }}
                    >
                      ▶
                    </span>
                    <VoiceWaveform
                      width={70}
                      height={12}
                      bars={15}
                      color={waveColor}
                    />
                  </div>
                </div>

                <div style={{ alignSelf: "flex-start" }}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 14,
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                    }}
                  >
                    {[0, 0.15, 0.3].map((d) => (
                      <span
                        key={d}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 999,
                          background: "var(--accent)",
                          animation: `typing-dot 1.2s ease-in-out ${d}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    alignSelf: "flex-start",
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    background: "#1a1a1a",
                    color: "var(--accent)",
                    padding: "4px 8px",
                    borderRadius: 999,
                    letterSpacing: "0.05em",
                  }}
                >
                  detected · pt-BR · 99%
                </div>
              </div>
            </PhoneFrame>

            <div
              className="story-thinking-peek"
              style={{
                position: "absolute",
                top: -34,
                right: -52,
                zIndex: 2,
                transform: "rotate(8deg)",
                pointerEvents: "none",
              }}
            >
              <SnakeThinking size={150} variant={variant} />
            </div>

            <StepCaption n="02" h="wait">
              we auto-detect the language. no menus, no picking. about 3
              seconds.
            </StepCaption>
          </div>

          {/* ── 03 — transcript arrives ────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <PhoneFrame className="phone-cap">
              <div
                style={{
                  background: chatBg,
                  flex: 1,
                  padding: "14px 10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <div style={{ alignSelf: "flex-start", maxWidth: "92%" }}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 14,
                      padding: "10px 12px",
                      fontSize: 10.5,
                      color: "#1a1a1a",
                      lineHeight: 1.45,
                      boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 8,
                        fontWeight: 800,
                        color: "var(--ink)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      🇧🇷 Português · 99%
                    </div>
                    <div>
                      oi! só pra te avisar que o voo atrasou uma hora, então vou
                      chegar tipo nove e meia…
                    </div>
                  </div>
                </div>

                <div style={{ alignSelf: "flex-start", maxWidth: "92%" }}>
                  <div
                    style={{
                      background: "var(--accent)",
                      borderRadius: 14,
                      padding: "10px 12px",
                      fontSize: 10.5,
                      color: "var(--ink)",
                      lineHeight: 1.4,
                      border: "1.5px solid var(--ink)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 8,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 3,
                      }}
                    >
                      tl;dr
                    </div>
                    <div style={{ fontWeight: 600 }}>
                      flight delayed an hour — arriving ~9:30. eat without them.
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 4,
                  }}
                >
                  {["translate →", "copy", "shorter"].map((c) => (
                    <span
                      key={c}
                      style={{
                        fontSize: 9,
                        fontWeight: 600,
                        background: "#fff",
                        border: "1px solid rgba(0,0,0,0.15)",
                        borderRadius: 999,
                        padding: "3px 8px",
                        color: "#1a1a1a",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </PhoneFrame>

            <StepCaption n="03" h="read">
              clean transcript, plus a tl;dr for the long ones. tap to
              translate.
            </StepCaption>
          </div>
        </div>
      </div>
    </section>
  );
}
