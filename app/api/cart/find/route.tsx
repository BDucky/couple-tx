import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: Request, res: NextApiResponse) {
  const { search } = parse(req.url || "", true);
  const searchParams = new URLSearchParams(search || "");
  const user_id = searchParams.get("id") as string;

  const cart = await prisma.cart.findMany({
    where: {
      user_id: parseInt(user_id, 10),
    },
    include: {
      cart_item: {
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
  return NextResponse.json(cart);
}
