"use client";

import type { ReactNode } from "react";
import { IconSearch } from "@/components/icons";

const CATEGORIES: readonly {
  id: string;
  label: string;
  badge?: string;
  icon: ReactNode;
}[] = [
  {
    id: "fav",
    label: "Favorites",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "new",
    label: "New games",
    badge: "NEW",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.9 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "slots",
    label: "All slots",
    icon: <span className="font-mono text-sm font-black leading-none">777</span>,
  },
  {
    id: "bj",
    label: "Blackjack",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="6" y="5" width="12" height="16" rx="1.5" />
        <path d="M9 8h6M9 11h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "table",
    label: "Table games",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="5" y="5" width="6" height="6" rx="1" />
        <rect x="13" y="5" width="6" height="6" rx="1" />
        <rect x="5" y="13" width="6" height="6" rx="1" />
        <rect x="13" y="13" width="6" height="6" rx="1" />
      </svg>
    ),
  },
  {
    id: "poker",
    label: "Video poker",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="5" y="6" width="14" height="12" rx="1.5" />
        <path d="M8 10h8M8 13h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "jackpot",
    label: "Jackpot",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M12 3l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "spec",
    label: "Specialties",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M12 2v6M12 16v6M2 12h6M16 12h6M4.5 4.5l4 4M15.5 15.5l4 4M19.5 4.5l-4 4M8.5 15.5l-4 4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "live",
    label: "Live dealer",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.85" />
      </svg>
    ),
  },
];

type Props = {
  query: string;
  onQueryChange: (v: string) => void;
  activeCategory: string;
  onCategoryChange: (id: string) => void;
};

export function CasinoToolbar({ query, onQueryChange, activeCategory, onCategoryChange }: Props) {
  return (
    <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center">
      <div className="relative flex-1 lg:max-w-xs">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--accent)]">
          <IconSearch className="h-4 w-4" />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search game..."
          className="w-full rounded-lg border border-white/10 bg-[#1e1e1e] py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-gray-500 focus:border-[var(--accent)]/50 focus:outline-none"
        />
      </div>
      <div className="flex flex-1 flex-wrap gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onCategoryChange(c.id)}
            className={`flex min-w-[4.5rem] flex-col items-center gap-0.5 rounded-lg px-2 py-2 text-[0.6rem] font-black uppercase tracking-wide transition sm:min-w-[5.5rem] sm:px-3 sm:text-[0.65rem] ${
              activeCategory === c.id ? "bg-orange-500 text-black" : "bg-[#1e1e1e] text-gray-300 hover:border hover:border-white/10"
            }`}
          >
            <span className="flex h-6 items-center justify-center leading-none [&>svg]:text-current">{c.icon}</span>
            {c.badge ? (
              <span className={`text-[0.55rem] ${activeCategory === c.id ? "text-yellow-900" : "text-yellow-400"}`}>{c.badge}</span>
            ) : null}
            <span className="text-center leading-tight">{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
