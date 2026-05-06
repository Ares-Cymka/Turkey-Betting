"use client";

import { useMemo, useState } from "react";
import { RacebookRaceCard } from "@/components/racebook-race-card";
import { RacebookOddsDisclaimer } from "@/components/racebook-odds-disclaimer";
import type { RacebookBreed, RacebookRace } from "@/lib/mock-racebook";
import { racebookRaces } from "@/lib/mock-racebook";

const BREEDS: { id: RacebookBreed; label: string }[] = [
  { id: "horse", label: "Horse racing" },
  { id: "greyhound", label: "Greyhound" },
  { id: "harness", label: "Harness" },
];

const TIME_TABS = [
  { id: "next", label: "Next to jump" },
  { id: "today", label: "Today" },
  { id: "tomorrow", label: "Tomorrow" },
  { id: "upcoming", label: "Upcoming" },
  { id: "results", label: "Results" },
] as const;

type TimeTabId = (typeof TIME_TABS)[number]["id"];

function IconHorse({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path
        d="M4 18c1.5-4 4-6 8-6.5M8 11.5l2-6 4-.5 2 3.5 3 1M6 18h12M9 5.5c1-1 3-1.5 5-1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function matchesTimeTab(race: RacebookRace, tab: TimeTabId): boolean {
  if (tab === "next") return race.timeKind === "countdown";
  if (tab === "today") return race.timeLabel.startsWith("Today");
  if (tab === "tomorrow") return race.timeLabel.startsWith("Tomorrow");
  if (tab === "upcoming") {
    return (
      race.timeKind === "scheduled" &&
      !race.timeLabel.startsWith("Today") &&
      !race.timeLabel.startsWith("Tomorrow")
    );
  }
  if (tab === "results") return false;
  return true;
}

function countForTab(races: RacebookRace[], tab: TimeTabId): number {
  return races.filter((r) => matchesTimeTab(r, tab)).length;
}

export function RacebookLobby() {
  const [breed, setBreed] = useState<RacebookBreed>("horse");
  const [timeTab, setTimeTab] = useState<TimeTabId>("next");

  const byBreed = useMemo(() => racebookRaces.filter((r) => r.breed === breed), [breed]);

  const tabCounts = useMemo(() => {
    const entries = TIME_TABS.map((t) => [t.id, countForTab(byBreed, t.id)] as const);
    return Object.fromEntries(entries) as Record<TimeTabId, number>;
  }, [byBreed]);

  const visible = useMemo(
    () => byBreed.filter((r) => matchesTimeTab(r, timeTab)),
    [byBreed, timeTab],
  );

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <IconHorse className="h-7 w-7 text-[var(--accent-bright)]" />
          <h2 className="text-xl font-black uppercase tracking-tight text-white md:text-2xl">Racing</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {BREEDS.map((b) => {
            const active = breed === b.id;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => setBreed(b.id)}
                className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide transition ${
                  active
                    ? "bg-[var(--accent)] text-black"
                    : "border border-white/15 bg-[#1e1e1e] text-gray-200 hover:border-white/25"
                }`}
              >
                {b.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          {TIME_TABS.map((t) => {
            const active = timeTab === t.id;
            const n = tabCounts[t.id];
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTimeTab(t.id)}
                className={`rounded-full px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-wide transition ${
                  active
                    ? "bg-[var(--accent)] text-black"
                    : "border border-white/12 bg-[#1a1a1a] text-gray-300 hover:border-white/20"
                }`}
              >
                {t.label}
                <span className="ml-1 opacity-80">({n})</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {visible.length === 0 ? (
          <p className="rounded-lg border border-white/10 bg-[#1a1a1a] px-6 py-12 text-center text-sm text-gray-400">
            No races for this filter. Try another tab or breed.
          </p>
        ) : (
          visible.map((race) => <RacebookRaceCard key={race.id} race={race} />)
        )}
      </div>

      <div className="pb-4">
        <RacebookOddsDisclaimer />
      </div>
    </div>
  );
}
