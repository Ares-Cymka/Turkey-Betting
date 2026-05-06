"use client";

import Image from "next/image";
import { useState } from "react";

const PROMOS = [
  {
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80&auto=format&fit=crop",
    kicker: "New release",
    title: "Paint the reels gold",
    subtitle: "Celebrate with boosted spins and weekly leaderboards.",
  },
  {
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80&auto=format&fit=crop",
    kicker: "Explore",
    title: "Discover over 2,000 games",
    subtitle: "Slots, tables, and live dealers — all in one lobby.",
  },
  {
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=1200&q=80&auto=format&fit=crop",
    kicker: "Tables",
    title: "Blackjack and roulette",
    subtitle: "Low limits for newcomers, high limits for VIP demo profiles.",
  },
  {
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80&auto=format&fit=crop",
    kicker: "Slots",
    title: "Jackpot hour",
    subtitle: "Stacked wilds, bonus buys, and megaways-style layouts in this preview.",
  },
  {
    image: "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?w=1200&q=80&auto=format&fit=crop",
    kicker: "Live",
    title: "Dealers on camera",
    subtitle: "HD streams, multi-table view, and quick bet shortcuts.",
  },
  {
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80&auto=format&fit=crop",
    kicker: "Rewards",
    title: "Weekly cashback",
    subtitle: "Demo-only perks to showcase how campaigns could look in production.",
  },
] as const;

export function PromoBannerCarousel() {
  const [i, setI] = useState(0);
  const p = PROMOS[i];

  return (
    <section className="mb-10 overflow-hidden rounded-2xl border border-[var(--line)]">
      <div className="relative aspect-[21/9] min-h-[160px] md:min-h-[220px]">
        {PROMOS.map((item, idx) => (
          <div
            key={item.title}
            className={`absolute inset-0 transition-opacity duration-500 ${idx === i ? "z-[1] opacity-100" : "z-0 opacity-0 pointer-events-none"}`}
            aria-hidden={idx !== i}
          >
            <Image src={item.image} alt="" fill className="object-cover" sizes="1280px" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/40" />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col justify-center px-6 py-6 md:px-10">
          <span className="pointer-events-auto inline-block w-fit rounded bg-red-600 px-2 py-0.5 text-[0.65rem] font-black uppercase text-white">
            {p.kicker}
          </span>
          <h3 className="pointer-events-auto mt-2 max-w-lg text-2xl font-black uppercase text-[var(--accent)] md:text-3xl">{p.title}</h3>
          <p className="pointer-events-auto mt-1 max-w-md text-sm text-gray-300">{p.subtitle}</p>
        </div>
        <div className="absolute bottom-3 left-1/2 z-[3] flex -translate-x-1/2 gap-2">
          {PROMOS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
              aria-label={`Promo ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
