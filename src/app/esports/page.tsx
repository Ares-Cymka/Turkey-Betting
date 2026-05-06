import type { Metadata } from "next";
import { EsportsLobby } from "@/components/esports-lobby";
import { MobileBottomNav, TopHeader } from "@/components/platform-ui";
import { SportsSubnav } from "@/components/sports-subnav";

export const metadata: Metadata = {
  title: "Esports | Turkey Bet",
  description: "Esports matches, live stream demo, and markets — preview",
};

export default function EsportsPage() {
  return (
    <div className="page-doodles pb-20 md:pb-0">
      <TopHeader />
      <SportsSubnav />
      <main className="container-shell py-4">
        <EsportsLobby />
      </main>
      <MobileBottomNav />
    </div>
  );
}
