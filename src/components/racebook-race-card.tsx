import type { RacebookRace } from "@/lib/mock-racebook";

export function RacebookRaceCard({ race }: { race: RacebookRace }) {
  const timeClass =
    race.timeKind === "countdown" ? "text-orange-400" : "text-sky-300";

  return (
    <article className="flex w-[min(100%,18rem)] shrink-0 flex-col overflow-hidden rounded-lg border border-white/10 bg-[#1a1a1a]">
      <div className="flex items-start justify-between gap-2 border-b border-white/8 px-3 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span
            className="shrink-0 rounded border border-white/15 px-1.5 py-0.5 text-[0.6rem] font-black tabular-nums text-gray-300"
            title="Region"
          >
            {race.regionCode}
          </span>
          <p className="truncate text-sm font-black text-white">{race.track}</p>
        </div>
        <div className="shrink-0 text-right text-[0.7rem] font-bold">
          <span className="text-white">{race.raceNo}</span>
          <span className={`ml-1.5 ${timeClass}`}>{race.timeLabel}</span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-1 gap-y-0 border-b border-white/6 px-2 py-1.5 text-[0.6rem] font-bold uppercase tracking-wide text-gray-500">
        <span>Runner</span>
        <span className="text-center">Win</span>
        <span className="text-center">Top 2</span>
        <span className="text-center">Place</span>
      </div>

      <div className="flex-1 divide-y divide-white/6">
        {race.runners.map((runner) => (
          <div
            key={`${race.id}-${runner.num}`}
            className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-x-1 px-2 py-2"
          >
            <div className="min-w-0 pr-1">
              <p className="text-[0.8rem] font-bold leading-tight text-white">
                {runner.num}. {runner.name}
              </p>
              <p className="mt-0.5 text-[0.65rem] leading-snug text-gray-500">
                J. {runner.jockey} · T. {runner.trainer}
              </p>
            </div>
            <OddCell value={runner.win} />
            <OddCell value={runner.top2} />
            <OddCell value={runner.place} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-1 border-t border-white/8 bg-black/30 px-3 py-2.5 text-[0.65rem] font-black uppercase tracking-wide text-[var(--accent-bright)] transition hover:bg-black/45"
      >
        Go to all runners
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </article>
  );
}

function OddCell({ value }: { value: string }) {
  return (
    <button
      type="button"
      className="min-w-[3rem] rounded-md border border-white/10 bg-[#252525] px-1.5 py-1.5 text-center text-[0.7rem] font-bold text-white transition hover:border-[var(--accent)]/50 hover:bg-[#2e2e2e]"
    >
      {value}
    </button>
  );
}
