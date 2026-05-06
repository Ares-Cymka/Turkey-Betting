import type { EsportGameId } from "@/lib/mock-esports";

export function EsportGameIcon({ gameId, className }: { gameId: EsportGameId; className?: string }) {
  const c = className ?? "h-5 w-5 shrink-0";
  switch (gameId) {
    case "cs2":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18" strokeLinecap="round" />
        </svg>
      );
    case "valorant":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M12 2l8 5v10l-8 5-8-5V7l8-5z" strokeLinejoin="round" />
          <path d="M12 8v8M8 12h8" strokeLinecap="round" />
        </svg>
      );
    case "dota2":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M12 3L4 7v10l8 4 8-4V7l-8-4z" strokeLinejoin="round" />
          <path d="M12 7v10M7 10l10 4M17 10L7 14" strokeLinecap="round" />
        </svg>
      );
    case "lol":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M6 20V10l6-6 6 6v10" strokeLinejoin="round" />
          <path d="M9 14h6M12 11v6" strokeLinecap="round" />
        </svg>
      );
    case "r6":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <rect x="5" y="9" width="14" height="10" rx="1" />
          <path d="M8 9V7a4 4 0 0 1 8 0v2" strokeLinecap="round" />
        </svg>
      );
    case "nba2k":
      return (
        <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3c-3 4-3 14 0 18M12 3c3 4 3 14 0 18" strokeLinecap="round" />
        </svg>
      );
  }
}
