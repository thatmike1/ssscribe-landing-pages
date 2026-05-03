/**
 * snake mascot.
 *
 * blue is now an inline SVG (src/assets/snake-blue.svg) so GSAP can target
 * individual paths — body, eyes, tongue. green still falls back to the PNG
 * until a green vector lands. the motion system is shared:
 *
 *   "rich"    — hero: breathe + sway + blink + tongue flick + cursor tracking
 *   "calm"    — final cta: breathe only, no eye work, no cursor
 *   "static"  — chips and icons: no motion at all
 *
 * reduced-motion users always get the static variant regardless of level.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import snakeBlueSvgRaw from "@/assets/snake-blue.svg?raw";

type Variant = "blue" | "green";
type Size = number | string;
type MotionLevel = "rich" | "calm" | "static";

// only green is still rasterized; blue inlines the svg below.
const GREEN_PNG = "/snake-green.png";

/**
 * the artwork itself. for blue we inject the raw svg so the dom is queryable;
 * for green we render the legacy png. wrapper div sizes the surface; the
 * svg-host class (defined in index.css) stretches the inner <svg> to fill.
 */
function SnakeArt({
  size,
  variant,
  hostRef,
}: {
  size: Size;
  variant: Variant;
  hostRef?: React.Ref<HTMLDivElement>;
}) {
  const baseStyle: React.CSSProperties = {
    width: size,
    height: size,
    display: "block",
    userSelect: "none",
    pointerEvents: "none",
  };

  if (variant === "blue") {
    return (
      <div
        ref={hostRef}
        aria-hidden
        className="snake-svg-host"
        style={baseStyle}
        dangerouslySetInnerHTML={{ __html: snakeBlueSvgRaw }}
      />
    );
  }

  return (
    <img
      src={GREEN_PNG}
      alt=""
      draggable={false}
      style={{ ...baseStyle, objectFit: "contain" }}
    />
  );
}

/**
 * timeline-driven idle motion. the snake breathes on its inner layer, sways
 * on the middle layer, and (for "rich") tilts toward the cursor on the outer
 * layer. three layers because gsap composes one transform per element — two
 * independent rotations on the same node would clobber each other.
 *
 * intersectionobserver pauses the timelines when the snake is offscreen;
 * visibilitychange pauses when the tab is hidden. both prevent the
 * battery-eating "animation runs in a backgrounded tab forever" problem.
 */
function useSnakeMotion(level: MotionLevel) {
  const tiltRef = useRef<HTMLDivElement>(null);
  const swayRef = useRef<HTMLDivElement>(null);
  const breatheRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (level === "static") return;
    const tilt = tiltRef.current;
    const sway = swayRef.current;
    const breathe = breatheRef.current;
    if (!tilt || !sway || !breathe) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    // own every tween we create so cleanup is mechanical: kill the list,
    // remove the listeners. no gsap.context magic, no conditional-return
    // edge cases — strictmode double-mount stays clean.
    const tweens: gsap.core.Tween[] = [];
    const animatedTargets: (Element | NodeListOf<Element>)[] = [];
    const cleanups: Array<() => void> = [];

    // breathe — subtle inhale/exhale on the body.
    tweens.push(
      gsap.to(breathe, {
        scaleY: 0.985,
        scaleX: 1.015,
        duration: 2.0,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "50% 70%",
      }),
    );
    animatedTargets.push(breathe);

    // sway — out-of-phase rotation so the eye doesn't pattern-match the two
    // body motions into one heavy pulse.
    tweens.push(
      gsap.fromTo(
        sway,
        { rotation: -1 },
        {
          rotation: 1,
          duration: 2.7,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          transformOrigin: "50% 90%",
        },
      ),
    );
    animatedTargets.push(sway);

    if (level === "rich") {
      const svg = breathe.querySelector("svg");
      if (svg) {
        const pupils = Array.from(
          svg.querySelectorAll<SVGPathElement>('path[fill="#FFFEFE"]'),
        );
        const tongue = svg.querySelector<SVGPathElement>(
          'path[fill="#EF6563"]',
        );

        // svg paths have no css layout box, so gsap's default
        // transform-origin (top-left of svg canvas) sends scaleY-driven
        // blinks and scale-driven flicks across the snake. computing each
        // path's center via getBBox() and pinning it as svgOrigin tells
        // gsap to pivot in svg user units around the path's own visual
        // middle. this is the svg-native equivalent of fill-box origin.
        const setSvgOrigin = (el: SVGPathElement) => {
          const b = el.getBBox();
          gsap.set(el, {
            svgOrigin: `${b.x + b.width / 2} ${b.y + b.height / 2}`,
          });
          return b;
        };

        // blink — fast scaleY collapse and recovery, randomized 4-9s gap.
        let blinkAlive = true;
        if (pupils.length) {
          pupils.forEach(setSvgOrigin);
          const scheduleBlink = () => {
            if (!blinkAlive) return;
            const delay = 4 + Math.random() * 5;
            tweens.push(
              gsap.to(pupils, {
                scaleY: 0.06,
                duration: 0.07,
                ease: "power2.in",
                delay,
                onComplete: () => {
                  if (!blinkAlive) return;
                  tweens.push(
                    gsap.to(pupils, {
                      scaleY: 1,
                      duration: 0.12,
                      ease: "power2.out",
                      onComplete: scheduleBlink,
                    }),
                  );
                },
              }),
            );
          };
          scheduleBlink();
          animatedTargets.push(...pupils);
          cleanups.push(() => {
            blinkAlive = false;
          });
        }

        // tongue flick — quick punch out, slow return, randomized 5-9s gap.
        let flickAlive = true;
        let tongueBox: DOMRect | null = null;
        if (tongue) {
          tongueBox = setSvgOrigin(tongue);
          const scheduleFlick = () => {
            if (!flickAlive) return;
            const delay = 5 + Math.random() * 4;
            tweens.push(
              gsap.to(tongue, {
                scale: 1.18,
                duration: 0.14,
                ease: "power3.out",
                delay,
                onComplete: () => {
                  if (!flickAlive) return;
                  tweens.push(
                    gsap.to(tongue, {
                      scale: 1,
                      duration: 0.32,
                      ease: "sine.inOut",
                      onComplete: scheduleFlick,
                    }),
                  );
                },
              }),
            );
          };
          scheduleFlick();
          animatedTargets.push(tongue);
          cleanups.push(() => {
            flickAlive = false;
          });
        }
        // suppress unused-var lint until we wire tongueBox into a hover beat.
        void tongueBox;

        // pupil cursor-tracking. xPercent on svg paths is unreliable
        // because gsap can't measure a path's "100% width" via the css
        // layout box. instead we shift in absolute svg user units sized
        // from each pupil's actual bbox width. quickTo binds to a single
        // setter; we apply per-pupil but use the same fraction so both
        // eyes look the same direction.
        let pupilShiftMaxX = 0;
        let pupilShiftMaxY = 0;
        const pupilSetters = pupils.map((p) => {
          const b = p.getBBox();
          // each pupil shifts up to ~30% of its own width in user units;
          // a small pupil (~11 user-units wide) → ±3.3 user-units. visible
          // but never escapes the eye-white surround.
          pupilShiftMaxX = Math.max(pupilShiftMaxX, b.width * 0.3);
          pupilShiftMaxY = Math.max(pupilShiftMaxY, b.height * 0.3);
          return {
            x: gsap.quickTo(p, "x", { duration: 0.45, ease: "power3.out" }),
            y: gsap.quickTo(p, "y", { duration: 0.45, ease: "power3.out" }),
          };
        });

        // body-level cursor tracking — head rotation + lean on the html
        // wrapper, where gsap's standard transform pipeline works fine.
        const tiltRot = gsap.quickTo(tilt, "rotation", {
          duration: 0.55,
          ease: "power3.out",
        });
        const tiltLeanX = gsap.quickTo(tilt, "x", {
          duration: 0.7,
          ease: "power3.out",
        });
        const tiltLeanY = gsap.quickTo(tilt, "y", {
          duration: 0.7,
          ease: "power3.out",
        });
        animatedTargets.push(tilt);

        let rect = tilt.getBoundingClientRect();
        const recomputeRect = () => {
          rect = tilt.getBoundingClientRect();
        };

        const clamp = (v: number) => Math.max(-1, Math.min(1, v));
        const onMove = (e: MouseEvent) => {
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = clamp(((e.clientX - cx) / window.innerWidth) * 2);
          const dy = clamp(((e.clientY - cy) / window.innerHeight) * 2);
          tiltRot(dx * 8);
          tiltLeanX(dx * 18);
          tiltLeanY(dy * 12);
          for (const s of pupilSetters) {
            s.x(dx * pupilShiftMaxX);
            s.y(dy * pupilShiftMaxY);
          }
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("scroll", recomputeRect, { passive: true });
        window.addEventListener("resize", recomputeRect);
        cleanups.push(() => {
          window.removeEventListener("mousemove", onMove);
          window.removeEventListener("scroll", recomputeRect);
          window.removeEventListener("resize", recomputeRect);
        });
      }
    }

    // pause/resume when offscreen or tab-hidden so we don't burn cycles.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tweens.forEach((t) => t.resume());
        } else {
          tweens.forEach((t) => t.pause());
        }
      },
      { threshold: 0 },
    );
    io.observe(tilt);

    const onVisibility = () => {
      if (document.hidden) tweens.forEach((t) => t.pause());
      else tweens.forEach((t) => t.resume());
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      // 1. stop the self-scheduling blink/flick recursion AND remove window
      //    listeners so no zombie handler can fire after unmount.
      cleanups.forEach((fn) => fn());
      // 2. kill every tween targeting our elements — covers the explicitly
      //    tracked ones AND any in-flight recursive tweens we missed.
      animatedTargets.forEach((t) => gsap.killTweensOf(t));
      // 3. clear the inline transforms gsap wrote so a hot remount starts
      //    from a known clean state.
      animatedTargets.forEach((t) => gsap.set(t, { clearProps: "all" }));
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [level]);

  return { tiltRef, swayRef, breatheRef };
}

type SnakeProps = {
  size?: Size;
  variant?: Variant;
  motion?: MotionLevel;
  className?: string;
};

/**
 * base mascot. defaults to static; pass `motion="calm"` for a breathe-only
 * variant (e.g. final cta) or `motion="rich"` for the full hero treatment.
 */
export function Snake({
  size = 200,
  variant = "blue",
  motion = "static",
  className,
}: SnakeProps) {
  const { tiltRef, swayRef, breatheRef } = useSnakeMotion(motion);

  return (
    <div
      ref={tiltRef}
      className={className}
      style={{ width: size, height: size, display: "block" }}
    >
      <div ref={swayRef} style={{ width: "100%", height: "100%" }}>
        <div ref={breatheRef} style={{ width: "100%", height: "100%" }}>
          <SnakeArt size="100%" variant={variant} />
        </div>
      </div>
    </div>
  );
}

/** hero — breathing + swaying + blinking + tongue flicks + cursor tracking. */
export function SnakeIdle({ size = 540, variant = "blue" }: SnakeProps) {
  return <Snake size={size} variant={variant} motion="rich" />;
}

/** circular avatar — used as favicon-style chip beside wordmark. */
export function SnakeIcon({
  size = 36,
  variant = "blue",
  bg,
}: {
  size?: number;
  variant?: Variant;
  bg?: string;
}) {
  const inner = Math.round(size * 0.86);
  return (
    <div
      style={{
        width: size,
        height: size,
        background: bg ?? "var(--ink)",
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: inner,
          height: inner,
          transform: "translateY(2%)",
        }}
      >
        <SnakeArt size="100%" variant={variant} />
      </div>
    </div>
  );
}
