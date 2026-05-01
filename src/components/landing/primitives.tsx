import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { INK_BORDER, SHADOWS, labelStyle, titleTracking, visuallyConsistentButton } from "./styles";

type PageShellProps = {
  themeClass: string;
  children: ReactNode;
};

export function PageShell({ themeClass, children }: PageShellProps) {
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
      {children}
    </div>
  );
}

export function Section({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return <section style={style}>{children}</section>;
}

export function Eyebrow({
  children,
  tone = "muted",
  style,
}: {
  children: ReactNode;
  tone?: "muted" | "accent";
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        ...labelStyle,
        color: tone === "accent" ? "var(--accent)" : "var(--muted)",
        marginBottom: 14,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  children,
  size = "section",
  as = "h2",
  style,
}: {
  children: ReactNode;
  size?: "hero" | "section" | "compact" | "cta";
  as?: "h1" | "h2";
  style?: CSSProperties;
}) {
  const fontSize = {
    hero: "clamp(48px, 8vw, 96px)",
    section: "clamp(32px, 5vw, 56px)",
    compact: "clamp(24px, 4vw, 40px)",
    cta: "clamp(40px, 7vw, 72px)",
  }[size];

  const letterSpacing = size === "hero" ? "-0.045em" : size === "cta" ? "-0.04em" : titleTracking.letterSpacing;

  const Tag = as;

  return (
    <Tag
      style={{
        ...titleTracking,
        fontSize,
        letterSpacing,
        margin: 0,
        textWrap: "balance",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  size?: "nav" | "default" | "large";
  stamp?: "accent" | "none";
};

export function BrandButton({
  variant = "primary",
  size = "default",
  stamp = "none",
  style,
  className,
  children,
  ...props
}: ButtonProps) {
  const padding = {
    nav: "10px 18px",
    default: variant === "ghost" ? "17px 22px" : "18px 28px",
    large: "20px 34px",
  }[size];
  const fontSize = { nav: 14, default: variant === "ghost" ? 15 : 17, large: 18 }[size];

  return (
    <button
      type="button"
      className={[variant === "primary" ? "cta-btn" : "ghost-btn", className]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...visuallyConsistentButton,
        background: variant === "primary" ? "var(--accent)" : "transparent",
        color: variant === "primary" ? "#fff" : "var(--ink)",
        fontWeight: variant === "primary" ? 700 : 600,
        padding,
        fontSize,
        boxShadow: stamp === "accent" ? SHADOWS.accentStamp : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export function StickerPill({
  children,
  accent = false,
  className,
  style,
}: {
  children: ReactNode;
  accent?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={className}
      style={{
        background: accent ? "var(--accent)" : "#fff",
        border: INK_BORDER,
        borderRadius: 999,
        color: "var(--ink)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export function CheckMark({
  filled = false,
  color = "var(--accent)",
}: {
  filled?: boolean;
  color?: string;
}) {
  if (!filled) {
    return <span style={{ color, fontWeight: 800 }}>✓</span>;
  }

  return (
    <span
      style={{
        width: 22,
        height: 22,
        background: "var(--accent)",
        borderRadius: 999,
        border: INK_BORDER,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        fontWeight: 800,
        flexShrink: 0,
      }}
    >
      ✓
    </span>
  );
}

export function CheckList({
  items,
  marker = "plain",
  style,
}: {
  items: readonly string[];
  marker?: "plain" | "filled";
  style?: CSSProperties;
}) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: marker === "filled" ? 10 : 8,
        ...style,
      }}
    >
      {items.map((item) => (
        <li
          key={item}
          style={{
            display: "flex",
            alignItems: "center",
            gap: marker === "filled" ? 10 : 8,
          }}
        >
          <CheckMark filled={marker === "filled"} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function StampedCard({
  children,
  tone = "light",
  shadow = "ink",
  style,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  shadow?: "ink" | "none";
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        background: tone === "dark" ? "var(--ink)" : "#fff",
        color: tone === "dark" ? "var(--bg)" : "var(--ink)",
        border: "2px solid var(--ink)",
        borderRadius: 24,
        padding: "40px 32px",
        boxShadow: shadow === "ink" ? SHADOWS.inkStamp : undefined,
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
