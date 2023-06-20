import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();
  const { user_id, product_variant_id, quantity } = body;

  const cart = await prisma.cart.findFirst({
    where: {
      user_id: user_id,
    },
  });

  if (cart) {
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        product_variant_id: parseInt(product_variant_id),
      },
    });

    if (!cartItem) {
      const variant = await prisma.productsVariant.findFirst({
        where: {
          id: parseInt(product_variant_id),
        },
      });
      if (variant) {
        await prisma.cartItem.create({
          data: {
            product_variant_id: product_variant_id,
            quantity: quantity,
            cart_id: cart.id,
            total_price: variant.price * parseInt(quantity, 10),
          },
        });
      }
    }
    if (cartItem) {
      await prisma.cartItem.update({
        where: {
          id: cartItem.id,
        },
        data: {
          quantity: cartItem.quantity + quantity,
        },
      });
      const productVariant = await prisma.productsVariant.findFirst({
        where: {
          id: product_variant_id,
        },
      });

      if (productVariant) {
        const currentQuantity = productVariant.quantity;
        const updatedQuantity = currentQuantity - quantity;
        await prisma.productsVariant.update({
          where: {
            id: product_variant_id,
          },
          data: {
            quantity: updatedQuantity,
          },
        });
      }
    }
  }
  if (!cart) {
    const cart = await prisma.cart.create({
      data: {
        user_id: user_id,
      },
    });
    const productVariant = await prisma.productsVariant.findFirst({
      where: {
        id: product_variant_id,
      },
    });
    if (productVariant) {
      const cartItem = await prisma.cartItem.create({
        data: {
          product_variant_id: product_variant_id,
          quantity: parseInt(quantity, 10),
          total_price: parseInt(quantity, 10) * productVariant.price,
          cart_id: cart.id,
        },
      });
    }
    return NextResponse.json(cart);
  }
  return NextResponse.json(cart);
}
