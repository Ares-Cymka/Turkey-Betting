import Image from "next/image";
import { popularCasinoGames } from "@/lib/mock-casino";

export function CasinoPopularGames() {
  return (
    <section className="mb-8">
      <div className="relative flex items-center justify-center py-2">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <h2 className="relative bg-black px-4 text-center text-sm font-black uppercase tracking-[0.25em] text-[var(--accent)] md:text-base">
          Popular games
        </h2>
      </div>

      <div className="mt-4 rounded-xl border-2 border-orange-500/40 bg-black/40 p-3 md:p-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
          {popularCasinoGames.map((g) => (
            <article
              key={g.id}
              className="group overflow-hidden rounded-lg border border-white/10 bg-[#1a1a1a] shadow-md transition hover:border-[var(--accent)]/50"
            >
              <div className="relative aspect-square">
                <Image src={g.image} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="150px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                <p className="absolute bottom-1 left-1 right-1 text-center text-[0.6rem] font-bold leading-tight text-white sm:text-xs">
                  {g.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
