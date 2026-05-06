import Image from "next/image";
import Link from "next/link";

export function LiveMatchesBanner() {
  return (
    <Link
      href="/live"
      className="relative mb-6 flex min-h-[5rem] w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 shadow-lg transition hover:border-[var(--accent)]/40 md:min-h-[5.5rem]"
    >
      <Image
        src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600&q=75&auto=format&fit=crop"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/55" />
      <span className="relative z-[1] px-4 py-3 text-center text-sm font-black uppercase tracking-wide text-white md:text-base">
        Bet on{" "}
        <span className="mx-1 inline-block rounded bg-red-600 px-2 py-0.5 text-xs font-black text-white md:text-sm">Live</span>{" "}
        matches now
      </span>
    </Link>
  );
}
