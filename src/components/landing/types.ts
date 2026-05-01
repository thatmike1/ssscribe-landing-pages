export type AppKind = "messenger" | "whatsapp";
export type ProductVariant = "blue" | "green";

export type ProductConfig = {
  app: AppKind;
  name: string;
  platform: string;
  variant: ProductVariant;
  themeClass: string;
};
