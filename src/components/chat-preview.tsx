import { useState } from "react";
import { TRANSCRIPT_SAMPLES } from "@/lib/transcripts";
import { SnakeIcon } from "./snake";
import { VoiceWaveform } from "./voice-waveform";

/**
 * the live preview card. clicking a language pill swaps the transcript and
 * tl;dr in place — same conversation shape, different content. messenger
 * theme uses the blue user-bubble; whatsscribe (later) flips to green.
 */
export function ChatPreview({
  app = "messenger",
}: {
  app?: "messenger" | "whatsapp";
}) {
  const [lang, setLang] = useState<string>("Português");
  const sample = TRANSCRIPT_SAMPLES[lang];

  const isWA = app === "whatsapp";
  const userBubbleBg = isWA ? "#d9fdd3" : "#0084ff";
  const userTextColor = isWA ? "#111" : "white";
  const chatBg = isWA ? "#efeae2" : "#f5f7fb";
  const variant = isWA ? "green" : "blue";

  return (
    <div
      style={{
        background: chatBg,
        borderRadius: 22,
        padding: 18,
        border: "1.5px solid var(--ink)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        fontFamily: "system-ui, -apple-system, sans-serif",
        boxShadow: "6px 6px 0 var(--ink)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          paddingBottom: 10,
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <SnakeIcon size={38} variant={variant} />
        <div>
          <div style={{ fontWeight: 600, fontSize: 14, color: "#1a1a1a" }}>
            {isWA ? "whatsscribe" : "messscribe"}
          </div>
          <div style={{ fontSize: 11, color: "#65676b" }}>
            {isWA ? "online" : "Active now"}
          </div>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 11, color: "#65676b" }}>
          ●●●
        </div>
      </div>

      <div style={{ alignSelf: "flex-end", maxWidth: "78%" }}>
        <div
          style={{
            fontSize: 10,
            color: "#65676b",
            textAlign: "right",
            marginBottom: 4,
          }}
        >
          Forwarded · voice · {sample.duration} · {sample.flag}
        </div>
        <div
          style={{
            background: userBubbleBg,
            color: userTextColor,
            borderRadius: 18,
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            minWidth: 190,
            border: isWA ? "1px solid rgba(0,0,0,0.05)" : "none",
          }}
        >
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              background: isWA ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.2)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
            }}
          >
            ▶
          </span>
          <VoiceWaveform
            width={120}
            height={20}
            color={isWA ? "#666" : "white"}
          />
          <span style={{ fontSize: 11 }}>{sample.duration}</span>
        </div>
      </div>

      <div style={{ alignSelf: "flex-start", maxWidth: "88%" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            padding: "12px 14px",
            boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
            fontSize: 13.5,
            color: "#1a1a1a",
            lineHeight: 1.5,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 6,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span>{sample.flag}</span>
            <span>
              {lang} · {sample.confidence}% confidence
            </span>
          </div>
          <div>{sample.text}</div>
        </div>
      </div>

      <div style={{ alignSelf: "flex-start", maxWidth: "88%" }}>
        <div
          style={{
            background: "var(--accent)",
            borderRadius: 18,
            padding: "12px 14px",
            border: "1.5px solid var(--ink)",
            fontSize: 13,
            color: "var(--ink)",
            lineHeight: 1.45,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            tl;dr
          </div>
          <div style={{ fontWeight: 500 }}>{sample.tldr}</div>
        </div>
      </div>

      <div
        style={{
          paddingTop: 6,
          borderTop: "1px dashed rgba(0,0,0,0.12)",
          marginTop: 4,
        }}
      >
        <div
          style={{
            fontSize: 10,
            color: "#65676b",
            marginBottom: 8,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontFamily: "var(--font-mono)",
          }}
        >
          try another language
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {Object.keys(TRANSCRIPT_SAMPLES).map((l) => {
            const active = l === lang;
            return (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                style={{
                  background: active ? "var(--ink)" : "white",
                  color: active ? "white" : "var(--ink)",
                  border: "1px solid var(--ink)",
                  borderRadius: 999,
                  padding: "8px 13px",
                  fontSize: 12.5,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background 160ms ease, color 160ms ease",
                }}
              >
                {TRANSCRIPT_SAMPLES[l].flag} {l}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
