import { BrandLockup } from "./brand-lockup";
import { BrandButton } from "./primitives";
import { navLinkStyle } from "./styles";
import type { ProductConfig } from "./types";

const LINKS = ["how it works", "languages", "pricing"] as const;

export function SiteNav({ product }: { product: ProductConfig }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "18px var(--pad-x)",
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "color-mix(in srgb, var(--bg) 90%, transparent)",
        backdropFilter: "blur(12px)",
        borderBottom: "1.5px solid var(--ink)",
      }}
    >
      <BrandLockup product={product} />
      <div className="nav-links">
        {LINKS.map((link) => (
          <a key={link} style={navLinkStyle}>
            {link}
          </a>
        ))}
        <BrandButton size="nav">
          <span className="cta-full">add to {product.platform} →</span>
          <span className="cta-short">add →</span>
        </BrandButton>
      </div>
    </nav>
  );
}
