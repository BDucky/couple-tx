import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();

  const { id, image, name } = body;

  const subcategory = await prisma.subCategory.create({
    data: {
      image: image,
      name: name,
      category_id: parseInt(id),
    },
  });
  return NextResponse.json(subcategory);
}
