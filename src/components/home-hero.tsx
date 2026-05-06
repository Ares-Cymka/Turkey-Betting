"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@/components/icons";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1600&q=80&auto=format&fit=crop",
    eyebrow: "Elite clashes",
    title: "Playoff fire",
    subtitle: "Big games, sharp lines, and live markets around the clock.",
  },
  {
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1600&q=80&auto=format&fit=crop",
    eyebrow: "World football",
    title: "Semi-finals energy",
    subtitle: "Build parlays, chase corners, and follow every minute live.",
  },
  {
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1600&q=80&auto=format&fit=crop",
    eyebrow: "Courts & turf",
    title: "Grand slam nights",
    subtitle: "Tennis, hoops, and more — one wallet for every sport.",
  },
  {
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600&q=80&auto=format&fit=crop",
    eyebrow: "Track & field",
    title: "Speed meets precision",
    subtitle: "Marathon odds, sprint specials, and futures in one scrollable lobby.",
  },
  {
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600&q=80&auto=format&fit=crop",
    eyebrow: "Night games",
    title: "Under the lights",
    subtitle: "Prime-time fixtures with live price flashes and cash-out previews.",
  },
  {
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=80&auto=format&fit=crop",
    eyebrow: "Hoops",
    title: "Court kings",
    subtitle: "Spreads, totals, and player props sized for fast mobile tickets.",
  },
] as const;

export function HomeHero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const t = window.setInterval(next, 7000);
    return () => window.clearInterval(t);
  }, [next]);

  const slide = SLIDES[index];

  return (
    <section className="relative mb-4 overflow-hidden rounded-2xl border border-[var(--line)] shadow-[0_0_60px_-20px_rgba(255,184,0,0.35)]">
      <div className="relative min-h-[300px] md:min-h-[380px]">
        {SLIDES.map((s, i) => (
          <div
            key={`${s.eyebrow}-${i}`}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "z-[1] opacity-100" : "z-0 opacity-0 pointer-events-none"}`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.image}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              className="object-cover hero-kenburns"
            />
          </div>
        ))}
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/92 via-black/65 to-black/35" />
        <div className="hero-mesh absolute inset-0 z-[2] opacity-50" aria-hidden />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_70%_50%_at_70%_20%,rgba(255,184,0,0.2),transparent)]" />

        <button
          type="button"
          onClick={prev}
          className="absolute left-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 md:flex"
          aria-label="Previous slide"
        >
          <IconChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 md:flex"
          aria-label="Next slide"
        >
          <IconChevronRight className="h-5 w-5" />
        </button>

        <div className="relative z-[5] flex min-h-[300px] flex-col justify-center px-5 py-10 md:min-h-[380px] md:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent)]">{slide.eyebrow}</p>
          <h1 className="mt-2 max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-5xl">
            <span className="text-[var(--accent-bright)]">{slide.title}</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300 md:text-base">{slide.subtitle}</p>
          <div className="mt-8">
            <Link
              href="/live"
              className="btn-cta-primary inline-flex rounded-full px-10 py-3.5 text-sm font-black uppercase tracking-widest"
            >
              Let&apos;s bet
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-2 md:justify-start">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-[var(--accent)]" : "w-2 bg-white/35 hover:bg-white/55"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
