import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import MesscribeLanding from "@/pages/messscribe-landing";

/**
 * the whole site. there is exactly one page — navigation is in-page anchors
 * (see `src/lib/site.ts`) — so there is no router. `vercel.json` rewrites every
 * path to `index.html`, which means an unknown url still lands here rather than
 * on vercel's stock 404.
 */
export default function App() {
    return (
        <>
            <MesscribeLanding />
            <Analytics />
            <SpeedInsights />
        </>
    );
}
