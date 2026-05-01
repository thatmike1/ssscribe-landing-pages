import { BrandLockup } from "./brand-lockup";
import { labelStyle } from "./styles";
import type { ProductConfig } from "./types";

const FOOTER_COLUMNS = [
  ["product", ["how it works", "languages", "pricing", "changelog"]],
  [
    "family",
    ["messscribe (messenger)", "whatsscribe (whatsapp)", "instascribe · maybe"],
  ],
] as const;

export function SiteFooter({ product }: { product: ProductConfig }) {
  const columns = [
    ...FOOTER_COLUMNS,
    ["the rest", ["privacy", "terms", "contact", `@${product.name}`]],
  ] as const;

  return (
    <footer
      style={{
        padding: "var(--pad-y-sm) var(--pad-x) clamp(24px, 4vw, 32px)",
        background: "var(--ink)",
        color: "var(--bg)",
      }}
    >
      <div
        className="footer-grid"
        style={{
          paddingBottom: 28,
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div>
          <div style={{ marginBottom: 12 }}>
            <BrandLockup
              product={product}
              color="var(--bg)"
              iconBg="var(--bg)"
              size={22}
            />
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
            voice notes, readable. made by one person who got too many of them.
          </div>
        </div>
        {columns.map(([heading, items]) => (
          <div key={heading}>
            <div
              style={{
                ...labelStyle,
                fontSize: 10,
                color: "var(--accent)",
                marginBottom: 12,
              }}
            >
              {heading}
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
              {items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 500,
                  }}
                >
                  {item}
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
        <div>© 2026 {product.name} · ssstill hissing</div>
        <div>v3.0</div>
      </div>
    </footer>
  );
}
