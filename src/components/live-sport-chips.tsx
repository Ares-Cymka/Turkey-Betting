"use client";

import { useState } from "react";
import { IconLiveDot } from "@/components/icons";

const CHIPS = [
  "Basketball",
  "Tennis",
  "Ice Hockey",
  "Soccer",
  "NBA 2K",
  "eSoccer",
  "Counter-Strike",
  "Dota 2",
  "eHorse",
  "Volleyball",
] as const;

export function LiveSportChips() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-8 flex items-center gap-2 sm:mt-10">
      <span className="flex shrink-0 items-center gap-2 text-sm font-black text-white">
        <IconLiveDot />
        Live
      </span>
      <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CHIPS.map((c, i) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition ${
              i === active ? "bg-[var(--accent)] text-black" : "bg-[#1e1e1e] text-gray-400 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
