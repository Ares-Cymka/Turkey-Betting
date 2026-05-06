"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useState } from "react";
import { IconCalendar, IconFlame, IconTarget } from "@/components/icons";

const STAKES = [20, 50, 100, 500] as const;

const IMG_ESPORTS = "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=75&auto=format&fit=crop";
const IMG_STADIUM = "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=75&auto=format&fit=crop";

function WidgetHeroStrip({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative -mx-4 -mt-4 mb-3 h-[4.5rem] overflow-hidden rounded-t-xl border-b border-white/8">
      <Image src={src} alt={alt} fill unoptimized className="object-cover" sizes="(max-width:1024px) 100vw, 360px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/70 to-transparent" />
    </div>
  );
}

function MiniBetPanel({ title, icon }: { title: string; icon: ReactNode }) {
  const [stake, setStake] = useState(100);

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-white/8 bg-[#1e1e1e]">
      <WidgetHeroStrip src={IMG_ESPORTS} alt="" />
      <div className="flex flex-col p-4 pt-0">
        <h3 className="flex items-center gap-2 text-sm font-black text-white">
          <span className="text-[var(--accent-bright)]">{icon}</span> {title}
        </h3>
        <div className="mt-2 space-y-1.5 text-xs text-gray-300">
          <p className="font-semibold text-white">NAVI vs FaZe — Map 1 winner</p>
          <p className="text-[var(--accent)]">+142 · CS2 · Today</p>
          <div className="rounded-md bg-emerald-500/15 px-2 py-1 text-center text-[0.65rem] font-bold text-emerald-400">
            x1.12 combo boost (demo)
          </div>
        </div>
        <input
          type="text"
          readOnly
          value={`${stake} TRY`}
          className="mt-3 w-full rounded-lg border border-white/10 bg-[#121212] px-3 py-2 text-center text-sm font-bold text-white"
        />
        <div className="mt-2 grid grid-cols-4 gap-1">
          {STAKES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStake(s)}
              className={`rounded-md py-1.5 text-xs font-black transition ${
                stake === s
                  ? "bg-[var(--accent)] text-black ring-2 ring-[var(--accent)]/40"
                  : "bg-[#2a2a2a] text-gray-300 hover:bg-[#333] hover:text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="mt-3 flex justify-between text-[0.65rem] text-gray-500">
          <span>Total odds</span>
          <span className="font-bold text-white">3.85</span>
        </div>
        <div className="flex justify-between text-[0.65rem] text-gray-500">
          <span>Potential win</span>
          <span className="font-bold text-emerald-400">{(stake * 3.85).toFixed(0)} TRY</span>
        </div>
        <button type="button" className="btn-cta-primary mt-3 w-full rounded-lg py-2.5 text-xs font-black uppercase">
          Place bet
        </button>
      </div>
    </div>
  );
}

const OUTRIGHT_TABS = ["CS2", "LoL", "Dota 2", "Rocket League"] as const;

export function LiveTopWidgets() {
  const [outTab, setOutTab] = useState(0);

  return (
    <section className="mb-8 grid gap-4 lg:grid-cols-3">
      <MiniBetPanel title="Hot combos" icon={<IconFlame className="h-4 w-4" />} />
      <div className="flex flex-col overflow-hidden rounded-xl border border-white/8 bg-[#1e1e1e]">
        <WidgetHeroStrip src={IMG_STADIUM} alt="" />
        <div className="flex flex-1 flex-col p-4 pt-0">
          <h3 className="flex items-center gap-2 text-sm font-black text-white">
            <IconTarget className="h-4 w-4 text-[var(--accent-bright)]" /> Top events
          </h3>
          <p className="mt-1 text-[0.65rem] text-gray-500">EMEA · VCT demo stage</p>
          <p className="mt-2 font-mono text-xs font-bold text-[var(--accent)]">Starts in 14m 08s</p>
          <p className="mt-1 text-xs font-semibold text-white">Team Liquid vs Fnatic</p>
          <div className="mt-3 grid grid-cols-3 gap-2 rounded-lg bg-black/20 p-2 text-center">
            <div>
              <p className="text-[0.65rem] text-gray-500">TL</p>
              <p className="mt-1 text-lg font-black text-white">-185</p>
            </div>
            <div>
              <p className="text-[0.65rem] text-gray-500">Draw</p>
              <p className="mt-1 text-lg font-black text-white">+340</p>
            </div>
            <div>
              <p className="text-[0.65rem] text-gray-500">FNC</p>
              <p className="mt-1 text-lg font-black text-white">+420</p>
            </div>
          </div>
          <button type="button" className="btn-cta-primary mt-auto w-full rounded-lg py-2.5 text-xs font-black uppercase">
            Place bet
          </button>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden rounded-xl border border-white/8 bg-[#1e1e1e]">
        <WidgetHeroStrip src={IMG_ESPORTS} alt="" />
        <div className="flex flex-1 flex-col p-4 pt-0">
          <h3 className="flex items-center gap-2 text-sm font-black text-white">
            <IconCalendar className="h-4 w-4 text-[var(--accent-bright)]" /> Top outrights
          </h3>
          <div className="mt-3 flex flex-wrap gap-1">
            {OUTRIGHT_TABS.map((s, i) => (
              <button
                key={s}
                type="button"
                onClick={() => setOutTab(i)}
                className={`rounded-full px-2.5 py-1 text-[0.6rem] font-bold transition ${
                  outTab === i
                    ? "bg-[var(--accent)] text-black ring-2 ring-[var(--accent)]/35"
                    : "border border-transparent bg-[#2a2a2a] text-gray-400 hover:border-white/15 hover:text-gray-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs font-bold text-white">Intel Grand Slam — Winner</p>
          <p className="text-[0.65rem] text-gray-500">Closes Aug 31</p>
          <ul className="mt-2 max-h-28 space-y-1 overflow-y-auto text-xs">
            {[
              ["FaZe Clan", "+280"],
              ["Natus Vincere", "+340"],
              ["MOUZ", "+520"],
            ].map(([team, odd]) => (
              <li key={team} className="flex justify-between gap-2 text-gray-300">
                <span className="truncate">{team}</span>
                <span className="shrink-0 font-bold text-[var(--accent-bright)]">{odd}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="btn-outline-gold mt-auto rounded-lg py-2 text-xs font-bold">
            Go to outright
          </button>
        </div>
      </div>
    </section>
  );
}
