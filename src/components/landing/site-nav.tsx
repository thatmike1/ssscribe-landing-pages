import { track } from "@vercel/analytics";
import { SECTION_LINKS } from "@/lib/site";
import { BrandLockup } from "./brand-lockup";
import { BrandLink } from "./primitives";
import { navLinkStyle } from "./styles";
import type { ProductConfig } from "./types";

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
                // opaque, not frosted: the page is flat color and zero-blur
                // offset shadows, and the hard ink border below already
                // separates the nav from whatever scrolls under it.
                background: "var(--bg)",
                borderBottom: "1.5px solid var(--ink)",
            }}
        >
            <BrandLockup product={product} />
            <div className="nav-links">
                {SECTION_LINKS.map(({ label, href }) => (
                    <a key={href} className="nav-link" href={href} style={navLinkStyle}>
                        {label}
                    </a>
                ))}
                <BrandLink
                    size="nav"
                    href={product.botUrl}
                    onClick={() =>
                        track("cta_click", {
                            location: "nav",
                            action: "add",
                            product: product.name,
                        })
                    }
                >
                    <span className="cta-full">add to {product.platform} →</span>
                    <span className="cta-short">add →</span>
                </BrandLink>
            </div>
        </nav>
    );
}
