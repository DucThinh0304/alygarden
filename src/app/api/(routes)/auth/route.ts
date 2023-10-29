import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse("auth", { status: 200 });
};

export const POST = () => {
  return new NextResponse("auth", { status: 200 });
};
