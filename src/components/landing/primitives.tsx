import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { DotGridBackground } from "./dot-grid-background";
import { INK_BORDER, SHADOWS, labelStyle, titleTracking, visuallyConsistentButton } from "./styles";

type PageShellProps = {
    themeClass: string;
    children: ReactNode;
};

/**
 * the app's outermost element. `themeClass` scopes the theme to this subtree;
 * the same class is authored on <html> in `index.html` so the document ground
 * behind this div — first paint, overscroll gutters — matches. keep the two in
 * sync when adding a product.
 */
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
            {/* fixed canvas behind everything. the stacking wrapper below is
          load-bearing: the canvas is positioned, so without its own layer
          every non-positioned section (preview card, receipt, yolk band,
          footer) would let the dots paint straight through. */}
            <DotGridBackground />
            <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
        </div>
    );
}

/**
 * a page section. `label` names the landmark for assistive tech — a bare
 * <section> is not a region at all without one, so every section that a screen
 * reader should be able to jump to passes it.
 */
export function Section({
    children,
    id,
    label,
    style,
}: {
    children: ReactNode;
    id?: string;
    label?: string;
    style?: CSSProperties;
}) {
    return (
        <section id={id} aria-label={label} style={style}>
            {children}
        </section>
    );
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

    const letterSpacing =
        size === "hero" ? "-0.045em" : size === "cta" ? "-0.04em" : titleTracking.letterSpacing;

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

type BrandSurfaceProps = {
    variant?: "primary" | "ghost";
    size?: "nav" | "default" | "large";
    stamp?: "accent" | "none";
    className?: string;
    style?: CSSProperties;
};

/**
 * the cta's look, independent of the tag that wears it. a cta that navigates
 * has to be an <a> — right-click, middle-click, "copy link" and crawlers all
 * depend on the href — while one that only fires a handler has to stay a
 * <button>. splitting the visuals out keeps the two in lockstep without either
 * component having to lie about what it is.
 */
function brandSurface({
    variant = "primary",
    size = "default",
    stamp = "none",
    className,
    style,
}: BrandSurfaceProps) {
    const padding = {
        nav: "10px 18px",
        default: variant === "ghost" ? "17px 22px" : "18px 28px",
        large: "20px 34px",
    }[size];
    const fontSize = { nav: 14, default: variant === "ghost" ? 15 : 17, large: 18 }[size];

    return {
        className: [variant === "primary" ? "cta-btn" : "ghost-btn", className]
            .filter(Boolean)
            .join(" "),
        style: {
            ...visuallyConsistentButton,
            background: variant === "primary" ? "var(--accent)" : "transparent",
            color: variant === "primary" ? "#fff" : "var(--ink)",
            fontWeight: variant === "primary" ? 700 : 600,
            padding,
            fontSize,
            boxShadow: stamp === "accent" ? SHADOWS.accentStamp : undefined,
            ...style,
        } satisfies CSSProperties,
    };
}

export function BrandButton({
    variant,
    size,
    stamp,
    style,
    className,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & BrandSurfaceProps) {
    return (
        <button
            type="button"
            {...props}
            {...brandSurface({ variant, size, stamp, className, style })}
        >
            {children}
        </button>
    );
}

/** a BrandButton that navigates. external hrefs open in a new tab. */
export function BrandLink({
    variant,
    size,
    stamp,
    style,
    className,
    children,
    href,
    ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & BrandSurfaceProps & { href: string }) {
    const external = /^https?:/.test(href);

    return (
        <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
            {...props}
            {...brandSurface({ variant, size, stamp, className, style })}
        >
            {children}
        </a>
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
