// import axios from "axios";
import { NextResponse } from "next/server";

// const getLocationFromIP = async (ip) => {
//   try {
//     const response = await axios.get(`http://ip-api.com/json/${ip}`);
//     const { country, city, latitude, longitude } = response.data;
//     return { country, city, latitude, longitude };
//   } catch (error) {
//     console.error("Error fetching location:", error);
//     return null;
//   }
// };

// This is your API handler
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
