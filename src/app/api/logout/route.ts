// src/app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

  const response = NextResponse.redirect(`${baseUrl}/login`);

  response.cookies.set("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0), // expira o cookie
  });

  return response;
}
