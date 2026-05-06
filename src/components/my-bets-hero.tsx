import Image from "next/image";

const BANNER =
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80";

export function MyBetsHero() {
  return (
    <section className="relative mb-3 overflow-hidden rounded-2xl border border-[var(--line)]">
      <div className="relative h-32 w-full md:h-36">
        <Image
          src={BANNER}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-amber-950/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-6">
          <h1 className="text-xl font-black text-white md:text-2xl">My betting history</h1>
          <p className="text-sm text-[var(--accent-bright)]/90">Pending, won, and settled slips</p>
        </div>
      </div>
    </section>
  );
}
