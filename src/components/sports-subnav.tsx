"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { id: "home", href: "/", label: "Home", Icon: IconHome },
  { id: "live", href: "/live", label: "Live", Icon: IconLiveBox },
  { id: "fav", href: "/events", label: "Fav", Icon: IconStar },
  { id: "bets", href: "/my-bets", label: "Bets", Icon: IconDoc },
  { id: "soccer", href: "/live", label: "Soccer", Icon: IconSoccer },
  { id: "hoops", href: "/live", label: "Hoops", Icon: IconBasket },
  { id: "tennis", href: "/live", label: "Tennis", Icon: IconTennis },
  { id: "baseball", href: "/live", label: "Base", Icon: IconBaseball },
  { id: "esports", href: "/esports", label: "Esports", Icon: IconGamepad },
  { id: "racing", href: "/racebook", label: "Racing", Icon: IconHorse },
] as const;

function IconHome({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 11 12 4l8 7v10a1 1 0 0 1-1 1h-5v-7H10v7H5a1 1 0 0 1-1-1V11z" strokeLinejoin="round" />
    </svg>
  );
}

function IconLiveBox({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M13 10l-2 4h4l-2 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.9 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" strokeLinejoin="round" />
    </svg>
  );
}

function IconDoc({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 3h7l3 3v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" strokeLinejoin="round" />
      <path d="M14 3v4h4" strokeLinejoin="round" />
    </svg>
  );
}

function IconSoccer({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" />
    </svg>
  );
}

function IconBasket({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-3 4-3 14 0 18M12 3c3 4 3 14 0 18" />
    </svg>
  );
}

function IconTennis({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="9" cy="9" r="6" />
      <path d="M14 14l7 7" strokeLinecap="round" />
    </svg>
  );
}

function IconBaseball({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M7 16c4-2 6-6 8-10M9 18c3-3 5-7 7-11" strokeLinecap="round" />
    </svg>
  );
}

function IconGamepad({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M6 11h4v4H6V11zm10-1h2m-1-1v2M8 21h8a6 6 0 0 0 6-6v-2a6 6 0 0 0-6-6H8a6 6 0 0 0-6 6v2a6 6 0 0 0 6 6z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHorse({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M4 18c1.5-4 4-6 8-6.5M8 11.5l2-6 4-.5 2 3.5 3 1M6 18h12M9 5.5c1-1 3-1.5 5-1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SportsSubnav() {
  const pathname = usePathname();

  return (
    <div className="border-b border-white/8 bg-[#121212]">
      <div className="container-shell flex items-center gap-1 overflow-x-auto py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ITEMS.map((item) => {
          const active =
            (item.id === "live" && pathname === "/live") ||
            (item.id === "home" && pathname === "/") ||
            (item.id === "fav" && pathname === "/events") ||
            (item.id === "bets" && pathname === "/my-bets") ||
            (item.id === "racing" && pathname === "/racebook") ||
            (item.id === "esports" && pathname === "/esports");

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex min-w-[3.25rem] flex-col items-center gap-0.5 rounded-lg px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wide transition ${
                active ? "text-[var(--accent)]" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <item.Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
