import type { CSSProperties } from "react";

export const INK_BORDER = "1.5px solid var(--ink)";

export const SHADOWS = {
  accentStamp: "4px 4px 0 var(--accent)",
  inkStamp: "6px 6px 0 var(--ink)",
} as const;

export const labelStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

export const titleTracking: CSSProperties = {
  fontWeight: 800,
  letterSpacing: "-0.035em",
  lineHeight: 0.95,
};

export const navLinkStyle: CSSProperties = {
  color: "var(--ink)",
  textDecoration: "none",
  cursor: "pointer",
};

export const visuallyConsistentButton: CSSProperties = {
  border: INK_BORDER,
  borderRadius: 999,
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: "inherit",
  transition: "background 160ms ease",
};
