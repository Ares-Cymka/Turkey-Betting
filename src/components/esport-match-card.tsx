"use client";

import { useState } from "react";
import { EsportGameIcon } from "@/components/esport-game-icon";
import type { EsportMatch } from "@/lib/mock-esports";

function TeamRow({
  name,
  score,
}: {
  name: string;
  score?: number;
}) {
  const initial = name.slice(0, 1).toUpperCase();
  return (
    <div className="flex items-center justify-between gap-2 py-1.5">
      <div className="flex min-w-0 items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-white/15 to-white/5 text-xs font-black text-white">
          {initial}
        </span>
        <span className="truncate text-sm font-bold text-white">{name}</span>
      </div>
      {score !== undefined ? (
        <span className="shrink-0 text-lg font-black tabular-nums text-white">{score}</span>
      ) : null}
    </div>
  );
}

export function EsportMatchCard({ match }: { match: EsportMatch }) {
  const [starred, setStarred] = useState(false);

  return (
    <article className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] p-3 shadow-lg">
      <div className="mb-2 flex items-start justify-between gap-2 pr-8">
        <div className="flex min-w-0 items-start gap-2">
          <EsportGameIcon gameId={match.gameId} className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-bright)]" />
          <p className="text-[0.65rem] leading-snug text-gray-500">{match.tournament}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setStarred((s) => !s)}
        className={`absolute right-2 top-2 rounded-md p-1.5 transition ${
          starred ? "text-[var(--accent-bright)]" : "text-gray-600 hover:text-gray-400"
        }`}
        aria-label={starred ? "Remove from favourites" : "Add to favourites"}
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill={starred ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2l3 7 7 .5-5.5 4.5 2 7L12 17l-6.5 4 2-7L2 9.5 9 9l3-7z" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="text-[0.7rem] text-gray-400">{match.startLabel}</span>
        {match.isLive && match.mapLabel ? (
          <span className="inline-flex items-center gap-1 rounded bg-red-500/15 px-2 py-0.5 text-[0.6rem] font-black uppercase text-red-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            {match.mapLabel}
          </span>
        ) : null}
      </div>

      <div className="divide-y divide-white/6 border-y border-white/6">
        <TeamRow name={match.teamA.name} score={match.teamA.score} />
        <TeamRow name={match.teamB.name} score={match.teamB.score} />
      </div>

      {match.marketsOnly ? (
        <button
          type="button"
          className="mt-3 w-full rounded-lg border border-[var(--accent)]/50 py-2.5 text-center text-[0.65rem] font-black uppercase tracking-wide text-[var(--accent-bright)] transition hover:bg-[var(--accent)]/10"
        >
          Go to all markets
        </button>
      ) : (
        <div className="mt-3">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[0.65rem] font-bold uppercase tracking-wide text-gray-500">Winner</span>
            {match.expandMarkets ? (
              <button type="button" className="text-gray-500 hover:text-white" aria-label="More markets">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" />
                </svg>
              </button>
            ) : null}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="flex items-center justify-between rounded-lg border border-white/10 bg-[#252525] px-3 py-2 text-left transition hover:border-[var(--accent)]/40"
            >
              <span className="text-[0.65rem] font-black text-gray-400">1</span>
              <span className="text-sm font-black text-sky-200">{match.odd1}</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-between rounded-lg border border-white/10 bg-[#252525] px-3 py-2 text-left transition hover:border-[var(--accent)]/40"
            >
              <span className="text-[0.65rem] font-black text-gray-400">2</span>
              <span className="text-sm font-black text-sky-200">{match.odd2}</span>
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
