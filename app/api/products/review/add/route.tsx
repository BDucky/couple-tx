import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

import prisma from "@/libs/prismadb";

export async function POST(req: Request) {
  const { title, description, star, product_id, images } = await req.json();

  const review = await prisma.rate.create({
    data: {
      title: title,
      description: description,
      star: parseFloat(star),
      product_id: product_id,
    },
  });
  images.forEach(async (img: string) => {
    await prisma.rateImage.create({
      data: {
        rate_id: review.id,
        imageUrl: img,
      },
    });
  });
  return NextResponse.json("added");
}
