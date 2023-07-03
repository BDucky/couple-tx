import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();
  const { user_id, payment_method, address, phone, full_name } = body;

  const cart = await prisma.cart.findFirst({
    where: {
      user_id: user_id,
    },
    include: {
      cart_item: true,
    },
  });
  if (cart) {
    let total_price = 0;

    cart.cart_item.forEach((i) => {
      return (total_price += i.total_price);
    });

    const order = await prisma.order.create({
      data: {
        user_id: user_id,
        address: address,
        payment_method: payment_method,
        total_price: total_price,
        full_name: full_name,
        phone_number: phone,
      },
    });

    cart.cart_item.forEach(async (i) => {
      await prisma.orderItem.create({
        data: {
          total_price: i.total_price,
          order_id: order.id,
          quantity: i.quantity,
          product_variant_id: i.product_variant_id,
        },
      });
    });

    await prisma.cart.delete({
      where: {
        id: cart.id,
      },
    });
  }
  return NextResponse.json("success");
}
