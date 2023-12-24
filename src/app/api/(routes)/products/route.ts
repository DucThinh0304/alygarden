import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// FETCH ALL PRODUCTS
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  if (searchParams.get("cat")) {
    const cat = searchParams.get("cat") || "";
    if (cat !== "") {
      return await FetchProductWithCat(cat, page);
    } else {
      console.log("Fetching all products");
      return await FetchAllProducts(page);
    }
  }
  return await FetchAllProducts(page);
};

const FetchProductWithCat = async (cat: string, page: number) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat !== "isFeatured" ? { catSlug: cat } : { isFeatured: true }),
      },
      skip: cat !== "isFeatured" ? (page - 1) * 10 : 0,
      take: cat !== "isFeatured" ? 10 : 3,
    });
    const numberOfProducts = await prisma.product.count({
      where: { catSlug: cat },
    });
    const totalPages = Math.ceil(numberOfProducts / 10);
    return new NextResponse(JSON.stringify({ products, totalPages }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

const FetchAllProducts = async (page: number) => {
  try {
    const products = await prisma.product.findMany({
      skip: (page - 1) * 10,
      take: 10,
    });
    const numberOfProducts = await prisma.product.count();
    const totalPages = Math.ceil(numberOfProducts / 10);
    console.log(totalPages);
    return new NextResponse(JSON.stringify({ products, totalPages }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const product = await prisma.product.create({
      data: body,
    });
    return new NextResponse(JSON.stringify(product), { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
