import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    let clientIP =
      req.headers.get("x-forwarded-for") || req.socket.remoteAddress;

    if (clientIP.includes(",")) {
      clientIP = clientIP.split(",")[0];
    }

    if (clientIP) {
      return NextResponse.json({ ip: clientIP });
    }
  } catch (error) {
    console.error("Error getting IP");
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
