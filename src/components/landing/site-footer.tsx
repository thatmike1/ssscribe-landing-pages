import { CONTACT_URL, SECTION_LINKS, SOURCE_URL } from "@/lib/site";
import { BrandLockup } from "./brand-lockup";
import { labelStyle } from "./styles";
import type { ProductConfig } from "./types";

/**
 * every entry here resolves. the earlier list also named a changelog, privacy
 * and terms pages, and two unbuilt sibling products — none of which exist, so
 * they were cut rather than left as text that looks like a link and isn't.
 */
const FOOTER_COLUMNS = [
    { heading: "product", links: SECTION_LINKS },
    {
        heading: "the rest",
        links: [
            { label: "source on github", href: SOURCE_URL },
            { label: "contact", href: CONTACT_URL },
        ],
    },
] as const;

export function SiteFooter({ product }: { product: ProductConfig }) {
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
                {FOOTER_COLUMNS.map(({ heading, links }) => (
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
                            {links.map(({ label, href }) => {
                                const external = /^https?:/.test(href);
                                return (
                                    <li key={href}>
                                        <a
                                            className="footer-link"
                                            href={href}
                                            {...(external
                                                ? { target: "_blank", rel: "noopener noreferrer" }
                                                : null)}
                                            style={{
                                                fontSize: 13,
                                                color: "rgba(255,255,255,0.8)",
                                                fontWeight: 500,
                                                textDecoration: "none",
                                            }}
                                        >
                                            {label}
                                        </a>
                                    </li>
                                );
                            })}
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
