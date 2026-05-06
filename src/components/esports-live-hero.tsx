"use client";

import Image from "next/image";
import { useState } from "react";
import type { EsportLiveFeature } from "@/lib/mock-esports";

export function EsportsLiveHero({ live }: { live: EsportLiveFeature }) {
  const [muted, setMuted] = useState(true);

  return (
    <section className="mb-8">
      <div className="mb-3 flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
        </span>
        <h2 className="text-lg font-black uppercase tracking-wide text-white">Live</h2>
      </div>

      <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#121212] lg:flex-row lg:min-h-[280px]">
        <div className="relative aspect-video w-full lg:aspect-auto lg:flex-[1.4] lg:min-h-[280px]">
          <Image src={live.streamImageUrl} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 65vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:bg-gradient-to-t lg:from-black/60" />
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur"
            aria-label={muted ? "Unmute stream" : "Mute stream"}
          >
            {muted ? (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H3v6h3l5 4V5zM19 9l-6 6M13 9l6 6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H3v6h3l5 4V5zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" strokeLinecap="round" />
              </svg>
            )}
          </button>
          <p className="absolute bottom-3 left-3 right-3 text-[0.65rem] font-bold text-white/90 drop-shadow md:hidden">
            {live.leagueLine}
          </p>
        </div>

        <div className="flex w-full flex-col justify-between border-t border-white/10 bg-gradient-to-b from-[#1c1c1c] to-black p-4 lg:w-[min(100%,320px)] lg:border-l lg:border-t-0">
          <div>
            <p className="hidden text-[0.65rem] font-bold text-gray-500 lg:block">{live.leagueLine}</p>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 text-lg font-black text-white">
                  {live.teamA.name.slice(0, 2).toUpperCase()}
                </div>
                <p className="text-xs font-bold text-white">{live.teamA.name}</p>
              </div>
              <div className="flex shrink-0 items-baseline gap-1 font-black tabular-nums text-white">
                <span className="text-3xl">{live.scoreA}</span>
                <span className="text-xl text-gray-500">—</span>
                <span className="text-3xl">{live.scoreB}</span>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-white/10 text-lg font-black text-white">
                  {live.teamB.name.slice(0, 2).toUpperCase()}
                </div>
                <p className="text-xs font-bold text-white">{live.teamB.name}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-1 rounded-lg border border-white/15 py-2 text-[0.65rem] font-black uppercase tracking-wide text-gray-200 transition hover:border-white/30"
            >
              Go to event
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              className="w-full rounded-lg border border-[var(--accent)]/60 py-2.5 text-[0.65rem] font-black uppercase tracking-wide text-[var(--accent-bright)] transition hover:bg-[var(--accent)]/10"
            >
              Go to all markets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
