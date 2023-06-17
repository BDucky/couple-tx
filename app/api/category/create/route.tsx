import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();
  const { name, image, gender } = body;

  const category = await prisma.categories.create({
    data: {
      name: name,
      image: image,
      gender: gender,
    },
  });
  return NextResponse.json(category);
}
