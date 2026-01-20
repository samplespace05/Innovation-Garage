// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     // Use the SAME Google Script URL you used for Ideas/Newsletter
//     const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET; 

//     if (!GOOGLE_SCRIPT_URL) {
//       return NextResponse.json({ message: "Config Error" }, { status: 500 });
//     }

//     // Prepare payload for the "getCertificate" action
//     const payload = {
//       action: "getCertificate",
//       email: body.email
//     };

//     const response = await fetch(GOOGLE_SCRIPT_URL, {
//       method: "POST",
//       headers: { "Content-Type": "text/plain;charset=utf-8" },
//       body: JSON.stringify(payload),
//     });

//     const result = await response.json();

//     if (result.result === "success") {
//       return NextResponse.json({ success: true, data: result.data }, { status: 200 });
//     } else {
//       return NextResponse.json({ success: false, error: result.error }, { status: 404 });
//     }

//   } catch (error) {
//     return NextResponse.json({ success: false, error: "Network Error" }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Check if URL exists
    const googleUrl = process.env.NEXTAUTH_URL_GSHEET;
    if (!googleUrl) {
        return NextResponse.json({ success: false, error: "Missing Google URL in .env" }, { status: 500 });
    }

    // 2. Send to Google
    const googleResponse = await fetch(googleUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    // 3. Check for 401/403/302 from Google
    if (!googleResponse.ok) {
        console.error("❌ Google Blocked the Request. Status:", googleResponse.status);
        return NextResponse.json({ success: false, error: "Google Permission Error (Check Script Deployment)" }, { status: 401 });
    }

    const data = await googleResponse.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error("🔥 Server Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}