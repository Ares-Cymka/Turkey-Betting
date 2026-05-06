import type { Metadata } from "next";
import { CasinoHeroCarousel } from "@/components/casino-hero-carousel";
import { CasinoInfoBlock } from "@/components/casino-info-block";
import { CasinoLobby } from "@/components/casino-lobby";
import { CasinoPopularGames } from "@/components/casino-popular-games";
import { MobileBottomNav, TopHeader } from "@/components/platform-ui";

export const metadata: Metadata = {
  title: "Casino | Turkey Bet",
  description: "Slots, tables, and live lobby — demo UI",
};

export default function CasinoPage() {
  return (
    <div className="page-doodles pb-24 md:pb-10">
      <TopHeader />
      <main className="container-shell py-4">
        <h1 className="sr-only">Casino</h1>
        <CasinoHeroCarousel />
        <CasinoPopularGames />
        <CasinoLobby />
        <CasinoInfoBlock />
      </main>
      <MobileBottomNav />
    </div>
  );
}
