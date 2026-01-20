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


// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { password, action, sheetName, ...rest } = body; // Capture all other fields in 'rest'

//     // 1. SECURITY CHECK
//     const ADMIN_PASS = process.env.ADMIN_PASS;
//     if (!ADMIN_PASS) {
//       return NextResponse.json({ success: false, error: "Server Error: Password not configured." }, { status: 500 });
//     }

//     if (password !== ADMIN_PASS) {
//       return NextResponse.json({ success: false, error: "ACCESS DENIED: Invalid Credentials" }, { status: 401 });
//     }

//     // 2. PREPARE PAYLOAD
//     const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET; 
    
//     // Construct the payload dynamically
//     const payload = {
//       action: action || "getAdminData",
//       sheetName: sheetName,
//       ...rest // Pass everything else (subject, message, formConfig, etc.)
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




// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     let { password, action, sheetName, ...rest } = body; 

//     // ---------------------------------------------------------
//     // 1. PUBLIC WHITELIST (No Password Required)
//     // ---------------------------------------------------------
//     const PUBLIC_ACTIONS = [
//         "getCertificate", 
//         "unlockCertificate", 
//         "getPublicEvents", 
//         "registerEvent",
//         "saveIdea",
//         "newsletter" 
//     ];

//     // ---------------------------------------------------------
//     // 2. ADMIN SECURITY CHECK
//     // ---------------------------------------------------------
//     if (!PUBLIC_ACTIONS.includes(action)) {
//         // If action is undefined, assume it's an Admin Data Request
//         if (!action) {
//             action = "getAdminData";
//         }

//         const ADMIN_PASS = process.env.ADMIN_PASS;
        
//         // Critical: Check if .env is loaded
//         if (!ADMIN_PASS) {
//             console.error("🔥 SERVER ERROR: ADMIN_PASS is missing in .env file");
//             return NextResponse.json({ success: false, error: "Server Config Error: ADMIN_PASS missing" }, { status: 500 });
//         }

//         // Verify Password
//         if (password !== ADMIN_PASS) {
//             console.error(`⛔ Blocked Request. Action: [${action}]`);
//             return NextResponse.json({ success: false, error: "ACCESS DENIED: Invalid Credentials" }, { status: 401 });
//         }
//     }

//     // ---------------------------------------------------------
//     // 3. FORWARD TO GOOGLE APPS SCRIPT
//     // ---------------------------------------------------------
//     const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET || process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

//     if (!GOOGLE_SCRIPT_URL) {
//         return NextResponse.json({ success: false, error: "Server Config Error: Google Sheet URL missing" }, { status: 500 });
//     }
    
//     // Construct Payload
//     const payload = {
//       action: action, 
//       sheetName: sheetName,
//       ...rest 
//     };

//     const response = await fetch(GOOGLE_SCRIPT_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     // ---------------------------------------------------------
//     // 4. HANDLE RESPONSE (JSON vs HTML Error)
//     // ---------------------------------------------------------
//     const rawText = await response.text();
    
//     try {
//         const result = JSON.parse(rawText);
        
//         if (result.result === "success" || result.success === true) {
//             return NextResponse.json({ success: true, data: result.data || result.message, logs: result.logs }, { status: 200 });
//         } else {
//             return NextResponse.json({ success: false, error: result.error || "Google Script Error" }, { status: 400 });
//         }
//     } catch (e) {
//         console.error("❌ Google returned non-JSON response (Likely 401 Auth Error).");
//         return NextResponse.json({ success: false, error: "Google Permission Error. Check Script Deployment." }, { status: 401 });
//     }

//   } catch (error: any) {
//     console.error("🔥 Route Error:", error);
//     return NextResponse.json({ success: false, error: error.message || "Network Error" }, { status: 500 });
//   }
// }







import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { password, action, sheetName, ...rest } = body; 

    // 1. SECURITY TOKEN (For Google Handshake)
    const API_TOKEN = process.env.GSHEET_API_TOKEN;
    if (!API_TOKEN) {
        return NextResponse.json({ success: false, error: "Server Error: GSHEET_API_TOKEN missing" }, { status: 500 });
    }

    // 2. PUBLIC ACTIONS (No Admin Password Required for User)
    const PUBLIC_ACTIONS = [
        "getCertificate", 
        "unlockCertificate", 
        "getPublicEvents", 
        "registerEvent",
        "saveIdea",
        "newsletter" 
    ];

    // 3. ADMIN CHECK (For Dashboard Access)
    if (!PUBLIC_ACTIONS.includes(action)) {
        if (!action) action = "getAdminData"; // Default to admin fetch

        const ADMIN_PASS = process.env.ADMIN_PASS;
        if (!ADMIN_PASS) return NextResponse.json({ success: false, error: "Server Config Error" }, { status: 500 });

        if (password !== ADMIN_PASS) {
            return NextResponse.json({ success: false, error: "ACCESS DENIED: Invalid Admin Credentials" }, { status: 401 });
        }
    }

    // 4. PREPARE PAYLOAD (Attach the Secret Token)
    const payload = {
      action: action, 
      sheetName: sheetName,
      securityToken: API_TOKEN, // <--- ATTACHING THE KEY HERE
      ...rest 
    };

    // 5. SEND TO GOOGLE
    const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET || process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
    
    const response = await fetch(GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const rawText = await response.text();
    
    try {
        const result = JSON.parse(rawText);
        if (result.success) {
            return NextResponse.json({ success: true, data: result.data, logs: result.logs }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, error: result.error, logs: result.logs }, { status: 400 });
        }
    } catch (e) {
        console.error("❌ Google Auth Error (HTML).");
        return NextResponse.json({ success: false, error: "Google Permission Error" }, { status: 401 });
    }

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}