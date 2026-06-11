import { useEffect, useRef } from "react";

/**
 * ink dot-grid background — zine print texture, not particle confetti.
 *
 * a fixed full-viewport canvas draws a regular grid of faint ink dots.
 * dots near the cursor swell, darken, and get nudged away with a smooth
 * falloff; clicks send an expanding ripple through the grid. dark and
 * yellow sections paint over the canvas, so the texture only shows on
 * the pale paper areas.
 *
 * the rAF loop is demand-driven: it sleeps once the cursor influence and
 * ripples have settled and wakes on pointer activity. reduced-motion (and
 * touch devices, which never fire pointermove) just get the static grid.
 */
export function DotGridBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const SPACING = 26;
        const BASE_RADIUS = 1.1;
        const BASE_ALPHA = 0.1;
        const INFLUENCE = 150; // px around the cursor that reacts
        const MAX_RADIUS = 2.6;
        const MAX_ALPHA = 0.34;
        const MAX_PUSH = 5; // px a dot gets nudged away from the cursor
        const RIPPLE_SPEED = 650; // px/s
        const RIPPLE_WIDTH = 90;
        const RIPPLE_LIFE = 1.6; // seconds

        let width = 0;
        let height = 0;
        let dpr = 1;
        let ink = "10, 24, 64"; // fallback: messscribe ink

        const readInk = () => {
            // resolve --ink to rgb components so we can vary alpha per dot
            const probe = document.createElement("span");
            probe.style.color = "var(--ink)";
            probe.style.display = "none";
            document.body.appendChild(probe);
            const rgb = getComputedStyle(probe).color.match(/\d+/g);
            probe.remove();
            if (rgb && rgb.length >= 3) ink = `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;
        };

        const resize = () => {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const mouse = { x: -9999, y: -9999 };
        type Ripple = { x: number; y: number; born: number };
        let ripples: Ripple[] = [];
        let raf = 0;
        let running = false;

        const smoothstep = (t: number) => t * t * (3 - 2 * t);

        const draw = (now: number) => {
            ctx.clearRect(0, 0, width, height);
            ripples = ripples.filter((r) => (now - r.born) / 1000 < RIPPLE_LIFE);

            let anyInfluence = ripples.length > 0;
            const cols = Math.ceil(width / SPACING) + 1;
            const rows = Math.ceil(height / SPACING) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const gx = i * SPACING + SPACING / 2;
                    const gy = j * SPACING + SPACING / 2;

                    // cursor proximity: 0..1 with smooth falloff
                    const dx = gx - mouse.x;
                    const dy = gy - mouse.y;
                    const dist = Math.hypot(dx, dy);
                    let t = dist < INFLUENCE ? smoothstep(1 - dist / INFLUENCE) : 0;

                    // ripples: a passing ring briefly boosts the dot
                    for (const r of ripples) {
                        const age = (now - r.born) / 1000;
                        const ringR = age * RIPPLE_SPEED;
                        const d = Math.abs(Math.hypot(gx - r.x, gy - r.y) - ringR);
                        if (d < RIPPLE_WIDTH) {
                            const fade = 1 - age / RIPPLE_LIFE;
                            t = Math.max(t, smoothstep(1 - d / RIPPLE_WIDTH) * fade * 0.8);
                        }
                    }

                    if (t > 0.004) anyInfluence = true;

                    let x = gx;
                    let y = gy;
                    if (t > 0 && dist > 0.001) {
                        const push = (t * MAX_PUSH) / dist;
                        x += dx * push;
                        y += dy * push;
                    }

                    const radius = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * t;
                    const alpha = BASE_ALPHA + (MAX_ALPHA - BASE_ALPHA) * t;
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${ink}, ${alpha})`;
                    ctx.fill();
                }
            }
            return anyInfluence;
        };

        // the halo is purely positional, so a still cursor produces an
        // identical frame — sleep then, wake on the next pointer event.
        const lastDrawn = { x: NaN, y: NaN };
        const loop = (now: number) => {
            const moved = lastDrawn.x !== mouse.x || lastDrawn.y !== mouse.y;
            if (ripples.length === 0 && !moved) {
                running = false;
                return;
            }
            lastDrawn.x = mouse.x;
            lastDrawn.y = mouse.y;
            draw(now);
            raf = requestAnimationFrame(loop);
        };

        const wake = () => {
            if (running || reduceMotion) return;
            running = true;
            raf = requestAnimationFrame(loop);
        };

        const onMove = (e: PointerEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            wake();
        };
        const onLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
            wake();
        };
        const onDown = (e: PointerEvent) => {
            if (reduceMotion) return;
            ripples.push({ x: e.clientX, y: e.clientY, born: performance.now() });
            wake();
        };
        const onResize = () => {
            resize();
            if (!running) draw(performance.now());
        };
        const onVisibility = () => {
            if (document.hidden) {
                cancelAnimationFrame(raf);
                running = false;
            } else {
                wake();
            }
        };

        readInk();
        resize();
        draw(performance.now());

        if (!reduceMotion) {
            window.addEventListener("pointermove", onMove, { passive: true });
            window.addEventListener("pointerdown", onDown, { passive: true });
            document.documentElement.addEventListener("pointerleave", onLeave);
            document.addEventListener("visibilitychange", onVisibility);
        }
        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerdown", onDown);
            document.documentElement.removeEventListener("pointerleave", onLeave);
            document.removeEventListener("visibilitychange", onVisibility);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                display: "block",
            }}
        />
    );
}
