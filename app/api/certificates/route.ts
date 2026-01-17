import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Use the SAME Google Script URL you used for Ideas/Newsletter
    const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET; 

    if (!GOOGLE_SCRIPT_URL) {
      return NextResponse.json({ message: "Config Error" }, { status: 500 });
    }

    // Prepare payload for the "getCertificate" action
    const payload = {
      action: "getCertificate",
      email: body.email
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.result === "success") {
      return NextResponse.json({ success: true, data: result.data }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 404 });
    }

  } catch (error) {
    return NextResponse.json({ success: false, error: "Network Error" }, { status: 500 });
  }
}