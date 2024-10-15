// utils/getIpAddress.js
export function getIpAddress(req) {
  let clientIP = req.headers.get("x-forwarded-for") || req.socket.remoteAddress;

  if (clientIP && clientIP.includes(",")) {
    clientIP = clientIP.split(",")[0].trim(); // Trim to remove extra spaces
  }

  return clientIP || null;
}
