import { paymentBrandIconUrl, paymentBrands, type PaymentBrand } from "@/lib/payment-brands";

type Props = {
  /** Tighter padding and smaller logos for footers */
  variant?: "default" | "compact";
  /** Subset of brand names to show, or all if omitted */
  names?: string[];
};

export function PaymentLogosRow({ variant = "default", names }: Props) {
  const list: PaymentBrand[] = names?.length
    ? paymentBrands.filter((b) => names.some((n) => n.toLowerCase() === b.name.toLowerCase()))
    : paymentBrands;

  const logoH = variant === "compact" ? "h-5" : "h-7";
  const pad = variant === "compact" ? "px-2 py-1.5" : "px-3 py-2.5";

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
      {list.map((brand) => (
        <div
          key={brand.slug}
          className={`flex items-center justify-center rounded-lg border border-white/10 bg-[#121212] ${pad} shadow-inner shadow-black/20`}
          title={brand.name}
        >
          <img
            src={paymentBrandIconUrl(brand)}
            alt={brand.name}
            width={120}
            height={32}
            loading="lazy"
            decoding="async"
            className={`${logoH} w-auto max-w-[5.5rem] object-contain opacity-95 transition hover:opacity-100`}
          />
        </div>
      ))}
    </div>
  );
}
