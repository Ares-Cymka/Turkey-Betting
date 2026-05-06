"use client";

import { useState } from "react";

export function FilterChips({ items }: { items: string[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {items.map((label, i) => (
        <button
          key={label}
          type="button"
          onClick={() => setActive(i)}
          className={`filter-chip shrink-0 ${i === active ? "filter-chip-active" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
