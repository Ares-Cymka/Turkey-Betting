"use client";

import { useMemo, useState } from "react";
import { EsportGameIcon } from "@/components/esport-game-icon";
import { EsportMatchCard } from "@/components/esport-match-card";
import { IconClock } from "@/components/icons";
import { EsportsFeaturedCarousel } from "@/components/esports-featured-carousel";
import { EsportsLiveHero } from "@/components/esports-live-hero";
import {
  countMatchesForGame,
  esportFeaturedSlides,
  esportGames,
  esportLiveFeature,
  esportMatches,
  esportOutrights,
  type EsportGameId,
} from "@/lib/mock-esports";

type ViewTab = "matches" | "outrights";

function IconGamepad({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path
        d="M6 11h4v4H6V11zm10-1h2m-1-1v2M8 21h8a6 6 0 0 0 6-6v-2a6 6 0 0 0-6-6H8a6 6 0 0 0-6 6v2a6 6 0 0 0 6 6z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EsportsLobby() {
  const [gameId, setGameId] = useState<EsportGameId>("cs2");
  const [view, setView] = useState<ViewTab>("matches");

  const filteredMatches = useMemo(() => esportMatches.filter((m) => m.gameId === gameId), [gameId]);
  const filteredOutrights = useMemo(() => esportOutrights.filter((o) => o.gameId === gameId), [gameId]);

  const liveHero = useMemo(() => {
    const label = esportGames.find((g) => g.id === gameId)?.label ?? "Esports";
    return {
      ...esportLiveFeature,
      leagueLine:
        gameId === "cs2"
          ? esportLiveFeature.leagueLine
          : `${label} — Demo stream (illustrative only)`,
    };
  }, [gameId]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <IconGamepad className="h-8 w-8 text-[var(--accent-bright)]" />
        <h1 className="text-2xl font-black uppercase tracking-tight text-white md:text-3xl">Esports</h1>
      </div>

      <div className="mb-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {esportGames.map((g) => {
          const active = gameId === g.id;
          const n = countMatchesForGame(g.id);
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => setGameId(g.id)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-left transition ${
                active
                  ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                  : "border-white/12 bg-[#1e1e1e] text-gray-200 hover:border-white/25"
              }`}
            >
              <EsportGameIcon gameId={g.id} className="h-5 w-5 shrink-0 text-current" />
              <span className="text-xs font-black uppercase tracking-wide">{g.shortLabel}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[0.6rem] font-black ${
                  active ? "bg-black/15 text-black" : "bg-white/10 text-gray-400"
                }`}
              >
                {n}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mb-6 flex gap-2">
        {(["matches", "outrights"] as const).map((tab) => {
          const active = view === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setView(tab)}
              className={`rounded-full px-5 py-2 text-xs font-black uppercase tracking-wide transition ${
                active ? "bg-[var(--accent)] text-black" : "border border-white/12 bg-[#1a1a1a] text-gray-300"
              }`}
            >
              {tab === "matches" ? "Matches" : "Outrights"}
            </button>
          );
        })}
      </div>

      {view === "matches" ? (
        <>
          <EsportsFeaturedCarousel slides={esportFeaturedSlides} />
          <EsportsLiveHero live={liveHero} />

          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
              <IconClock className="h-4 w-4" />
            </span>
            <h2 className="text-lg font-black uppercase tracking-wide text-white">Upcoming</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {filteredMatches.map((m) => (
              <EsportMatchCard key={m.id} match={m} />
            ))}
          </div>
        </>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filteredOutrights.length === 0 ? (
            <p className="col-span-full rounded-xl border border-white/10 bg-[#1a1a1a] px-6 py-10 text-center text-sm text-gray-400">
              No demo outrights for this title yet.
            </p>
          ) : (
            filteredOutrights.map((o) => (
              <article key={o.id} className="rounded-xl border border-white/10 bg-[#1a1a1a] p-4">
                <p className="text-sm font-bold text-white">{o.title}</p>
                <p className="mt-3 text-xl font-black text-[var(--accent-bright)]">{o.odd}</p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-lg border border-white/12 py-2 text-[0.65rem] font-black uppercase text-gray-300 transition hover:border-[var(--accent)]/40"
                >
                  Add to betslip
                </button>
              </article>
            ))
          )}
        </div>
      )}
    </div>
  );
}
