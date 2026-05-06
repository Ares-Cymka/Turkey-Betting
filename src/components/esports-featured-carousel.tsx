"use client";

import Image from "next/image";
import { useRef } from "react";
import type { EsportFeaturedSlide } from "@/lib/mock-esports";

export function EsportsFeaturedCarousel({ slides }: { slides: EsportFeaturedSlide[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <div className="relative mb-8">
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        className="absolute left-0 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/80 text-white shadow-lg backdrop-blur md:flex"
        aria-label="Scroll featured left"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        className="absolute right-0 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/80 text-white shadow-lg backdrop-blur md:flex"
        aria-label="Scroll featured right"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" />
        </svg>
      </button>

      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto pb-2 pl-0 pr-0 [-ms-overflow-style:none] [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide) =>
          slide.kind === "boost" ? (
            <article
              key={slide.id}
              className="w-[min(100%,260px)] shrink-0 overflow-hidden rounded-xl border border-emerald-500/30 bg-[#1e1e1e] shadow-lg"
            >
              <div className="relative h-24 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=70&auto=format&fit=crop"
                  alt=""
                  fill
                  className="object-cover opacity-90"
                  sizes="260px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-black/50 to-transparent" />
                <span className="absolute left-2 top-2 inline-block rounded bg-emerald-500/25 px-2 py-0.5 text-[0.6rem] font-black uppercase text-emerald-400">
                  Boost
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm font-bold leading-snug text-white">{slide.title}</p>
                <p className="mt-1 text-xs text-gray-500">{slide.market}</p>
                <p className="mt-4 text-2xl font-black text-emerald-400">{slide.odd}</p>
              </div>
            </article>
          ) : (
            <article
              key={slide.id}
              className="w-[min(100%,280px)] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e]"
            >
              <div className="flex items-center justify-between border-b border-white/8 px-3 py-2">
                <span className="text-[0.65rem] font-bold text-gray-400">{slide.league}</span>
                <span className="text-[0.65rem] text-gray-500">{slide.time}</span>
              </div>
              <div className="relative h-28 w-full">
                <Image src={slide.imageUrl} alt="" fill className="object-cover" sizes="280px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[0.7rem] font-black text-white">
                  <span className="max-w-[40%] truncate">{slide.team1}</span>
                  <span className="max-w-[40%] truncate text-right">{slide.team2}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 p-3">
                <button
                  type="button"
                  className="rounded-lg border border-white/10 bg-[#2a2a2a] py-2 text-center text-sm font-black text-white transition hover:border-[var(--accent)]/40"
                >
                  1 <span className="text-sky-200">{slide.odd1}</span>
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-white/10 bg-[#2a2a2a] py-2 text-center text-sm font-black text-white transition hover:border-[var(--accent)]/40"
                >
                  2 <span className="text-sky-200">{slide.odd2}</span>
                </button>
              </div>
            </article>
          ),
        )}
      </div>
    </div>
  );
}
