import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

export const POST = () => {
  return new NextResponse("auth", { status: 200 });
};
