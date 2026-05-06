"use client";

import Image from "next/image";
import Link from "next/link";

const TABLES = [
  { seats: 5, min: 10, max: 2500, image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop" },
  { seats: 3, min: 25, max: 5000, image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop" },
  { seats: 7, min: 15, max: 3000, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop" },
  { seats: 4, min: 150, max: 10000, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop" },
  { seats: 6, min: 20, max: 4000, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop" },
  { seats: 8, min: 5, max: 1500, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop" },
  { seats: 4, min: 50, max: 7500, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80&auto=format&fit=crop" },
  { seats: 5, min: 12, max: 3200, image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&auto=format&fit=crop" },
  { seats: 6, min: 30, max: 6000, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop" },
  { seats: 7, min: 8, max: 2800, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop" },
] as const;

export function LiveDealersSection() {
  return (
    <section className="mb-10">
      <h3 className="text-center text-sm font-black uppercase tracking-[0.25em] text-gray-300 md:text-base">
        Top live dealers of the last 24 hours
      </h3>

      <div className="relative mt-5">
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-5 md:overflow-visible lg:grid-cols-5">
          {TABLES.map((t, i) => (
            <article
              key={`${t.image}-${i}`}
              className="panel relative w-[min(200px,72vw)] shrink-0 snap-center overflow-hidden border-[var(--line)] md:w-auto"
            >
              <div className="relative aspect-[4/5]">
                <Image src={t.image} alt="" fill className="object-cover" sizes="200px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute left-2 top-2 flex items-center gap-1 text-[0.65rem] font-black uppercase text-[var(--accent)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
                  Live
                </div>
                <div className="absolute bottom-10 left-2 right-2 text-center">
                  <p className="text-sm font-black uppercase text-white">Blackjack</p>
                  <p className="text-[0.65rem] text-gray-400">Seats available: {t.seats}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-black/60">
                    <svg className="h-6 w-6 text-[var(--accent)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17 8h-1V6c0-2.76-2.24-5-5-5S6 3.24 6 6v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--line)] bg-black/80 py-1.5 text-center text-[0.65rem] font-bold text-[var(--accent-bright)]">
                  Limit: ${t.min} – ${t.max.toLocaleString()}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/casino"
          className="btn-outline-gold rounded-md px-8 py-2.5 text-sm font-black uppercase tracking-widest text-[var(--accent-orange)]"
        >
          See all tables
        </Link>
      </div>
    </section>
  );
}
