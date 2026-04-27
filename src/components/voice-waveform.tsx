/**
 * little audio waveform inside voice-message bubbles. fixed pseudo-random bar
 * heights so it reads as "audio" without animating; sized via width/height
 * because it appears at three different scales across the page.
 */
const HEIGHTS = [
  4, 9, 14, 6, 12, 18, 10, 5, 8, 14, 7, 11, 16, 9, 5, 12, 8, 13, 6, 10,
];

export function VoiceWaveform({
  width = 120,
  height = 20,
  color = "white",
  bars = 20,
}: {
  width?: number;
  height?: number;
  color?: string;
  bars?: number;
}) {
  const slice = HEIGHTS.slice(0, bars);
  const step = width / bars;
  const barW = Math.max(2, step * 0.45);
  const scale = height / 20;
  const cy = height / 2;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      {slice.map((h, i) => {
        const scaledH = h * scale;
        return (
          <rect
            key={i}
            x={i * step}
            y={cy - scaledH / 2}
            width={barW}
            height={scaledH}
            fill={color}
            rx={barW / 2}
          />
        );
      })}
    </svg>
  );
}
