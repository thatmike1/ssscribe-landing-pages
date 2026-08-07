export type AppKind = "messenger" | "whatsapp";
export type ProductVariant = "blue" | "green";

export type ProductConfig = {
    app: AppKind;
    name: string;
    platform: string;
    variant: ProductVariant;
    themeClass: string;
    /**
     * deep link that drops someone straight into a chat with the bot. per
     * product, because each sibling lives in a different messenger — this is
     * the other half of "a new product is a class swap, not a fork".
     */
    botUrl: string;
};
