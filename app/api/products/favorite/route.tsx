import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { key, product_id } = body;
  if (!key) {
    return NextResponse.json("Invalid key");
  }
  if (key === "plus") {
    const product = await prisma.products.findFirst({
      where: {
        id: product_id,
      },
    });
    if (product) {
      await prisma.products.update({
        where: {
          id: product.id,
        },
        data: {
          favorite_counters: product.favorite_counters + 1,
        },
      });
    }
  }
  if (key === "minus") {
    const product = await prisma.products.findFirst({
      where: {
        id: product_id,
      },
    });
    if (product) {
      await prisma.products.update({
        where: {
          id: product.id,
        },
        data: {
          favorite_counters: product.favorite_counters - 1,
        },
      });
    }
  }
  return NextResponse.json("updated");
}
