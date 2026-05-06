import { NextResponse } from "next/server";
import { myBets } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    total: myBets.length,
    items: myBets,
  });
}
