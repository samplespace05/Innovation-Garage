// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json(); // Expects { email: "..." }

// const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET; 

//     if (!GOOGLE_SCRIPT_URL) {
//       return NextResponse.json({ message: "Config Error" }, { status: 500 });
//     }

//     const payload = {
//       sheetName: "Newsletter", // <--- TARGETS THE NEW TAB
//       email: body.email
//     };

//     const response = await fetch(GOOGLE_SCRIPT_URL, {
//       method: "POST",
//       headers: { "Content-Type": "text/plain;charset=utf-8" },
//       body: JSON.stringify(payload),
//     });

//     const result = await response.json();

//     if (result.result === "success") {
//       return NextResponse.json({ message: "Success" }, { status: 200 });
//     } else {
//       throw new Error(result.error);
//     }

//   } catch (error) {
//     return NextResponse.json({ message: "Failed", error }, { status: 500 });
//   }
// }





import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET; 
    
    // We send 'sheetName: "Newsletter"' which triggers the Welcome Email logic in Google Script
    const payload = {
      sheetName: "Newsletter",
      email: email
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
      throw new Error("Google Script Error");
    }

  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}