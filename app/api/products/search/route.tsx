import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: any) {
  if (req.method === "GET") {
    const { search } = parse(req.url || "", true);
    const searchParams = new URLSearchParams(search || "");
    const keyword = searchParams.get("keyword") as string;
    if (!keyword) {
      return NextResponse.json({ error: "Empty keyword" });
    }

    try {
      const products = await prisma.products.findMany({
        where: {
          OR: [{ product_name: { contains: keyword } }],
        },
        include: {
          productVariants: {
            include: {
              images: true,
            },
          },
        },
      });

      return NextResponse.json({ products });
    } catch (error) {
      return NextResponse.json({ error: "Internal Server Error" });
    }
  } else {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
}
