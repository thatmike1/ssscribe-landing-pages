import { Fragment } from "react";

const TOKENS = [
    "47 languagesss",
    "no app. no signup.",
    "forward → transcript",
    "tl;dr included",
    "~3 sssecondsss",
    "made by one indie human",
] as const;

/**
 * full-bleed ticker strip. two identical chunks scroll -50% for a seamless
 * loop (css owns the animation, see .marquee in index.css).
 */
export function Marquee() {
    const chunk = (hidden: boolean) => (
        <div className="marquee-chunk" aria-hidden={hidden || undefined}>
            {TOKENS.map((token) => (
                <Fragment key={token}>
                    <span>{token}</span>
                    <span className="marquee-star">✦</span>
                </Fragment>
            ))}
        </div>
    );

    return (
        <div className="marquee">
            <div className="marquee-track">
                {chunk(false)}
                {chunk(true)}
            </div>
        </div>
    );
}
