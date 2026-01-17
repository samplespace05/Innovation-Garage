import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Expects { email: "..." }

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx2Wgazb3uSEJ2sDdWyADAh8cbsHf1THO2L0kVHjX_QESThvXgd02NauekOn2E6H9eP/exec";

    if (!GOOGLE_SCRIPT_URL) {
      return NextResponse.json({ message: "Config Error" }, { status: 500 });
    }

    const payload = {
      sheetName: "Newsletter", // <--- TARGETS THE NEW TAB
      email: body.email
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.result === "success") {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    } else {
      throw new Error(result.error);
    }

  } catch (error) {
    return NextResponse.json({ message: "Failed", error }, { status: 500 });
  }
}