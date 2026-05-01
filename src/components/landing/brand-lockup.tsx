import { SnakeIcon } from "@/components/snake";
import { Wordmark } from "@/components/wordmark";
import type { ProductConfig } from "./types";

export function BrandLockup({
  product,
  color = "var(--ink)",
  iconBg,
  size = 24,
}: {
  product: ProductConfig;
  color?: string;
  iconBg?: string;
  size?: number;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <SnakeIcon size={36} variant={product.variant} bg={iconBg} />
      <Wordmark size={size} name={product.name} color={color} />
    </div>
  );
}
