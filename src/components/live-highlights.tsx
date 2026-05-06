"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { boostedPicks } from "@/lib/mock-live";

const TABS = ["Highlights", "Predictions", "Event builder", "Bets feed"] as const;

export function LiveHighlights() {
  const [tab, setTab] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const max = scrollWidth - clientWidth;
    setCanPrev(scrollLeft > 6);
    setCanNext(scrollLeft < max - 6);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * 0.78, 280) * dir;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  const cardSnap = "w-[min(260px,82vw)] shrink-0 snap-start snap-always";

  return (
    <section className="mb-6">
      <div className="flex flex-wrap gap-1 rounded-lg bg-[#1e1e1e] p-1">
        {TABS.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setTab(i)}
            className={`flex-1 min-w-[7rem] rounded-md px-3 py-2 text-center text-[0.65rem] font-black uppercase tracking-wide transition sm:text-xs ${
              i === tab ? "bg-white text-black" : "text-gray-400 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />

        <button
          type="button"
          aria-label="Previous boosts"
          disabled={!canPrev}
          onClick={() => scrollByDir(-1)}
          className={`absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#1a1a1a]/95 text-white shadow-lg backdrop-blur-sm transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)] disabled:pointer-events-none disabled:opacity-25`}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next boosts"
          disabled={!canNext}
          onClick={() => scrollByDir(1)}
          className={`absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#1a1a1a]/95 text-white shadow-lg backdrop-blur-sm transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)] disabled:pointer-events-none disabled:opacity-25`}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 pl-11 pr-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {boostedPicks.map((p) => (
            <article
              key={p.id}
              className={`${cardSnap} overflow-hidden rounded-xl border border-white/8 bg-[#1e1e1e] shadow-lg transition-transform duration-300 ease-out hover:-translate-y-0.5`}
            >
              <div className="relative h-28 w-full">
                <Image
                  src={p.imageUrl}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="260px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute left-2 top-2 flex w-[calc(100%-1rem)] items-start justify-between gap-2">
                  <span className="rounded bg-emerald-500/25 px-2 py-0.5 text-[0.6rem] font-black uppercase text-emerald-400">
                    Boost
                  </span>
                  <span className="shrink-0 text-[0.65rem] font-bold text-white drop-shadow">{p.date}</span>
                </div>
              </div>
              <div className="space-y-2 p-3">
                <p className="text-sm font-bold leading-snug text-white">{p.title}</p>
                <p className="text-xs text-gray-500">{p.market}</p>
                <div className="flex items-center justify-between rounded-lg bg-[#2a2a2a] px-3 py-2">
                  <span className="text-sm text-gray-400 line-through">{p.odds}</span>
                  <span className="text-sm font-black text-emerald-400">{p.oddsBoosted}</span>
                </div>
              </div>
            </article>
          ))}
          <Link
            href="/events"
            className={`${cardSnap} flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--accent)]/40 bg-[#1a1a1a] px-4 py-6 text-center transition hover:border-[var(--accent)]/70 hover:bg-[#222]`}
          >
            <span className="text-2xl font-black text-[var(--accent)]">→</span>
            <span className="text-xs font-black uppercase tracking-wide text-white">All boosts</span>
            <span className="text-[0.65rem] text-gray-500">Swipe or tap arrows</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
