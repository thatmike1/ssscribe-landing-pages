import type { ReactNode } from "react";

/**
 * minimal phone vignette used in the storyboard. fixed 9:11 aspect, notch on
 * top, system-font status bar, and a child slot that fills the screen. not a
 * pixel-perfect ios/android frame on purpose — it's a stage, not a device.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "9 / 11",
        background: "#0a0a0a",
        borderRadius: 26,
        padding: 6,
        boxShadow:
          "0 24px 60px -20px rgba(0,0,0,0.55), 0 0 0 1.5px rgba(255,255,255,0.08) inset",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          width: 60,
          height: 14,
          background: "#000",
          borderRadius: 999,
          zIndex: 2,
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 22,
          overflow: "hidden",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            height: 26,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 14px",
            fontSize: 9,
            fontWeight: 700,
            color: "#1a1a1a",
            background: "transparent",
            flexShrink: 0,
          }}
        >
          <span>9:41</span>
          <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span>●●●</span>
            <span>▮</span>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
