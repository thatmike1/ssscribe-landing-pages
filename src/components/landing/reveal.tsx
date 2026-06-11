import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

/**
 * fade-and-rise wrapper. adds .is-visible once when the element enters the
 * viewport; css owns the transition. delay staggers siblings. reduced-motion
 * users get an instant transition via the global media-query override.
 */
export function Reveal({
    children,
    delay = 0,
    style,
    className,
}: {
    children: ReactNode;
    delay?: number;
    style?: CSSProperties;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    io.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={["reveal", className].filter(Boolean).join(" ")}
            style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
        >
            {children}
        </div>
    );
}
