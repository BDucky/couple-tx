import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  if (req.method === "GET") {
    const { keyword } = req.body;
    if (!keyword) {
      return NextResponse.json({ error: "Empty keyword" });
    }

    try {
      const products = await prisma.products.findMany({
        where: {
          OR: [{ product_name: { contains: keyword } }],
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
