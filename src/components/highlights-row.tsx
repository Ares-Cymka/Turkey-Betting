import Image from "next/image";
import { highlightCards } from "@/lib/mock-sportsbook";

export function HighlightsRow() {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-gray-500">Highlights</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {highlightCards.map((h) => (
          <article
            key={h.id}
            className="w-[min(260px,78vw)] shrink-0 overflow-hidden rounded-lg border border-white/8 bg-[#1e1e1e] shadow-lg"
          >
            <div className="relative h-24 w-full">
              <Image src={h.imageUrl} alt="" fill className="object-cover" sizes="260px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] to-transparent" />
              <span className="absolute left-2 top-2 inline-block rounded bg-[#4CAF50] px-2 py-0.5 text-[0.6rem] font-black uppercase text-white">
                Boost
              </span>
            </div>
            <div className="p-4">
              <p className="text-sm font-bold text-white">{h.title}</p>
              <p className="text-xs text-gray-500">{h.market}</p>
              <p className="mt-1 text-[0.65rem] text-gray-400">{h.when}</p>
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  className="flex-1 rounded-md bg-[#2a2a2a] py-2 text-center text-xs font-bold text-gray-300 transition hover:bg-[#333]"
                >
                  <span className="text-[#4CAF50]">{h.oddA}</span>
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-md bg-[#2a2a2a] py-2 text-center text-xs font-bold text-gray-300 transition hover:bg-[#333]"
                >
                  <span className="text-[#4CAF50]">{h.oddB}</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
