"use client";

import { useState } from "react";

const TABS = ["Highlights", "Predictions", "Event builder", "Bets feed"] as const;

export function EventViewTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {TABS.map((tab, i) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActive(i)}
          className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide transition ${
            i === active
              ? "bg-[#2a2a2a] text-white ring-1 ring-white/15"
              : "bg-transparent text-gray-500 hover:text-gray-300"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
