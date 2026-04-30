import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // The Google Apps Script Web App URL will be placed here
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error("CRITICAL: GOOGLE_SHEET_WEBHOOK_URL is not defined.");
      return NextResponse.json(
        { success: false, message: "Webhook URL not configured" },
        { status: 500 }
      );
    }

    console.log("Forwarding complaint to Google Sheets...");

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Sheets API Error:", errorText);
      throw new Error(`Google Script returned ${response.status}`);
    }

    console.log("Complaint successfully synced with Google Sheets.");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Detailed Complaint Submission Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to sync with Google Sheets" },
      { status: 500 }
    );
  }
}
