"use client";

import { useId, useState } from "react";

const FORMATS = ["American", "Decimal", "Fractional"] as const;

export function RacebookOddsDisclaimer() {
  const id = useId();
  const [format, setFormat] = useState<(typeof FORMATS)[number]>("American");

  return (
    <aside
      className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[var(--accent)]/25 bg-[#141414] p-4 shadow-lg shadow-black/30 sm:p-5"
      aria-label="Odds format and disclaimer"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="sm:max-w-xs">
          <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[var(--accent-bright)]">
            Display
          </p>
          <label htmlFor={id} className="mt-2 block text-sm font-bold text-white">
            Odds format
          </label>
          <p className="mt-0.5 text-xs text-gray-500">Applies to prices shown in this preview.</p>
          <div className="mt-3">
            <select
              id={id}
              value={format}
              onChange={(e) => setFormat(e.target.value as (typeof FORMATS)[number])}
              className="w-full rounded-lg border border-[var(--accent)]/40 bg-[#1e1e1e] px-3 py-2.5 text-sm font-semibold text-white outline-none ring-0 transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 sm:w-auto sm:min-w-[12rem]"
            >
              {FORMATS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="min-h-0 flex-1 border-t border-white/8 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
          <p className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-gray-500">Important</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">
            Demo only: schedules and prices are illustrative. Turkey Bet does not offer real-money wagering in this
            preview. Always verify rules and settlements with your operator.
          </p>
        </div>
      </div>
    </aside>
  );
}
