// import { NextResponse } from "next/server";
// import connectDB from "@/lib/db";
// import Idea from "@/models/Idea";

// export async function POST(req: Request) {
//   try {
//     await connectDB();
//     const body = await req.json();
//     await Idea.create(body);
//     return NextResponse.json({ message: "Success" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: "Failed" }, { status: 500 });
//   }
// }

// export async function GET(req: Request) {
//   try {
//     await connectDB();
//     // In a real app, verify Admin Session here!
//     const ideas = await Idea.find({}).sort({ createdAt: -1 });
//     return NextResponse.json({ ideas }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error fetching ideas" }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Replace this with your actual Google Apps Script Web App URL
    // It looks like: https://script.google.com/macros/s/AKfycbx.../exec
    const GOOGLE_SCRIPT_URL = process.env.NEXTAUTH_URL_GSHEET;

    if (!GOOGLE_SCRIPT_URL) {
      return NextResponse.json(
        { message: "Server Error: Google Sheet URL is not configured." },
        { status: 500 }
      );
    }
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8", // Apps Script handles text/plain better for CORS
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (result.result === "success") {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    } else {
      throw new Error(result.error);
    }

  } catch (error) {
    console.error("Submission Error:", error);
    return NextResponse.json({ message: "Failed", error }, { status: 500 });
  }
}