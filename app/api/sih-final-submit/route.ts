import { NextResponse } from "next/server";
import { google } from "googleapis";
import { verifyGoogleToken } from "@/lib/verifyGoogleToken";

export const runtime = "nodejs";

function getGoogleAuth() {
  const jsonString = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!jsonString) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_JSON in environment variables.");
  }

  let credentials;
  try {
    credentials = JSON.parse(jsonString);
  } catch {
    throw new Error("Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON. Ensure it is valid JSON.");
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function parseCookies(cookieHeader: string | null): Record<string, string> {
  if (!cookieHeader) return {};
  return Object.fromEntries(
    cookieHeader.split("; ").map((c) => {
      const i = c.indexOf("=");
      return [c.slice(0, i), c.slice(i + 1)];
    })
  );
}

export async function GET(req: Request) {
  try {
    const cookies = parseCookies(req.headers.get("cookie"));
    const idToken = cookies["sih_auth_token"];

    if (!idToken) {
      return NextResponse.json({ success: true, authenticated: false, submitted: false });
    }

    let tokenPayload = null;
    if (process.env.NODE_ENV === "development" && idToken === "dev_bypass_token") {
      tokenPayload = {
        email: "dev@nitw.ac.in",
      } as any;
    } else {
      tokenPayload = await verifyGoogleToken(idToken);
    }

    if (!tokenPayload) {
      return NextResponse.json({ success: true, authenticated: false, submitted: false });
    }

    const email = tokenPayload.email;

    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!sheetId) {
      return NextResponse.json({ success: false, error: "Missing GOOGLE_SHEET_ID" }, { status: 500 });
    }

    let response;
    try {
      response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: "Final Response!A:Z",
      });
    } catch (e) {
      // Sheet might not exist yet
      return NextResponse.json({ success: true, authenticated: true, submitted: false, currentUserEmail: email });
    }

    const rows = response.data.values || [];
    if (rows.length === 0) {
      return NextResponse.json({ success: true, authenticated: true, submitted: false, currentUserEmail: email });
    }

    const headers = rows[0];
    const emailColIdx = headers.findIndex((h: string) => h.toLowerCase() === "authenticated email");

    if (emailColIdx === -1) {
      return NextResponse.json({ success: true, authenticated: true, submitted: false, currentUserEmail: email });
    }

    // Find the row
    let userRow: any[] | null = null;
    for (let i = 1; i < rows.length; i++) {
      if (rows[i][emailColIdx] === email) {
        userRow = rows[i];
        break;
      }
    }

    if (!userRow) {
      return NextResponse.json({ success: true, authenticated: true, submitted: false, currentUserEmail: email });
    }

    const data: Record<string, string> = {};
    headers.forEach((header: string, idx: number) => {
      data[header] = userRow ? userRow[idx] || "" : "";
    });

    return NextResponse.json({
      success: true,
      authenticated: true,
      submitted: true,
      currentUserEmail: email,
      data,
    });
  } catch (error) {
    console.error("GET Final Submit Error:", error);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const cookies = parseCookies(req.headers.get("cookie"));
    const idToken = cookies["sih_auth_token"];

    if (!idToken) {
      return NextResponse.json({ success: false, error: "Not authenticated" }, { status: 401 });
    }

    let tokenPayload = null;
    if (process.env.NODE_ENV === "development" && idToken === "dev_bypass_token") {
      tokenPayload = {
        email: "dev@nitw.ac.in",
      } as any;
    } else {
      tokenPayload = await verifyGoogleToken(idToken);
    }

    if (!tokenPayload) {
      return NextResponse.json({ success: false, error: "Invalid token" }, { status: 401 });
    }

    const email = tokenPayload.email;
    const body = await req.json();

    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!sheetId) {
      return NextResponse.json({ success: false, error: "Missing GOOGLE_SHEET_ID" }, { status: 500 });
    }
    
    // Check if already submitted
    let existingRows = [];
    try {
      const getRes = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: "Final Response!A:Z",
      });
      existingRows = getRes.data.values || [];
    } catch (e) {
      // Sheet might not exist, proceed
    }

    if (existingRows.length > 0) {
      const headers = existingRows[0];
      const emailColIdx = headers.findIndex((h: string) => h.toLowerCase() === "authenticated email");
      if (emailColIdx !== -1) {
        for (let i = 1; i < existingRows.length; i++) {
          if (existingRows[i][emailColIdx] === email) {
             return NextResponse.json({ success: false, error: "You have already submitted the final response." }, { status: 400 });
          }
        }
      }
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const rowData = {
      "Timestamp": timestamp,
      "Authenticated Email": email,
      "Team Name": body.teamName || "",
      "Leader Email": body.leaderEmail || "",
      "Track": body.track || "",
      "Youtube Link": body.youtubeLink || "",
      "PPTX Link": body.pptxLink || "",
      "Github Link": body.githubLink || "",
      "Live Demo Link": body.liveDemoLink || "",
      "Pitch": body.pitch || "",
    };

    const needsHeaders = existingRows.length === 0;
    let keys, values;
    if (needsHeaders) {
      keys = Object.keys(rowData);
      values = Object.values(rowData);
    } else {
      keys = existingRows[0];
      values = keys.map((key: string) => {
        const matchingKey = Object.keys(rowData).find(k => k.toLowerCase() === key.toLowerCase());
        return matchingKey ? String(rowData[matchingKey as keyof typeof rowData]) : "";
      });
    }

    const resource = {
      values: needsHeaders ? [keys, values] : [values],
    };

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Final Response!A1",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "OVERWRITE",
      requestBody: resource,
    });

    return NextResponse.json({ success: true, message: "Data added successfully to Final Response sheet." });
  } catch (error) {
    console.error("POST Final Submit Error:", error);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
