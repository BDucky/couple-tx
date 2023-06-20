import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();
  const { user_id, product_variant_id } = body;

  const cart = await prisma.cart.findFirst({
    where: {
      user_id: user_id,
    },
    include: {
      cart_item: true,
    },
  });
  if (cart) {
    const cartItemData = cart.cart_item.filter(
      (c) => c.product_variant_id === product_variant_id
    );
    if (cartItemData) {
      await prisma.cartItem.delete({
        where: {
          id: cartItemData[0].id,
        },
      });
    }
    return NextResponse.json("Deleted");
  } else {
    return NextResponse.json("Invalid Value");
  }
}
