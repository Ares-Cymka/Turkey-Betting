"use client";

import { useState } from "react";
import { CasinoGameGrid } from "@/components/casino-game-grid";
import { CasinoToolbar } from "@/components/casino-toolbar";

export function CasinoLobby() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("new");

  return (
    <>
      <CasinoToolbar
        query={query}
        onQueryChange={setQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <CasinoGameGrid key={activeCategory} query={query} />
    </>
  );
}
