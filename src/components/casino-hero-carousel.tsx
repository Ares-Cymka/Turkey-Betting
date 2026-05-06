"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
//Git Geniue
const SLIDES = [
  {
    sub: "Play slots, cards, and tables — demo promo pack",
    title: "200% welcome boost",
    code: "TRYBOOST",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80&auto=format&fit=crop",
  },
  {
    sub: "Weekly cashback & free rounds — mock campaign",
    title: "Spin the weekend",
    code: "SPINWKND",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80&auto=format&fit=crop",
  },
  {
    sub: "Live tables open 24/7 in this UI preview",
    title: "Live dealer nights",
    code: "LIVEPLAY",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80&auto=format&fit=crop",
  },
  {
    sub: "High volatility slots — mock tagline",
    title: "Megaways hour",
    code: "MEGAHOUR",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80&auto=format&fit=crop",
  },
  {
    sub: "Table classics with live hosts",
    title: "Roulette rush",
    code: "RLTFLASH",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&q=80&auto=format&fit=crop",
  },
  {
    sub: "Prize drops on selected titles",
    title: "Mystery multipliers",
    code: "MYSTERYX",
    image: "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?w=800&q=80&auto=format&fit=crop",
  },
] as const;

export function CasinoHeroCarousel() {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((x) => (x + 1) % SLIDES.length), []);
  useEffect(() => {
    const t = window.setInterval(next, 8000);
    return () => window.clearInterval(t);
  }, [next]);
  const s = SLIDES[i];

  return (
    <section className="relative mb-8 overflow-hidden rounded-2xl border border-orange-500/25 shadow-[0_0_50px_-20px_rgba(249,115,22,0.35)]">
      <div className="relative min-h-[220px] md:min-h-[280px]">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-[#1a0a0f] to-black" />
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.code}
            className={`absolute inset-0 transition-opacity duration-500 ${idx === i ? "z-[1] opacity-40" : "opacity-0 pointer-events-none"}`}
          >
            <Image src={slide.image} alt="" fill className="object-cover" sizes="1280px" />
          </div>
        ))}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

        <div className="relative z-[3] grid gap-6 p-6 md:min-h-[280px] md:grid-cols-2 md:items-center md:p-10">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gray-300 md:text-xs">{s.sub}</p>
            <h1 className="mt-3 text-3xl font-black uppercase leading-tight text-[var(--accent)] drop-shadow-md md:text-4xl lg:text-5xl">
              {s.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/login"
                className="rounded-lg bg-gradient-to-r from-orange-500 to-[var(--accent)] px-8 py-3 text-sm font-black uppercase tracking-wide text-black shadow-lg transition hover:brightness-110"
              >
                Claim now
              </Link>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/40 text-sm font-bold text-white hover:bg-white/10"
                aria-label="Promo info"
              >
                i
              </button>
            </div>
            <div className="mt-6 flex gap-1">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setI(idx)}
                  className={`h-1 rounded-full transition-all ${idx === i ? "w-8 bg-orange-500" : "w-6 bg-white/25"}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
            <p className="mt-4 inline-block rounded-sm border-2 border-dashed border-white/50 bg-white/95 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-wide text-gray-900">
              Promo code {s.code}
            </p>
          </div>
          <div className="relative hidden min-h-[180px] md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-48 w-48 rounded-full bg-gradient-to-br from-orange-400/30 to-yellow-500/10 blur-2xl" />
            </div>
            <div className="relative mx-auto aspect-square max-w-[280px] overflow-hidden rounded-xl border border-white/15 shadow-2xl">
              <Image
                src={s.image}
                alt=""
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
