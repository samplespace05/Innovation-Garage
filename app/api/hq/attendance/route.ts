import { NextResponse } from "next/server";
import { google } from "googleapis";

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
    throw new Error("Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON.");
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: credentials.client_email,
      private_key: credentials.private_key,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

// GET all teams for the attendance portal
export async function GET() {
  try {
    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!sheetId) {
      return NextResponse.json({ success: false, error: "Missing GOOGLE_SHEET_ID" }, { status: 500 });
    }

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Sheet2!A:BZ", // fetch a wide range
    });

    const rows = response.data.values || [];
    if (rows.length === 0) {
      return NextResponse.json({ success: true, data: [] });
    }

    const headers = rows[0];
    const data = rows.slice(1).map((row, index) => {
      const rowData: Record<string, any> = { _rowIndex: index + 2 }; // +2 because 0-based and row 1 is headers
      headers.forEach((header: string, colIndex: number) => {
        rowData[header] = row[colIndex] || "";
      });
      return rowData;
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("GET Admin Attendance Error:", error);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}

// POST update team attendance
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { _rowIndex, updates } = body; 
    // updates should be an object like { "Leader Attendance": "Yes", "Refreshment 1": "Yes" }

    if (!_rowIndex || !updates) {
      return NextResponse.json({ success: false, error: "Missing _rowIndex or updates payload" }, { status: 400 });
    }

    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!sheetId) {
      return NextResponse.json({ success: false, error: "Missing GOOGLE_SHEET_ID" }, { status: 500 });
    }

    // To update specific columns, we first need to know their column indexes
    // Fetch headers first
    const headerRes = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Sheet2!1:1",
    });

    const headers = headerRes.data.values?.[0] || [];
    
    // We can do individual updates or batchUpdate. Let's build an array of data for batchUpdate.
    const dataToUpdate = [];

    for (const [key, value] of Object.entries(updates)) {
      const colIndex = headers.indexOf(key);
      if (colIndex !== -1) {
        // Convert colIndex to A, B, C etc. (0 -> A, 1 -> B)
        // This is a simple conversion for up to Z, AA, AB, etc.
        let colLetter = "";
        let temp = colIndex;
        while (temp >= 0) {
          colLetter = String.fromCharCode((temp % 26) + 65) + colLetter;
          temp = Math.floor(temp / 26) - 1;
        }

        const range = `Sheet2!${colLetter}${_rowIndex}`;
        dataToUpdate.push({
          range,
          values: [[value]],
        });
      }
    }

    if (dataToUpdate.length > 0) {
      await sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: sheetId,
        requestBody: {
          valueInputOption: "USER_ENTERED",
          data: dataToUpdate,
        },
      });
    }

    return NextResponse.json({ success: true, message: "Attendance updated successfully." });
  } catch (error) {
    console.error("POST Admin Attendance Error:", error);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
