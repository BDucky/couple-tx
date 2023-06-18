import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();
  const { name, image, gender } = body;
  const { id } = body;
  if (!id) {
    const newCategory = await prisma.categories.create({
      data: {
        name: name,
        image: image,
        gender: gender,
      },
    });
    return NextResponse.json(newCategory);
  }
  const category = await prisma.categories.findFirst({
    where: {
      id: parseInt(id),
    },
  });

  if (category) {
    const updateCategory = await prisma.categories.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name,
        image: image,
        gender: gender,
      },
    });
    return NextResponse.json(updateCategory);
  }
}
