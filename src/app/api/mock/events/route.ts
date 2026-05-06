import { NextResponse } from "next/server";
import { featuredMatches } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    total: featuredMatches.length,
    items: featuredMatches,
  });
}
