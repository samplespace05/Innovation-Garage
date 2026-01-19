// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { password, sheetName } = body;

//     // 1. SECURITY: Read from Environment Variable
//     const ADMIN_PASS = process.env.ADMIN_PASS;

//     // Safety Check: If env var is missing on server, block everything
//     if (!ADMIN_PASS) {
//       return NextResponse.json({ success: false, error: "Server Configuration Error: Password not set." }, { status: 500 });
//     }

//     // Compare Input vs Env Variable
//     if (password !== ADMIN_PASS) {
//       return NextResponse.json({ success: false, error: "ACCESS DENIED: Invalid Credentials" }, { status: 401 });
//     }

//     // 2. FETCH FROM GOOGLE SHEETS
//     const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET; 
    
//     if (!GOOGLE_SCRIPT_URL) {
//        return NextResponse.json({ success: false, error: "Server Configuration Error: Sheet URL not set." }, { status: 500 });
//     }

//     const payload = {
//       action: "getAdminData",
//       sheetName: sheetName 
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
//       throw new Error(result.error);
//     }

//   } catch (error) {
//     return NextResponse.json({ success: false, error: "Network/Server Error" }, { status: 500 });
//   }
// }










// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { password, sheetName, action, subject, message } = body;

//     // 1. SECURITY CHECK
//     const ADMIN_PASS = process.env.ADMIN_PASS;
//     if (!ADMIN_PASS) {
//       return NextResponse.json({ success: false, error: "Server Error: Password not configured." }, { status: 500 });
//     }

//     if (password !== ADMIN_PASS) {
//       return NextResponse.json({ success: false, error: "ACCESS DENIED: Invalid Credentials" }, { status: 401 });
//     }

//     // 2. PREPARE PAYLOAD FOR GOOGLE
//     const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET; 
    
//     // If no specific action is sent, default to "getAdminData" (for viewing tables)
//     const payload = {
//       action: action || "getAdminData",
//       sheetName: sheetName,
//       // Pass broadcast fields (undefined if not a broadcast, which is fine)
//       subject: subject,
//       message: message
//     };

//     // 3. SEND TO GOOGLE SCRIPT
//     const response = await fetch(GOOGLE_SCRIPT_URL!, {
//       method: "POST",
//       headers: { "Content-Type": "text/plain;charset=utf-8" },
//       body: JSON.stringify(payload),
//     });

//     const result = await response.json();

//     if (result.result === "success") {
//       return NextResponse.json({ success: true, data: result.data || result.message }, { status: 200 });
//     } else {
//       throw new Error(result.error);
//     }

//   } catch (error: any) {
//     return NextResponse.json({ success: false, error: error.message || "Network Error" }, { status: 500 });
//   }
// }   


import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { password, action, sheetName, ...rest } = body; // Capture all other fields in 'rest'

    // 1. SECURITY CHECK
    const ADMIN_PASS = process.env.ADMIN_PASS;
    if (!ADMIN_PASS) {
      return NextResponse.json({ success: false, error: "Server Error: Password not configured." }, { status: 500 });
    }

    if (password !== ADMIN_PASS) {
      return NextResponse.json({ success: false, error: "ACCESS DENIED: Invalid Credentials" }, { status: 401 });
    }

    // 2. PREPARE PAYLOAD
    const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET; 
    
    // Construct the payload dynamically
    const payload = {
      action: action || "getAdminData",
      sheetName: sheetName,
      ...rest // Pass everything else (subject, message, formConfig, etc.)
    };

    // 3. SEND TO GOOGLE SCRIPT
    const response = await fetch(GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.result === "success") {
      return NextResponse.json({ success: true, data: result.data || result.message }, { status: 200 });
    } else {
      throw new Error(result.error);
    }

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || "Network Error" }, { status: 500 });
  }
}