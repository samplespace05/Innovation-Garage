import { NextResponse } from "next/server";

export async function GET() {
  try {
    const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET;
    const payload = { action: "getPublicEvents" };

    const response = await fetch(GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    // Cache control: Revalidate every 60 seconds so the site feels "live" but doesn't spam Google
    return NextResponse.json({ success: true, data: result.data }, { 
        status: 200, 
        headers: { "Cache-Control": "s-maxage=60, stale-while-revalidate" } 
    });

  } catch (error) {
    return NextResponse.json({ success: false, data: [] }, { status: 500 });
  }
}