/**
 * snake mascot. the source of truth is a 600x600 png — same image, two tints
 * (blue for messscribe, green for whatsscribe). idle/thinking/listening are
 * css keyframe wrappers around the image, not separate art.
 *
 * size accepts a number (fixed px) or a string (e.g. `clamp(220px, 50vw,
 * 540px)`) so the hero snake can scale fluidly with the viewport.
 */

type Variant = "blue" | "green";
type Size = number | string;

const SRC: Record<Variant, string> = {
  blue: "/snake-blue.png",
  green: "/snake-green.png",
};

type SnakeProps = {
  size?: Size;
  variant?: Variant;
  className?: string;
};

export function Snake({ size = 200, variant = "blue", className }: SnakeProps) {
  return (
    <img
      src={SRC[variant]}
      alt=""
      draggable={false}
      className={className}
      style={{
        width: size,
        height: size,
        display: "block",
        objectFit: "contain",
        userSelect: "none",
        pointerEvents: "none",
      }}
    />
  );
}

/** breathing + drift — for the hero. two layered animations at different
 *  frequencies so the combined motion never visibly repeats (~28 s cycle). */
export function SnakeIdle({ size = 540, variant = "blue" }: SnakeProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        animation: "hiss-drift 6.8s ease-in-out infinite",
        transformOrigin: "50% 55%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          animation: "hiss-breathe 4.2s ease-in-out infinite",
          transformOrigin: "50% 70%",
        }}
      >
        <Snake size={size} variant={variant} />
      </div>
    </div>
  );
}

/** sway — peeking out of the storyboard. */
export function SnakeThinking({ size = 150, variant = "blue" }: SnakeProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        animation: "hiss-sway 2.6s ease-in-out infinite",
        transformOrigin: "50% 80%",
      }}
    >
      <Snake size={size} variant={variant} />
    </div>
  );
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
      <img
        src={SRC[variant]}
        alt=""
        width={inner}
        height={inner}
        draggable={false}
        style={{
          width: inner,
          height: inner,
          objectFit: "contain",
          display: "block",
          userSelect: "none",
          pointerEvents: "none",
          transform: "translateY(2%)",
        }}
      />
    </div>
  );
}
