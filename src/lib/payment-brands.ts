/**
 * Brand marks loaded from the Simple Icons CDN (https://simpleicons.org).
 * Trademarks belong to their respective owners; used here for UI demonstration only.
 */
export type PaymentBrand = {
  name: string;
  /** Simple Icons slug */
  slug: string;
  /** Hex colour without # — passed to cdn.simpleicons.org */
  color: string;
};

export const paymentBrands: PaymentBrand[] = [
  { name: "Visa", slug: "visa", color: "1A1F71" },
  { name: "Mastercard", slug: "mastercard", color: "EB001B" },
  { name: "American Express", slug: "americanexpress", color: "2E77BC" },
  { name: "PayPal", slug: "paypal", color: "003087" },
  { name: "Payoneer", slug: "payoneer", color: "FF4800" },
  { name: "Wise", slug: "wise", color: "9FE871" },
  { name: "Apple Pay", slug: "applepay", color: "FFFFFF" },
  { name: "Google Pay", slug: "googlepay", color: "4285F4" },
  { name: "Stripe", slug: "stripe", color: "635BFF" },
  { name: "Revolut", slug: "revolut", color: "0075EB" },
  { name: "Discover", slug: "discover", color: "FF6000" },
  { name: "Western Union", slug: "westernunion", color: "FFDD00" },
  { name: "Bitcoin", slug: "bitcoin", color: "F7931A" },
  { name: "Ethereum", slug: "ethereum", color: "627EEA" },
  { name: "Tether", slug: "tether", color: "26A17B" },
  { name: "Litecoin", slug: "litecoin", color: "A8A8A8" },
  { name: "Solana", slug: "solana", color: "9945FF" },
];

export function paymentBrandIconUrl(brand: PaymentBrand): string {
  return `https://cdn.simpleicons.org/${brand.slug}/${brand.color}`;
}
