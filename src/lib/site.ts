/**
 * every destination the page can send someone to, in one place.
 *
 * the landing is a single scrolling document, so "navigation" is either an
 * in-page anchor or a jump off-site. keeping both here means a dead link is a
 * missing constant, not a missing href buried in a component.
 */

/** canonical origin — the apex 307-redirects here, so this is the real one. */
export const SITE_URL = "https://www.ssscribe.app";

/** public repo. the landing doubles as a portfolio piece, so the source is a destination. */
export const SOURCE_URL = "https://github.com/thatmike1/ssscribe-landing-pages";

export const CONTACT_EMAIL = "misa.psencik@gmail.com";
export const CONTACT_URL = `mailto:${CONTACT_EMAIL}`;

/**
 * ids the nav and footer anchor to. sections opt in by spreading the matching
 * id onto their wrapper, and `scroll-margin-top` in index.css keeps the sticky
 * nav from covering the landing spot.
 */
export const SECTION_IDS = {
    howItWorks: "how-it-works",
    languages: "languages",
    pricing: "pricing",
} as const;

/** the in-page links shared by the nav and the footer's "product" column. */
export const SECTION_LINKS = [
    { label: "how it works", href: `#${SECTION_IDS.howItWorks}` },
    { label: "languages", href: `#${SECTION_IDS.languages}` },
    { label: "pricing", href: `#${SECTION_IDS.pricing}` },
] as const;
