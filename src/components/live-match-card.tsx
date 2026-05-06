"use client";

import Image from "next/image";
import { useState } from "react";
import { IconStarOutline } from "@/components/icons";
import type { LiveMatch } from "@/lib/mock-live";

function matchupLabel(m: LiveMatch) {
  return `${m.home.name} vs ${m.away.name}`;
}

export function LiveMatchCard({ match }: { match: LiveMatch }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-white/8 bg-[#1e1e1e] p-0 shadow-md">
      <div className="relative h-28 w-full shrink-0">
        {!imgFailed ? (
          <Image
            src={match.imageUrl}
            alt=""
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width:768px) 100vw, 320px"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-black"
            aria-hidden
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-black/50 to-black/20" />
        <div className="absolute left-2 right-2 top-2 flex items-start justify-between gap-2">
          {match.isLive ? (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-red-500/50 bg-black/70 px-2 py-1 text-[0.6rem] font-black uppercase tracking-wide text-red-400 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              Live
            </span>
          ) : (
            <span />
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 px-2 pb-2 pt-6">
          <p className="line-clamp-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white/80">
            {match.league}
          </p>
          <p className="line-clamp-2 text-sm font-black leading-tight text-white drop-shadow-md">
            {matchupLabel(match)}
          </p>
        </div>
      </div>
      <div className="flex flex-col p-3">
        <div className="flex items-start justify-between gap-2 border-b border-white/6 pb-2">
          <p className="text-[0.65rem] font-semibold leading-snug text-gray-400">{match.statusLine}</p>
          <button type="button" className="text-gray-500 hover:text-[var(--accent)]" aria-label="Favorite">
            <IconStarOutline className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-black text-white"
                style={{ backgroundColor: match.home.jersey }}
              >
                {match.home.abbr.slice(0, 2)}
              </span>
              <span className="truncate text-sm font-semibold text-white">{match.home.name}</span>
            </div>
            {match.home.score !== undefined ? (
              <span className="text-lg font-black text-white">{match.home.score}</span>
            ) : null}
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-black text-white"
                style={{ backgroundColor: match.away.jersey }}
              >
                {match.away.abbr.slice(0, 2)}
              </span>
              <span className="truncate text-sm font-semibold text-white">{match.away.name}</span>
            </div>
            {match.away.score !== undefined ? (
              <span className="text-lg font-black text-white">{match.away.score}</span>
            ) : null}
          </div>
        </div>
        <p className="mt-3 text-[0.65rem] text-gray-500">{match.market}</p>
        <div className="mt-2 flex items-stretch gap-2">
          <button
            type="button"
            className="flex flex-1 items-center justify-between rounded-lg bg-[#2a2a2a] px-3 py-2.5 text-left transition hover:bg-[#333]"
          >
            <span className="text-xs font-black text-[var(--accent)]">1</span>
            <span className="text-sm font-bold text-white">{match.odds[0]}</span>
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-between rounded-lg bg-[#2a2a2a] px-3 py-2.5 text-left transition hover:bg-[#333]"
          >
            <span className="text-xs font-black text-[var(--accent)]">2</span>
            <span className="text-sm font-bold text-white">{match.odds[1]}</span>
          </button>
          <button
            type="button"
            className="flex w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#2a2a2a] text-gray-400 hover:text-white"
            aria-label="More markets"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
