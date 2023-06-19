import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: Request, res: NextApiResponse) {
  const { search } = parse(req.url || "", true);
  const searchParams = new URLSearchParams(search || "");
  const id = searchParams.get("id") as string;
  const orders = await prisma.order.findFirst({
    where: {
      id: parseInt(id, 10),
    },
    include: {
      user: true,
      order_item: {
        include: {
          product_variant: {
            include: {
              images: true,
            },
          },
        },
      },
    },
  });

  return NextResponse.json(orders);
}
