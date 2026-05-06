import { NextResponse } from "next/server";
import { featuredMatches } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    hero: {
      title: "Sports betting & live odds",
      subtitle: "Dark, fast UI inspired by modern sportsbook experiences — demo platform only.",
    },
    featuredMatches,
  });
}
