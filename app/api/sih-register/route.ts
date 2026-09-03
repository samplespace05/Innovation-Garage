import { NextResponse } from "next/server";
import { google } from "googleapis";
import { verifyGoogleToken } from "@/lib/verifyGoogleToken";
import { SIH_PROBLEM_STATEMENTS } from "@/lib/sihProblemStatements";

export const runtime = "nodejs";

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────────────────────
// Set to true to completely block new registrations at the API level
const REGISTRATION_CLOSED = true;

const ALLOWED_NITW_DOMAINS = ["nitw.ac.in", "student.nitw.ac.in"];
// ─────────────────────────────────────────────────────────────────────────────
// CORS — only allow requests from our own domain
// ─────────────────────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_APP_URL || "",
  "http://localhost:3000",
  "http://localhost:3001",
  "https://ignitw.in",
  "https://www.ignitw.in",
  "http://ignitw.in",
  "http://www.ignitw.in",
].filter(Boolean);

function corsHeaders(origin: string | null) {
  const allowed =
    !origin || ALLOWED_ORIGINS.includes(origin) || ALLOWED_ORIGINS.length === 0
      ? origin || "*"
      : null;
  if (!allowed) return null;
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);
  if (!headers) return new Response(null, { status: 403 });
  return new Response(null, { status: 204, headers });
}

// ─────────────────────────────────────────────────────────────────────────────
// RATE LIMITING — IP based + Google account based
//
// IMPORTANT: Account rate limit is ONLY committed AFTER the Google Sheet write
// succeeds. This prevents the "locked out but no data" bug where a user gets
// rate-limited on a failed submission.
// ─────────────────────────────────────────────────────────────────────────────
const ipRateMap = new Map<string, { count: number; resetAt: number }>();
const accountRateMap = new Map<string, { count: number; resetAt: number }>();
const pendingRegistrations = new Set<string>();
const IP_LIMIT = 5;
const ACCOUNT_LIMIT = 1; // one registration per Google account
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

const IS_DEV = process.env.NODE_ENV === "development";

function checkIpLimit(ip: string): boolean {
  if (IS_DEV) return true; // skip in dev
  const now = Date.now();
  const entry = ipRateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipRateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= IP_LIMIT) return false;
  entry.count++;
  return true;
}

function isAccountRateLimited(googleSub: string): boolean {
  if (IS_DEV) return false; // skip in dev — allow unlimited test submissions
  const now = Date.now();
  const entry = accountRateMap.get(googleSub);
  if (!entry || now > entry.resetAt) return false;
  return entry.count >= ACCOUNT_LIMIT;
}

function commitAccountRateLimit(googleSub: string): void {
  if (IS_DEV) return;
  const now = Date.now();
  const entry = accountRateMap.get(googleSub);
  if (!entry || now > entry.resetAt) {
    accountRateMap.set(googleSub, { count: 1, resetAt: now + WINDOW_MS });
  } else {
    entry.count++;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// VALIDATION HELPERS
// ─────────────────────────────────────────────────────────────────────────────
const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const isValidPhone = (p: string) => /^[6-9]\d{9}$/.test(p.replace(/\s/g, ""));
// Strip all HTML tags + dangerous chars (prevent XSS / injection) and escape formula triggers (=, +, -, @)
const sanitize = (s: string) => {
  let cleaned = s.replace(/<[^>]*>/g, "").replace(/[<>"'`]/g, "").trim().slice(0, 2000);
  if (cleaned.startsWith("=") || cleaned.startsWith("+") || cleaned.startsWith("-") || cleaned.startsWith("@")) {
    cleaned = "'" + cleaned;
  }
  return cleaned;
};

function err(message: string, status = 400) {
  return NextResponse.json({ success: false, error: message }, { status });
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
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// GOOGLE DRIVE HELPERS
// ─────────────────────────────────────────────────────────────────────────────
async function uploadBomToDrive(file: File, teamName: string): Promise<string> {
  const auth = getGoogleAuth();
  const drive = google.drive({ version: "v3", auth });
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  if (!folderId) throw new Error("Missing GOOGLE_DRIVE_FOLDER_ID");

  const buffer = await file.arrayBuffer();
  const { Readable } = require("stream");
  const stream = Readable.from(Buffer.from(buffer));

  const res = await drive.files.create({
    requestBody: {
      name: `BOM_${teamName}_${Date.now()}.pdf`,
      parents: [folderId],
    },
    media: {
      mimeType: file.type,
      body: stream,
    },
    fields: "id, webViewLink",
  });

  if (res.data.id) {
    try {
      await drive.permissions.create({
        fileId: res.data.id,
        requestBody: { role: "reader", type: "anyone" },
      });
    } catch (e) {
      console.warn(
        "Failed to set public permission on PDF, it will remain private to the Service Account/Folder.",
        e
      );
    }
  }

  return res.data.webViewLink || "";
}

// ─────────────────────────────────────────────────────────────────────────────
// GOOGLE SHEET HELPERS & CACHING
// ─────────────────────────────────────────────────────────────────────────────
let cachedSheetData: any[][] | null = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 30 * 1000; // 30 seconds cache

async function getSheetDataCached(): Promise<any[][] | null> {
  const now = Date.now();
  if (cachedSheetData && now - lastCacheTime < CACHE_TTL_MS) {
    return cachedSheetData;
  }

  const auth = getGoogleAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) return null;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "A:BZ", // Read sufficient columns
    });
    cachedSheetData = response.data.values || [];
    lastCacheTime = now;
    return cachedSheetData;
  } catch (e) {
    console.error("Error fetching sheet data:", e);
    if (cachedSheetData) return cachedSheetData;
    return null;
  }
}

function invalidateSheetCache() {
  cachedSheetData = null;
  lastCacheTime = 0;
}

async function checkDuplicateEmail(emails: string[]): Promise<boolean> {
  try {
    const rows = await getSheetDataCached();
    if (!rows || rows.length === 0) return false;

    // Find the column indices for all email fields
    const headers = rows[0];
    const emailCols = [
      headers.indexOf("Authenticated Email"),
      headers.indexOf("Leader Email"),
      headers.indexOf("Member 1 Email"),
      headers.indexOf("Member 2 Email"),
      headers.indexOf("Member 3 Email"),
      headers.indexOf("Member 4 Email"),
      headers.indexOf("Member 5 Email")
    ].filter(idx => idx !== -1);

    if (emailCols.length === 0) return false;

    // Check all data rows for a matching email
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      for (const colIdx of emailCols) {
        if (row[colIdx] && emails.includes(row[colIdx])) {
          return true;
        }
      }
    }

    return false;
  } catch (e) {
    console.error("Error checking duplicate email:", e);
    // On error, allow submission (fail open for duplicate check —
    // the in-memory rate limit is the primary guard)
    return false;
  }
}

async function checkDuplicateTeamName(teamName: string): Promise<boolean> {
  try {
    const rows = await getSheetDataCached();
    if (!rows || rows.length === 0) return false;

    // Find the column index for "Team Name" from the header row
    const headers = rows[0];
    const teamColIdx = headers.indexOf("Team Name");
    if (teamColIdx === -1) return false;

    // Check all data rows for a matching team name (case-insensitive and trimmed)
    const normalizedName = teamName.trim().toLowerCase();
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (row[teamColIdx] && row[teamColIdx].trim().toLowerCase() === normalizedName) {
        return true;
      }
    }

    return false;
  } catch (e) {
    console.error("Error checking duplicate team name:", e);
    return false;
  }
}

async function submitToSheet(rowData: Record<string, string>): Promise<void> {
  const auth = getGoogleAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!sheetId) throw new Error("Missing GOOGLE_SHEET_ID");

  // Check if sheet is empty (needs headers) using cache to avoid an extra API call
  const rows = await getSheetDataCached();
  const needsHeaders = !rows || rows.length === 0;

  let keys, values;
  if (needsHeaders) {
    keys = Object.keys(rowData);
    values = Object.values(rowData);
  } else {
    keys = rows[0]; // Use existing headers to ensure column alignment
    values = keys.map((key: string) => rowData[key] || "");
  }

  const resource = {
    values: needsHeaders ? [keys, values] : [values],
  };

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "A1",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "OVERWRITE",
    requestBody: resource,
  });

  // Invalidate cache so subsequent reads get the newly inserted row
  invalidateSheetCache();
}

// ─────────────────────────────────────────────────────────────────────────────
// GET — SECURELY RETRIEVE USER REGISTRATION DETAILS
// ─────────────────────────────────────────────────────────────────────────────
export async function GET(req: Request) {
  try {
    const cookies = parseCookies(req.headers.get("cookie"));
    const idToken = cookies["sih_auth_token"];

    if (!idToken) {
      return NextResponse.json({ success: true, authenticated: false, registered: false });
    }

    let tokenPayload = null;
    if (process.env.NODE_ENV === "development" && idToken === "dev_bypass_token") {
      tokenPayload = {
        sub: "dev_user_sub",
        email: "dev@nitw.ac.in",
        email_verified: true,
        hd: "nitw.ac.in",
        name: "Dev User",
        exp: Math.floor(Date.now() / 1000) + 3600,
        aud: "dev",
        iss: "accounts.google.com",
      } as any;
    } else {
      tokenPayload = await verifyGoogleToken(idToken);
    }

    if (!tokenPayload) {
      return NextResponse.json({ success: true, authenticated: false, registered: false });
    }

    const email = tokenPayload.email;

    // Fetch rows via our cached helper to avoid rate limits
    const rows = await getSheetDataCached();
    if (!rows || rows.length === 0) {
      return NextResponse.json({ success: true, authenticated: true, registered: false });
    }

    const headers = rows[0];
    const emailCols = [
      headers.indexOf("Authenticated Email"),
      headers.indexOf("Leader Email"),
      headers.indexOf("Member 1 Email"),
      headers.indexOf("Member 2 Email"),
      headers.indexOf("Member 3 Email"),
      headers.indexOf("Member 4 Email"),
      headers.indexOf("Member 5 Email")
    ].filter(idx => idx !== -1);

    if (emailCols.length === 0) {
      return NextResponse.json({ success: true, authenticated: true, registered: false });
    }

    // Find the row
    let userRow: any[] | null = null;
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      let found = false;
      for (const colIdx of emailCols) {
        if (row[colIdx] === email) {
          found = true;
          break;
        }
      }
      if (found) {
        userRow = row;
        break; // found the registration
      }
    }

    if (!userRow) {
      return NextResponse.json({ success: true, authenticated: true, registered: false });
    }

    // Map row to a nice JSON object
    const data: Record<string, string> = {};
    headers.forEach((header: string, idx: number) => {
      data[header] = userRow ? userRow[idx] || "" : "";
    });

    return NextResponse.json({
      success: true,
      authenticated: true,
      registered: true,
      data,
    });
  } catch (error) {
    console.error("GET Registration Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// POST — MAIN HANDLER
// ─────────────────────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin) ?? {};

  // ── 0. REGISTRATION CLOSED CHECK ───────────────────────────────────────
  if (REGISTRATION_CLOSED) {
    return NextResponse.json(
      { success: false, error: "Registration is closed. No new registrations are being accepted." },
      { status: 403, headers }
    );
  }

  // ── 1. CORS CHECK ────────────────────────────────────────────────────────
  if (origin && corsHeaders(origin) === null) {
    return NextResponse.json(
      { success: false, error: "Forbidden origin" },
      { status: 403, headers }
    );
  }

  // ── 2. IP RATE LIMIT ─────────────────────────────────────────────────────
  const forwardedFor = req.headers.get("x-forwarded-for") ?? "unknown";
  const ip = forwardedFor.split(",")[0].trim();

  if (!checkIpLimit(ip)) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Too many submission attempts from your network (max 5/hour). Contact ig@nitw.ac.in if you believe this is wrong.",
      },
      { status: 429, headers }
    );
  }

  // ── 3. PARSE FORM DATA ───────────────────────────────────────────────────
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid form data." },
      { status: 400, headers }
    );
  }

  const get = (key: string) => ((formData.get(key) as string) || "").trim();

  // ── 4. HONEYPOT CHECK (silent discard for bots) ──────────────────────────
  const honeypot = get("website");
  if (honeypot) {
    console.warn(`Honeypot triggered from IP: ${ip}`);
    return NextResponse.json({ success: true }, { status: 200, headers });
  }

  // ── 5. EXTRACT SECURITY TOKENS ───────────────────────────────────────────
  const cookies = parseCookies(req.headers.get("cookie"));
  const idToken = cookies["sih_auth_token"];

  // ── 6. GOOGLE ID TOKEN VERIFICATION ─────────────────────────────────────
  let tokenPayload = null;
  if (process.env.NODE_ENV === "development" && idToken === "dev_bypass_token") {
    tokenPayload = {
      sub: "dev_user_sub",
      email: "dev@nitw.ac.in",
      email_verified: true,
      hd: "nitw.ac.in",
      name: "Dev User",
      exp: Math.floor(Date.now() / 1000) + 3600,
      aud: "dev",
      iss: "accounts.google.com",
    } as any;
  } else {
    tokenPayload = await verifyGoogleToken(idToken);
  }

  if (!tokenPayload) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Authentication failed. Please sign out and sign in again with your NITW Google account.",
      },
      { status: 401, headers }
    );
  }

  // ── 7. TOKEN EXPIRATION CHECK ────────────────────────────────────────────
  const nowSeconds = Math.floor(Date.now() / 1000);
  if (nowSeconds > tokenPayload.exp) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Your session has expired. Please refresh the page and sign in again.",
      },
      { status: 401, headers }
    );
  }

  // ── 8. NITW DOMAIN CHECK ─────────────────────────────────────────────────
  const emailDomain = tokenPayload.email.split("@")[1] || "";
  const hdClaim = tokenPayload.hd || emailDomain;

  const isNitwDomain =
    ALLOWED_NITW_DOMAINS.includes(emailDomain) ||
    ALLOWED_NITW_DOMAINS.includes(hdClaim);

  if (!isNitwDomain) {
    return NextResponse.json(
      {
        success: false,
        error: `Access denied. Only NITW email accounts (nitw.ac.in or student.nitw.ac.in) are allowed. You authenticated with: ${tokenPayload.email}`,
      },
      { status: 403, headers }
    );
  }

  // ── 9. EXTRACT FORM FIELDS ──────────────────────────────────────────────
  const teamName = get("teamName");
  const track = get("track");
  const teamSize = "6";
  const hasFemale = "Yes";
  const ps1Type = get("ps1Type");
  const ps1Id = get("ps1Id");
  const ps2Type = get("ps2Type");
  const ps2Id = get("ps2Id");

  // Derive Theme from selected First Problem Statement instead of client input
  const selectedPS = SIH_PROBLEM_STATEMENTS.find((ps) => ps.ps_number === ps1Id);
  const theme = selectedPS ? selectedPS.theme : "General";
  const inspiration = get("inspiration");
  const approach = get("approach");
  const facultyMentor = get("facultyMentor");
  const consent = get("consent");
  const declaration = get("declaration");
  const memberCount = parseInt(get("memberCount") || "0");

  // Leader
  const leaderName = get("leaderName");
  const leaderRoll = get("leaderRoll");
  const leaderYear = get("leaderYear");
  const leaderEmail = get("leaderEmail");
  const leaderPhone = get("leaderPhone");
  const leaderGender = get("leaderGender");

  // BOM Link
  const bomLink = get("bomLink");

  // Members
  const memberData: Record<string, string>[] = [];
  for (let i = 1; i <= memberCount; i++) {
    memberData.push({
      name: get(`member${i}Name`),
      roll: get(`member${i}Roll`),
      year: get(`member${i}Year`),
      email: get(`member${i}Email`),
      phone: get(`member${i}Phone`),
      gender: get(`member${i}Gender`),
    });
  }

  // ── 10. SERVER-SIDE FIELD VALIDATION ────────────────────────────────────
  if (!teamName || teamName.length < 2 || teamName.length > 80)
    return err("Team name must be 2\u201380 characters.", 400);
  if (!["Software", "Hardware"].includes(track))
    return err("Please select a valid track.", 400);
  if (memberCount !== 5)
    return err("Exactly 5 members must be provided.", 400);

  const hasAnyFemale =
    leaderGender === "Female" || memberData.some((m) => m.gender === "Female");
  if (!hasAnyFemale)
    return err(
      "At least one female member is mandatory. Your team cannot register.",
      400
    );
  if (!["Software", "Hardware"].includes(ps1Type))
    return err("Please select Software or Hardware for your first PS.", 400);
  if (!ps1Id) return err("First PS ID is required.", 400);
  if (!inspiration || inspiration.length < 10)
    return err("Please describe your inspiration (min 10 characters).", 400);
  if (!approach || approach.length < 10)
    return err("Please describe your approach (min 10 characters).", 400);
  if (consent !== "Yes") return err("Consent is required.", 400);
  if (declaration !== "Yes") return err("Declaration is required.", 400);

  // Leader
  if (!leaderName) return err("Team Leader full name is required.", 400);
  if (!leaderRoll) return err("Team Leader roll number is required.", 400);
  if (!leaderYear)
    return err("Team Leader year and department is required.", 400);
  if (!leaderEmail || !isValidEmail(leaderEmail))
    return err("Team Leader email is invalid.", 400);
  if (!leaderEmail.endsWith("@student.nitw.ac.in"))
    return err("Team Leader email must be in @student.nitw.ac.in format.", 400);
  if (!leaderPhone || !isValidPhone(leaderPhone))
    return err(
      "Team Leader phone must be a valid 10-digit Indian mobile number.",
      400
    );
  if (!leaderGender) return err("Team Leader gender is required.", 400);

  // Members
  for (let i = 0; i < memberData.length; i++) {
    const m = memberData[i];
    const n = i + 1;
    if (!m.name) return err(`Member ${n}: Full name is required.`, 400);
    if (!m.roll) return err(`Member ${n}: Roll number is required.`, 400);
    if (!m.year)
      return err(`Member ${n}: Year and department is required.`, 400);
    if (!m.email || !isValidEmail(m.email))
      return err(`Member ${n}: Email address is invalid.`, 400);
    if (!m.email.endsWith("@student.nitw.ac.in"))
      return err(`Member ${n}: Email address must be in @student.nitw.ac.in format.`, 400);
    if (!m.phone || !isValidPhone(m.phone))
      return err(`Member ${n}: Phone must be a valid 10-digit Indian mobile number.`, 400);
    if (!m.gender) return err(`Member ${n}: Gender is required.`, 400);
  }

  // BOM for hardware teams
  const isHardware = ps1Type === "Hardware" || ps2Type === "Hardware";
  if (isHardware) {
    if (!bomLink) return err("Hardware teams must provide a BOM Google Drive link.", 400);
    if (!bomLink.startsWith("http://") && !bomLink.startsWith("https://")) {
      return err("Please provide a valid URL for the Bill of Materials (BOM) Google Drive link.", 400);
    }
  }

  // ── 11. CREDENTIAL CHECK ─────────────────────────────────────────────────
  if (
    !process.env.GOOGLE_SERVICE_ACCOUNT_JSON ||
    !process.env.GOOGLE_SHEET_ID ||
    !process.env.GOOGLE_DRIVE_FOLDER_ID
  ) {
    console.error("Missing Google API credentials in env");
    return NextResponse.json(
      {
        success: false,
        error: "Server configuration error. Please contact ig@nitw.ac.in",
      },
      { status: 500, headers }
    );
  }

  // ── 12. PER-ACCOUNT RATE LIMIT CHECK (after validation passes) ─────────
  const googleSub = tokenPayload.sub;
  const lockKey = `${googleSub}:${tokenPayload.email}`;
  if (pendingRegistrations.has(lockKey)) {
    return NextResponse.json(
      {
        success: false,
        error:
          "A registration is already in progress for this account. Please wait.",
      },
      { status: 409, headers }
    );
  }
  pendingRegistrations.add(lockKey);

  try {
    if (isAccountRateLimited(googleSub)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This Google account has already been used to submit a registration. Each account can only register one team. Contact ig@nitw.ac.in if this is an error.",
        },
        { status: 429, headers }
      );
    }

    // ── 13. DUPLICATE EMAIL CHECK (query Google Sheet) ─────────────────────
    const emailsToCheck = [
      tokenPayload.email,
      leaderEmail,
      ...memberData.map((m) => m.email).filter(Boolean)
    ];

    const isDuplicate = await checkDuplicateEmail(emailsToCheck);
    if (isDuplicate) {
      // Commit rate limit since they are already registered
      commitAccountRateLimit(googleSub);
      return NextResponse.json(
        {
          success: false,
          error:
            "One or more emails provided (including your authenticated email) have already been used to register a team. Each email can only be part of one team. Contact ig@nitw.ac.in if this is an error.",
        },
        { status: 409, headers }
      );
    }

    // ── 13b. DUPLICATE TEAM NAME CHECK (query Google Sheet) ─────────────────
    const isDuplicateTeam = await checkDuplicateTeamName(teamName);
    if (isDuplicateTeam) {
      return NextResponse.json(
        {
          success: false,
          error: `The team name "${teamName}" is already taken. Please choose a unique team name.`,
        },
        { status: 409, headers }
      );
    }

    // ── 14. BOM LINK FOR HARDWARE ───────────────────────────────────────────
    let bomDriveUrl = "";
    if (isHardware && bomLink) {
      bomDriveUrl = bomLink;
    }

    // ── 15. BUILD SHEET ROW ───────────────────────────────────────────────────
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const rowData: Record<string, string> = {
      Timestamp: timestamp,
      "Submission IP": ip,
      "Authenticated Email": tokenPayload.email,
      "Google Sub ID": googleSub,
      "Team Name": sanitize(teamName),
      "Team Size": teamSize,
      "Has Female Member": hasFemale,
      "Leader Name": sanitize(leaderName),
      "Leader Roll": sanitize(leaderRoll),
      "Leader Year & Dept": sanitize(leaderYear),
      "Leader Email": sanitize(leaderEmail),
      "Leader Phone": sanitize(leaderPhone),
      "Leader Gender": sanitize(leaderGender),
    };

    for (let i = 0; i < 5; i++) {
      const m = memberData[i];
      const lbl = `Member ${i + 1}`;
      rowData[`${lbl} Name`] = m ? sanitize(m.name) : "";
      rowData[`${lbl} Roll`] = m ? sanitize(m.roll) : "";
      rowData[`${lbl} Year & Dept`] = m ? sanitize(m.year) : "";
      rowData[`${lbl} Email`] = m ? sanitize(m.email) : "";
      rowData[`${lbl} Phone`] = m ? sanitize(m.phone) : "";
      rowData[`${lbl} Gender`] = m ? sanitize(m.gender) : "";
    }

    rowData["Theme"] = sanitize(theme);
    rowData["PS1 Type"] = ps1Type;
    rowData["PS1 ID"] = sanitize(ps1Id);
    rowData["PS2 Type"] = ps2Type;
    rowData["PS2 ID"] = sanitize(ps2Id);
    rowData["Inspiration"] = sanitize(inspiration);
    rowData["Approach"] = sanitize(approach);
    rowData["BOM Drive URL"] = bomDriveUrl;
    rowData["Faculty Mentor"] = sanitize(facultyMentor);
    rowData["Consent"] = consent;

    // ── 16. SUBMIT TO GOOGLE SHEET ────────────────────────────────────────────
    // Rate limit is ONLY committed AFTER successful sheet write.
    // This prevents the "locked out but no data" bug.
    try {
      await submitToSheet(rowData);
    } catch (e) {
      console.error("Sheet submission error:", e);
      return NextResponse.json(
        {
          success: false,
          error:
            "Failed to save your registration. Please try again in a moment. If this persists, contact ig@nitw.ac.in",
        },
        { status: 500, headers }
      );
    }

    // ── 17. COMMIT RATE LIMIT (only after successful write) ──────────────────
    commitAccountRateLimit(googleSub);

    return NextResponse.json({ success: true }, { status: 200, headers });
  } finally {
    pendingRegistrations.delete(lockKey);
  }
}
