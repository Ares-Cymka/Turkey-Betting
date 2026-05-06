import Link from "next/link";

export function InfoBlock() {
  return (
    <section className="mb-10 rounded-2xl border border-white/10 bg-[var(--panel)] p-6 md:p-10">
      <h2 className="text-2xl font-bold text-white md:text-3xl">Turkey Bet Sportsbook</h2>
      <h3 className="mt-4 text-lg font-bold text-white">Why play here?</h3>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-300">
        <p>
          This demo platform combines a modern sportsbook layout with quick navigation: live markets, pre-match odds, and a
          casino-style lobby section — optimized for both desktop and phone.
        </p>
        <p>
          Explore major leagues, build parlays, and follow matches with a dark, high-contrast UI. All data shown is mock-only
          for presentation; no real wagering is offered in this repository build.
        </p>
      </div>
      <Link href="/events" className="mt-5 inline-block text-sm font-bold text-[var(--accent-orange)] hover:underline">
        Read more
      </Link>
    </section>
  );
}
