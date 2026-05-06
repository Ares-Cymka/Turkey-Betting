import { PaymentLogosRow } from "@/components/payment-logos-row";

export function PaymentStrip() {
  return (
    <section className="mb-6 border-y border-white/8 py-5">
      <p className="mb-3 text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gray-500">
        Payment methods (demo)
      </p>
      <PaymentLogosRow />
    </section>
  );
}
