import { NextResponse } from "next/server";
import data from "@/sample-data/data.json";

export async function GET() {
  try {
    return NextResponse.json(data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: "An unexpected error occurred", details: err },
      { status: 500 },
    );
  }
}
