import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

import prisma from "@/libs/prismadb";

export async function POST(req: Request) {
  const { user_id, title, description, star, product_id, images } =
    await req.json();

  const review = await prisma.rate.create({
    data: {
      user_id: user_id,
      title: title,
      description: description,
      star: parseFloat(star),
      product_id: product_id,
    },
  });
  if (images.length > 0) {
    images.forEach(async (img: string) => {
      await prisma.rateImage.create({
        data: {
          rate_id: review.id,
          imageUrl: img,
        },
      });
    });
  }
  return NextResponse.json("added");
}
