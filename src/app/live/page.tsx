import type { Metadata } from "next";
import { IconClock } from "@/components/icons";
import { LiveHighlights } from "@/components/live-highlights";
import { LiveMatchCard } from "@/components/live-match-card";
import { LiveSportChips } from "@/components/live-sport-chips";
import { LiveTopWidgets } from "@/components/live-top-widgets";
import { MobileBottomNav, TopHeader } from "@/components/platform-ui";
import { PopularSportsTabs } from "@/components/popular-sports-tabs";
import { SportsSubnav } from "@/components/sports-subnav";
import { liveMatches } from "@/lib/mock-live";

export const metadata: Metadata = {
  title: "Live | Turkey Bet",
  description: "Live and in-play betting — demo",
};

const liveNow = liveMatches.filter((m) => m.isLive || m.ended);
const upcoming = liveMatches.filter((m) => !m.isLive && !m.ended);

export default function LivePage() {
  return (
    <div className="page-doodles pb-20 md:pb-0">
      <TopHeader />
      <SportsSubnav />
      <main className="container-shell py-4">
        <h1 className="sr-only">Live betting</h1>
        <LiveTopWidgets />
        <LiveHighlights />
        <PopularSportsTabs />
        <div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {liveNow.map((m) => (
            <LiveMatchCard key={m.id} match={m} />
          ))}
        </div>

        <LiveSportChips />
        <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {liveMatches.map((m) => (
            <LiveMatchCard key={`row2-${m.id}`} match={m} />
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
            <IconClock className="h-4 w-4" />
          </span>
          <h2 className="text-lg font-black uppercase tracking-wide text-white">Upcoming</h2>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {upcoming.map((m) => (
            <LiveMatchCard key={`up-${m.id}`} match={m} />
          ))}
        </div>
      </main>
      <MobileBottomNav />
    </div>
  );
}
