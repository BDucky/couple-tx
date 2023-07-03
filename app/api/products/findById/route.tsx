import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
import { parse } from "url";

export async function GET(req: any) {
  // ...
  const { search } = parse(req.url || "", true);
  const searchParams = new URLSearchParams(search || "");
  const id = searchParams.get("id") as string;

  if (!id) {
    return NextResponse.json([]);
  }
  if (isNaN(parseInt(id))) {
    return NextResponse.json([]);
  }
  const products = await prisma.products.findUnique({
    where: { id: parseInt(id) },

    include: {
      genders: true,
      category: true,
      sub_category: true,
      rates: {
        include: {
          images: true,
        },
      },

      productVariants: {
        include: {
          images: true,
          size: {
            include: {
              technical_specification: true,
            },
          },
        },
      },
      sale: true,
    },
  });
  return NextResponse.json(products);
}
