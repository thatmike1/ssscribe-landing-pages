import type { CSSProperties } from "react";
import { ChatPreview } from "@/components/chat-preview";
import { Snake, SnakeIcon, SnakeIdle } from "@/components/snake";
import { Storyboard } from "@/components/storyboard";
import { Wordmark } from "@/components/wordmark";
import { LANGUAGE_PILLS } from "@/lib/transcripts";

const APP = {
  app: "messenger" as const,
  name: "messscribe",
  platform: "messenger",
  variant: "blue" as const,
  themeClass: "theme-messscribe",
};

const navLink: CSSProperties = {
  color: "var(--ink)",
  textDecoration: "none",
  cursor: "pointer",
};

const ctaBtn: CSSProperties = {
  background: "var(--ink)",
  color: "#fff",
  border: "none",
  borderRadius: 999,
  padding: "10px 18px",
  fontWeight: 700,
  fontSize: 14,
  cursor: "pointer",
  fontFamily: "inherit",
};

export default function MesscribeLanding() {
  const { app, name, platform, variant, themeClass } = APP;

  return (
    <div
      className={themeClass}
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        minHeight: "100vh",
        fontFamily: "var(--font-display)",
      }}
    >
      {/* nav ─────────────────────────────────────────────── */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 48px",
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "color-mix(in srgb, var(--bg) 90%, transparent)",
          backdropFilter: "blur(12px)",
          borderBottom: "1.5px solid var(--ink)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <SnakeIcon size={36} variant={variant} />
          <Wordmark size={24} name={name} />
        </div>
        <div
          style={{
            display: "flex",
            gap: 28,
            alignItems: "center",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          <a style={navLink}>how it works</a>
          <a style={navLink}>languages</a>
          <a style={navLink}>pricing</a>
          <button type="button" style={ctaBtn}>
            add to {platform} →
          </button>
        </div>
      </nav>

      {/* hero ────────────────────────────────────────────── */}
      <section style={{ padding: "56px 48px 32px", position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 540px",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                border: "1.5px solid var(--ink)",
                borderRadius: 999,
                padding: "6px 14px",
                fontWeight: 600,
                fontSize: 13,
                marginBottom: 24,
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
            </div>

            <h1
              style={{
                fontWeight: 800,
                fontSize: 96,
                lineHeight: 0.92,
                letterSpacing: "-0.045em",
                margin: 0,
                textWrap: "balance",
              }}
            >
              voice notes,
              <br />
              <span style={{ color: "var(--accent)" }}>ssssuddenly</span>
              <br />
              readable.
            </h1>

            <p
              style={{
                marginTop: 26,
                maxWidth: 540,
                fontSize: 20,
                lineHeight: 1.45,
                color: "var(--muted)",
                fontWeight: 500,
              }}
            >
              forward any voice message to our {platform} bot. get a clean
              transcript — plus a tl;dr — in seconds. works in every language,
              not just english.
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
              <button
                type="button"
                style={{
                  ...ctaBtn,
                  padding: "18px 28px",
                  fontSize: 17,
                  boxShadow: "4px 4px 0 var(--accent)",
                }}
              >
                add to {platform} — free →
              </button>
              <button
                type="button"
                style={{
                  background: "transparent",
                  color: "var(--ink)",
                  border: "1.5px solid var(--ink)",
                  borderRadius: 999,
                  padding: "17px 22px",
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                ▶ watch a 20-second demo
              </button>
              <span
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  fontWeight: 500,
                }}
              >
                no sign-up. no app. just forward.
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(6deg)",
            }}
          >
            <SnakeIdle size={540} variant={variant} />
          </div>
        </div>
      </section>

      {/* live preview ─────────────────────────────────────── */}
      <section style={{ padding: "48px 48px 64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 14,
              }}
            >
              live preview · click a flag
            </div>
            <h2
              style={{
                fontSize: 56,
                fontWeight: 800,
                letterSpacing: "-0.035em",
                margin: "0 0 18px",
                lineHeight: 0.95,
              }}
            >
              try it in <span style={{ color: "var(--accent)" }}>your</span>{" "}
              language.
            </h2>
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
              {platform}.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                "auto language detection — no setup",
                "clean text with real punctuation",
                "ai tl;dr for the 6-minute voice notes",
                "honest confidence score on every transcript",
              ].map((t) => (
                <li
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontWeight: 600,
                    fontSize: 14.5,
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      background: "var(--accent)",
                      borderRadius: 999,
                      border: "1.5px solid var(--ink)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <ChatPreview app={app} />
        </div>
      </section>

      {/* storyboard ──────────────────────────────────────── */}
      <Storyboard app={app} name={name} platform={platform} />

      {/* languages ───────────────────────────────────────── */}
      <section style={{ padding: "56px 48px 32px" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: 14,
          }}
        >
          47 languages · and counting
        </div>
        <h2
          style={{
            fontSize: 48,
            fontWeight: 800,
            letterSpacing: "-0.035em",
            margin: "0 0 28px",
            lineHeight: 1,
          }}
        >
          yes, it hears yoursss.
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {LANGUAGE_PILLS.map((l, i) => (
            <span
              key={l}
              style={{
                background:
                  i === LANGUAGE_PILLS.length - 1 ? "var(--accent)" : "#fff",
                border: "1.5px solid var(--ink)",
                borderRadius: 999,
                padding: "9px 14px",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              {l}
            </span>
          ))}
        </div>
      </section>

      {/* pricing ─────────────────────────────────────────── */}
      <section style={{ padding: "56px 48px" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: 14,
          }}
        >
          pricing
        </div>
        <h2
          style={{
            fontSize: 48,
            fontWeight: 800,
            letterSpacing: "-0.035em",
            margin: "0 0 28px",
            lineHeight: 1,
          }}
        >
          start free. stay free if you're light.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "2px solid var(--ink)",
              borderRadius: 24,
              padding: "32px 28px",
              boxShadow: "6px 6px 0 var(--ink)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              free forever
            </div>
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1,
              }}
            >
              $0
            </div>
            <div
              style={{
                fontSize: 15,
                color: "var(--muted)",
                marginTop: 8,
                fontWeight: 500,
              }}
            >
              20 minutes of audio per month.
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "20px 0 0",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {["all 47 languages", "tl;dr summaries", "no account needed"].map(
                (x) => (
                  <li
                    key={x}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <span style={{ color: "var(--accent)", fontWeight: 800 }}>
                      ✓
                    </span>
                    {x}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div
            style={{
              background: "var(--ink)",
              color: "var(--bg)",
              borderRadius: 24,
              padding: "32px 28px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -12,
                right: 20,
                background: "var(--accent-2)",
                border: "1.5px solid var(--bg)",
                borderRadius: 999,
                padding: "4px 10px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "var(--ink)",
              }}
            >
              most chatty families pick this
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              unlimited
            </div>
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1,
              }}
            >
              $4
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                /mo
              </span>
            </div>
            <div
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.7)",
                marginTop: 8,
                fontWeight: 500,
              }}
            >
              transcribe and summarize as much as you want.
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "20px 0 0",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {[
                "everything in free",
                "unlimited minutes",
                "priority processing",
                "support a tiny indie dev 🐍",
              ].map((x) => (
                <li
                  key={x}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <span style={{ color: "var(--accent)", fontWeight: 800 }}>
                    ✓
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* final CTA ───────────────────────────────────────── */}
      <section
        style={{
          padding: "72px 48px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ display: "inline-block", marginBottom: 18 }}>
          <Snake size={140} variant={variant} />
        </div>
        <h2
          style={{
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: "-0.045em",
            margin: 0,
            lineHeight: 0.9,
            textWrap: "balance",
          }}
        >
          okay, sssold?
        </h2>
        <p
          style={{
            fontSize: 19,
            color: "var(--muted)",
            marginTop: 18,
            fontWeight: 500,
            maxWidth: 480,
            margin: "18px auto 0",
          }}
        >
          it's free to try, takes ten seconds to add, and works where you
          already chat.
        </p>
        <button
          type="button"
          style={{
            ...ctaBtn,
            marginTop: 28,
            padding: "20px 34px",
            fontSize: 18,
            boxShadow: "6px 6px 0 var(--accent)",
          }}
        >
          add {name} to {platform} →
        </button>
      </section>

      {/* footer ──────────────────────────────────────────── */}
      <footer
        style={{
          padding: "40px 48px 32px",
          background: "var(--ink)",
          color: "var(--bg)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 40,
            paddingBottom: 28,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <SnakeIcon size={36} variant={variant} bg="var(--bg)" />
              <Wordmark size={22} name={name} color="var(--bg)" />
            </div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.6)",
                fontWeight: 500,
                maxWidth: 280,
                lineHeight: 1.5,
              }}
            >
              voice notes, readable. made by one person who got too many of
              them.
            </div>
          </div>
          {(
            [
              [
                "product",
                ["how it works", "languages", "pricing", "changelog"],
              ],
              [
                "family",
                [
                  "messscribe (messenger)",
                  "whatsscribe (whatsapp)",
                  "instascribe · maybe",
                ],
              ],
              ["the rest", ["privacy", "terms", "contact", `@${name}`]],
            ] as const
          ).map(([h, items]) => (
            <div key={h}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 12,
                }}
              >
                {h}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {items.map((i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.8)",
                      fontWeight: 500,
                    }}
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "rgba(255,255,255,0.5)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <div>© 2026 {name} · ssstill hissing</div>
          <div>v3.0</div>
        </div>
      </footer>
    </div>
  );
}
