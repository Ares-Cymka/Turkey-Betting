"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { IconChevronLeft, IconChevronRight } from "@/components/icons";

const GAMES = [
  { title: "Golden Reels", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&q=80&auto=format&fit=crop" },
  { title: "Neon Fortune", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80&auto=format&fit=crop" },
  { title: "Desert Kings", image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80&auto=format&fit=crop" },
  { title: "Lucky Spin", image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80&auto=format&fit=crop" },
  { title: "Mythic Quest", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80&auto=format&fit=crop" },
  { title: "Turbo Slots", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&q=80&auto=format&fit=crop" },
  { title: "Star Jackpot", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80&auto=format&fit=crop" },
  { title: "Crown Vault", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&q=80&auto=format&fit=crop" },
  { title: "Sapphire Spin", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80&auto=format&fit=crop" },
  { title: "Neon Dice", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&q=80&auto=format&fit=crop" },
  { title: "Royal Flush", image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=400&q=80&auto=format&fit=crop" },
  { title: "Lunar Wins", image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80&auto=format&fit=crop" },
  { title: "Phoenix Rise", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80&auto=format&fit=crop" },
] as const;

export function CasinoSection() {
  const scroller = useRef<HTMLDivElement>(null);

  function scrollByDir(dir: number) {
    scroller.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  }

  return (
    <section id="casino" className="mb-10 scroll-mt-24">
      <h2 className="section-glow-title text-center text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
        Casino
      </h2>
      <p className="mt-2 text-center text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
        Top games of the last 24 hours
      </p>

      <div className="relative mt-6">
        <button
          type="button"
          onClick={() => scrollByDir(-1)}
          className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-xl text-white md:flex"
          aria-label="Scroll left"
        >
          <IconChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByDir(1)}
          className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white md:flex"
          aria-label="Scroll right"
        >
          <IconChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {GAMES.map((g) => (
            <article
              key={g.title}
              className="panel relative w-[140px] shrink-0 snap-start overflow-hidden border-[var(--line)] transition-transform hover:scale-[1.02] sm:w-[160px]"
            >
              <div className="relative aspect-[3/4]">
                <Image src={g.image} alt="" fill className="object-cover" sizes="160px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <p className="absolute bottom-2 left-2 right-2 text-center text-[0.7rem] font-bold leading-tight text-white">
                  {g.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/casino"
          className="btn-outline-gold rounded-md px-8 py-2.5 text-sm font-black uppercase tracking-widest"
        >
          See all games &gt;&gt;
        </Link>
      </div>
    </section>
  );
}
