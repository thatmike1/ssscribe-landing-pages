import type { PostHog } from "posthog-js/dist/module.slim.no-external";

/**
 * posthog, deliberately declawed and kept off the critical path.
 *
 * the whole thing is gated on `VITE_POSTHOG_KEY`: with no key set — local dev,
 * a fork, a preview build without the env var — nothing is imported, loaded or
 * sent, and the sdk never enters the main chunk (the `import()` below is the
 * only reference to it, so rollup splits it into its own lazily-fetched file).
 *
 * the config keeps the site cookie-banner-free: memory-only persistence, no
 * session recording, so there is no consent ui to build and nothing to remember
 * between visits.
 */

declare global {
    interface ImportMetaEnv {
        readonly VITE_POSTHOG_KEY?: string;
    }
}

/** eu ingestion host — the project lives in posthog cloud eu. */
const API_HOST = "https://eu.i.posthog.com";

const KEY = import.meta.env.VITE_POSTHOG_KEY?.trim() ?? "";

/**
 * true only when a key was baked into the build. exported so the footer can
 * hide its analytics sentence on a keyless build rather than claim collection
 * that is not happening.
 */
export const analyticsEnabled = KEY.length > 0;

/** set once the lazy chunk has landed and `init` has run. */
let client: PostHog | null = null;

/**
 * sections clicked while the sdk was still in flight. a click on a cta is
 * usually the first interaction on the page, so it can easily beat the chunk;
 * dropping those events would bias the numbers towards slow readers.
 */
let pending: string[] = [];

/** the sdk chunk never loaded (blocked, offline). stop queueing, stay quiet. */
let failed = false;

/**
 * boots posthog and captures the initial `$pageview`.
 *
 * a no-op without a key. with one, the sdk is fetched asynchronously — this
 * returns immediately and never blocks first paint.
 */
export function initAnalytics(): void {
    if (!analyticsEnabled || client) return;

    // the slim build: capture and pageviews, none of the surveys / toolbar /
    // recorder machinery this site does not use. "no-external" means it never
    // injects those extension bundles as external scripts — it still fetches
    // its remote config from eu-assets.i.posthog.com on init. it ships its own
    // types, so the subpath imports directly.
    void import("posthog-js/dist/module.slim.no-external")
        .then(({ default: posthog }) => {
            posthog.init(KEY, {
                api_host: API_HOST,
                capture_pageview: true,
                // no cookies and no localstorage: identity lives for one tab,
                // one visit.
                persistence: "memory",
                disable_session_recording: true,
            });

            client = posthog;
            for (const section of pending) posthog.capture("cta_click", { section });
            pending = [];
        })
        .catch(() => {
            failed = true;
            pending = [];
        });
}

/**
 * records a click on a link that opens the bot. synchronous by contract — it is
 * called from a click handler that is about to navigate away.
 *
 * @param section where on the page the link sits — a `SECTION_IDS` value or a
 * plain literal like `"nav"` / `"hero"` / `"final-cta"`.
 */
export function trackCtaClick(section: string): void {
    if (!analyticsEnabled || failed) return;

    if (client) {
        client.capture("cta_click", { section });
        return;
    }

    pending.push(section);
}
