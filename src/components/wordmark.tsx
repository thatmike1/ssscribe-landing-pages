/**
 * the brand mark. paints the `sss` in the accent color so the hisss is part of
 * the logo itself — works for both messscribe and whatsscribe.
 */
type Props = {
  name?: string;
  size?: number;
  color?: string;
  accent?: string;
};

export function Wordmark({
  name = "messscribe",
  size = 24,
  color = "var(--ink)",
  accent = "var(--accent)",
}: Props) {
  const idx = name.indexOf("sss");
  const before = idx === -1 ? name : name.slice(0, idx);
  const after = idx === -1 ? "" : name.slice(idx + 3);

  return (
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: size,
        letterSpacing: "-0.045em",
        color,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "baseline",
      }}
    >
      <span>{before}</span>
      {idx !== -1 && <span style={{ color: accent }}>sss</span>}
      <span>{after}</span>
    </span>
  );
}
