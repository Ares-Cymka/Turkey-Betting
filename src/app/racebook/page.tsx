import type { Metadata } from "next";
import Image from "next/image";
import { RacebookLobby } from "@/components/racebook-lobby";
import { MobileBottomNav, TopHeader } from "@/components/platform-ui";
import { SportsSubnav } from "@/components/sports-subnav";

export const metadata: Metadata = {
  title: "Racebook | Turkey Bet",
  description: "Horse racing, greyhound, and harness — demo racebook",
};

export default function RacebookPage() {
  return (
    <div className="page-doodles pb-20 md:pb-0">
      <TopHeader />
      <SportsSubnav />

      <section className="relative min-h-[12rem] overflow-hidden md:min-h-[14rem]">
        <Image
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1600&q=70&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover object-[center_30%] opacity-40 grayscale"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0a0a0a] to-[#0a0a0a]" />
      </section>

      <main className="container-shell relative z-[1] -mt-8 py-4 md:-mt-10">
        <h1 className="sr-only">Racebook</h1>
        <RacebookLobby />
      </main>

      <MobileBottomNav />
    </div>
  );
}
