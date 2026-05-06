"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { casinoGameGrid } from "@/lib/mock-casino";

const PAGE = 16;

type Props = {
  query: string;
};

export function CasinoGameGrid({ query }: Props) {
  const [count, setCount] = useState(PAGE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return casinoGameGrid;
    return casinoGameGrid.filter((g) => g.title.toLowerCase().includes(q));
  }, [query]);

  const visible = filtered.slice(0, count);
  const hasMore = count < filtered.length;

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {visible.map((g) => (
          <button
            key={g.id}
            type="button"
            className="group overflow-hidden rounded-xl border border-white/8 bg-[#1e1e1e] text-left shadow-md transition hover:border-orange-500/40"
          >
            <div className="relative aspect-[3/4]">
              <Image src={g.image} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="200px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <p className="absolute bottom-2 left-2 right-2 text-center text-[0.65rem] font-bold leading-tight text-white sm:text-xs">
                {g.title}
              </p>
            </div>
          </button>
        ))}
      </div>
      {hasMore ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setCount((c) => c + PAGE)}
            className="btn-outline-gold rounded-lg px-10 py-2.5 text-sm font-black uppercase tracking-wide"
          >
            Load more
          </button>
        </div>
      ) : null}
    </div>
  );
}
