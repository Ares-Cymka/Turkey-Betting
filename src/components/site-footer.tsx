import Image from "next/image";
import Link from "next/link";
import { PaymentLogosRow } from "@/components/payment-logos-row";

const POLICY_ROW1 = ["Banking", "Betting rules", "Terms & conditions", "Responsible gaming", "Privacy policy"] as const;
const POLICY_ROW2 = [
  "Underage gaming policy",
  "AML policy",
  "KYC policy",
  "Security",
  "Affiliate program",
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-4 border-t border-white/10 bg-black pb-24 pt-10 md:pb-10">
      <div className="container-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="" width={36} height={36} />
              <span className="text-xl font-black lowercase tracking-tight text-white">
                turkey<span className="text-[var(--accent)]">bet</span>
              </span>
            </Link>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-[var(--panel)] px-3 py-2">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">Phone</p>
                <p className="text-sm font-bold text-[var(--accent-orange)]">+90 000 000 00 00</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[var(--panel)] px-3 py-2">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">E-mail</p>
                <p className="text-sm font-bold text-[var(--accent-orange)]">support@turkeybet-demo.local</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-3 lg:max-w-2xl">
            <div className="flex flex-wrap gap-2">
              {POLICY_ROW1.map((label) => (
                <Link
                  key={label}
                  href="/events"
                  className="rounded-md border border-white/10 bg-[var(--panel)] px-3 py-2 text-[0.7rem] font-bold uppercase tracking-wide text-gray-200 transition hover:border-[var(--line)]"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {POLICY_ROW2.map((label) => (
                <Link
                  key={label}
                  href="/events"
                  className="rounded-md border border-white/10 bg-[var(--panel)] px-3 py-2 text-[0.7rem] font-bold uppercase tracking-wide text-gray-200 transition hover:border-[var(--line)]"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="pt-3">
              <p className="mb-2 text-[0.6rem] font-bold uppercase tracking-wider text-gray-500">Payments</p>
              <PaymentLogosRow variant="compact" />
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-[0.7rem] font-bold uppercase tracking-wider text-gray-600">
          © Turkey Bet demo, {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
