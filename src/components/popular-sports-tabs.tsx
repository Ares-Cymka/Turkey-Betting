"use client";

import Link from "next/link";
import { useState } from "react";
import { IconTrending } from "@/components/icons";

const SPORTS = ["Basketball", "Soccer", "Baseball", "Ice Hockey", "Tennis", "Esports"] as const;

const chipInactive = "border border-white/10 bg-[#1e1e1e] text-gray-300 hover:border-[var(--accent)]/40";
const chipActive = "bg-[var(--accent)] text-black";
const chipLayout = "shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition";

export function PopularSportsTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="flex items-center gap-1.5 text-sm font-black text-white">
        <IconTrending className="h-4 w-4 text-[var(--accent)]" />
        Popular
      </span>
      <div className="flex flex-1 flex-wrap gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SPORTS.map((s, i) => {
          const selected = i === active;

          if (s === "Esports") {
            return (
              <Link key={s} href="/esports" className={`${chipLayout} ${chipInactive} inline-flex items-center`}>
                {s}
              </Link>
            );
          }

          return (
            <button
              key={s}
              type="button"
              onClick={() => setActive(i)}
              className={`${chipLayout} ${selected ? chipActive : chipInactive}`}
            >
              {s}
            </button>
          );
        })}
      </div>
    </div>
  );
}
