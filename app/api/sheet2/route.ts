import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

// ─────────────────────────────────────────────────────────────────────────────
// GOOGLE SERVICE ACCOUNT CONFIG & AUTH
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// GET — Retrieve data from Sheet2
// ─────────────────────────────────────────────────────────────────────────────
export async function GET(req: Request) {
  try {
    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!sheetId) {
      return NextResponse.json({ success: false, error: "Missing GOOGLE_SHEET_ID" }, { status: 500 });
    }

    // The range specifies 'Sheet2!' prefix to target the new sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Sheet2!A:Z",
    });

    const rows = response.data.values || [];

    if (rows.length === 0) {
      return NextResponse.json({ success: true, data: [] });
    }

    // Assuming the first row contains headers
    const headers = rows[0];
    const data = rows.slice(1).map((row) => {
      const rowData: Record<string, string> = {};
      headers.forEach((header: string, index: number) => {
        rowData[header] = row[index] || "";
      });
      return rowData;
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("GET Sheet2 Error:", error);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// POST — Append data to Sheet2
// ─────────────────────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Assuming JSON payload

    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!sheetId) {
      return NextResponse.json({ success: false, error: "Missing GOOGLE_SHEET_ID" }, { status: 500 });
    }

    // Retrieve headers first to align the incoming JSON payload columns
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Sheet2!A:Z",
    });

    const rows = response.data.values || [];
    const needsHeaders = rows.length === 0;

    let keys, values;
    if (needsHeaders) {
      // If sheet is empty, use the keys from the payload as headers
      keys = Object.keys(body);
      values = Object.values(body);
    } else {
      // Use existing headers to ensure column alignment
      keys = rows[0]; 
      values = keys.map((key: string) => (body[key] !== undefined ? String(body[key]) : ""));
    }

    const resource = {
      values: needsHeaders ? [keys, values] : [values],
    };

    // Append to Sheet2
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet2!A1",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "OVERWRITE",
      requestBody: resource,
    });

    return NextResponse.json({ success: true, message: "Data added successfully to Sheet2." });
  } catch (error) {
    console.error("POST Sheet2 Error:", error);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
