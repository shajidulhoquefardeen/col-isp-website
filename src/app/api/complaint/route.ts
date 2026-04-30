import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // The Google Apps Script Web App URL will be placed here
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL is not defined in environment variables.");
      // For now, we'll return success to allow the UI to work, but log it.
      return NextResponse.json({ success: true, message: "Local mock success (missing URL)" });
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Complaint Submission Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
