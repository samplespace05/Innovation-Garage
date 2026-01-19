import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET;

    const payload = {
      action: "registerEvent",
      eventID: body.eventID,
      eventName: body.eventName,
      common: body.common,
      customAnswers: body.customAnswers
    };

    const response = await fetch(GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    
    if (result.result === "success") {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      throw new Error(result.error);
    }

  } catch (error) {
    return NextResponse.json({ success: false, error: "Submission Failed" }, { status: 500 });
  }
}