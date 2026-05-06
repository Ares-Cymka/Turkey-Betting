"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { BetItem, MatchItem } from "@/lib/mock-data";

function IconHome({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" strokeLinejoin="round" />
    </svg>
  );
}

function IconTicket({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 8.5c1.5-1.5 4.5-1.5 6 0M4 15.5c1.5 1.5 4.5 1.5 6 0M14 5l6 7-6 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconZap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" strokeLinejoin="round" />
    </svg>
  );
}

function IconCastle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 20V10l4-4V6l2-2h4l2 2v2l4 4v10H4z" strokeLinejoin="round" />
      <path d="M9 20v-6h6v6" strokeLinejoin="round" />
    </svg>
  );
}

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20v-1a7 7 0 0 1 7-7h2a7 7 0 0 1 7 7v1" strokeLinecap="round" />
    </svg>
  );
}

const NAV_MAIN: readonly { label: string; href: string; dropdown?: boolean }[] = [
  { label: "Sports", href: "/events" },
  { label: "Live", href: "/live" },
  { label: "Casino", href: "/casino" },
  { label: "Esports", href: "/esports" },
  { label: "Racebook", href: "/racebook" },
];

export function TopHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[var(--nav)] text-white backdrop-blur-xl">
      <div className="container-shell flex items-center gap-3 py-2.5 md:gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image src="/logo.svg" alt="" width={36} height={36} className="h-8 w-8 md:h-9 md:w-9" priority />
          <span className="text-lg font-black lowercase tracking-tight text-white md:text-xl">
            turkey<span className="text-[var(--accent)]">bet</span>
          </span>
        </Link>

        <nav className="mx-auto hidden flex-1 justify-center gap-6 lg:flex">
          {NAV_MAIN.map((item) => {
            const active =
              (item.href === "/events" && pathname === "/events") ||
              (item.href === "/live" && pathname === "/live") ||
              (item.href === "/casino" && pathname === "/casino") ||
              (item.href === "/racebook" && pathname === "/racebook") ||
              (item.href === "/esports" && pathname === "/esports");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-0.5 border-b-2 pb-0.5 text-xs font-black uppercase tracking-widest transition hover:text-[var(--accent-bright)] ${
                  active ? "border-[var(--accent)] text-[var(--accent-bright)]" : "border-transparent text-gray-200"
                }`}
              >
                {item.label}
                {item.dropdown ? <IconChevronDown className="h-3.5 w-3.5 text-gray-500" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          {pathname === "/login" ? (
            <Link
              href="/"
              className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-bold text-white sm:text-sm"
            >
              Home
            </Link>
          ) : (
            <>
              <button
                type="button"
                className="hidden items-center gap-1 rounded-md border border-[var(--accent)]/80 bg-black px-2 py-1.5 text-[0.65rem] font-black uppercase text-[var(--accent-bright)] md:flex"
              >
                <IconCastle className="h-4 w-4" />
                Arena
              </button>
              <button
                type="button"
                className="hidden items-center gap-1 rounded-md border border-white/15 bg-[var(--panel)] px-2 py-1.5 text-[0.65rem] font-bold text-gray-200 lg:flex"
              >
                Balance <span className="text-[var(--accent)]">TRY 0.00</span>
                <IconChevronDown className="h-3.5 w-3.5 text-gray-500" />
              </button>
              <Link
                href="/login"
                className="btn-cta-primary rounded-md px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-wide sm:px-4 sm:text-xs"
              >
                Deposit
              </Link>
              <Link
                href="/login"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[var(--panel)] text-gray-200"
                aria-label="Account"
              >
                <IconUser className="h-5 w-5" />
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export function MobileBottomNav() {
  const pathname = usePathname();
  const items = [
    { href: "/", label: "Home", Icon: IconHome },
    { href: "/live", label: "Live", Icon: IconZap },
    { href: "/my-bets", label: "Slips", Icon: IconTicket },
  ] as const;

  return (
    <nav className="nav-bottom-safe fixed bottom-0 left-0 right-0 z-20 md:hidden">
      <div className="grid grid-cols-3">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 py-2 text-[0.65rem] font-bold transition-colors ${
                active ? "nav-link-active" : "text-slate-500"
              }`}
            >
              <item.Icon className={`h-5 w-5 ${active ? "text-[var(--accent-bright)]" : "text-slate-500"}`} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function MatchCard({ match, staggerIndex = 0 }: { match: MatchItem; staggerIndex?: number }) {
  return (
    <article
      className="group panel card-hover match-card-enter overflow-hidden border-[var(--line)] p-0"
      style={{ animationDelay: `${staggerIndex * 0.07}s` }}
    >
      <div className="relative h-28 w-full">
        <Image
          src={match.imageUrl}
          alt={`${match.home} vs ${match.away}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
        <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between text-[0.7rem] font-bold text-white drop-shadow-md">
          <span className="text-[var(--accent-bright)]/95">{match.league}</span>
          <span className="rounded-md border border-white/10 bg-black/40 px-2 py-0.5 backdrop-blur-sm">{match.time}</span>
        </div>
        {match.live ? (
          <div className="absolute left-3 top-2 flex items-center gap-1.5 rounded-md border border-[var(--accent)]/40 bg-black/55 px-2 py-1 text-[0.65rem] font-extrabold uppercase tracking-wider text-[var(--accent-bright)] backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)] shadow-[0_0_8px_rgba(255,184,0,0.8)]" />
            Live
          </div>
        ) : null}
      </div>
      <div className="space-y-3 bg-[var(--panel)] p-3">
        <div>
          <p className="font-bold leading-tight text-white">{match.home}</p>
          <p className="font-bold leading-tight text-gray-400">{match.away}</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {match.odds.map((odd, idx) => (
            <button key={`${match.id}-${idx}`} type="button" className="odds-btn">
              {odd.toFixed(2)}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

export function BetHistoryCard({ bet }: { bet: BetItem }) {
  const accentClass =
    bet.status === "Won"
      ? "bet-card-accent--won"
      : bet.status === "Lost"
        ? "bet-card-accent--lost"
        : "bet-card-accent--pending";
  const statusClass =
    bet.status === "Won"
      ? "bg-emerald-500/15 text-emerald-300"
      : bet.status === "Lost"
        ? "bg-red-500/15 text-red-300"
        : "bg-amber-500/15 text-amber-200";

  return (
    <article className={`panel card-hover bet-card-accent ${accentClass} overflow-hidden border-white/6 p-4`}>
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-white">{bet.selection}</p>
        <span className={`status-chip shrink-0 ${statusClass}`}>{bet.status}</span>
      </div>
      <p className="text-xs text-[var(--muted)]">{bet.date}</p>
      <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
        <div>
          <p className="text-xs text-[var(--muted)]">Odd</p>
          <p className="font-bold text-[var(--accent-bright)]">{bet.odd.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-xs text-[var(--muted)]">Stake</p>
          <p className="font-bold text-slate-200">{bet.stake}</p>
        </div>
        <div>
          <p className="text-xs text-[var(--muted)]">Potential</p>
          <p className="font-bold text-slate-200">{bet.potentialWin}</p>
        </div>
      </div>
    </article>
  );
}
