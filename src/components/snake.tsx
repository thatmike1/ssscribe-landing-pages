/**
 * snake mascot. the source of truth is a 600x600 png — same image, two tints
 * (blue for messscribe, green for whatsscribe). idle/thinking/listening are
 * css keyframe wrappers around the image, not separate art.
 */

type Variant = "blue" | "green";

const SRC: Record<Variant, string> = {
  blue: "/snake-blue.png",
  green: "/snake-green.png",
};

type SnakeProps = {
  size?: number;
  variant?: Variant;
  className?: string;
};

export function Snake({ size = 200, variant = "blue", className }: SnakeProps) {
  return (
    <img
      src={SRC[variant]}
      alt=""
      width={size}
      height={size}
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

/** breathing — for the hero. subtle scale pulse. */
export function SnakeIdle({ size = 540, variant = "blue" }: SnakeProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        animation: "hiss-breathe 3.4s ease-in-out infinite",
        transformOrigin: "50% 70%",
      }}
    >
      <Snake size={size} variant={variant} />
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
