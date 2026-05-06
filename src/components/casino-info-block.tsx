import Link from "next/link";

export function CasinoInfoBlock() {
  return (
    <section className="mt-12 rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 md:p-10">
      <h2 className="text-2xl font-bold text-white md:text-3xl">Play casino games at Turkey Bet</h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-300">
        This demo lobby previews slots-style tiles, table categories, and promotional banners. No real-money gaming is
        connected — it is a front-end showcase only.
      </p>
      <h3 className="mt-6 text-lg font-bold text-white">Why use this demo?</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-300">
        You can test dark-mode layouts, category filters, search, and responsive grids before wiring a real provider API.
        Live dealer and jackpot sections are visual placeholders.
      </p>
      <h3 className="mt-6 text-lg font-bold text-white">Games you&apos;ll see in production builds</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-300">
        Typical integrations include video slots, roulette and blackjack tables, baccarat, and a live studio feed. Titles
        and RTP labels would come from your aggregator or platform partner — not from this static mock.
      </p>
      <Link href="/login" className="mt-5 inline-block text-sm font-bold text-[var(--accent-orange)] hover:underline">
        Read more
      </Link>
    </section>
  );
}
