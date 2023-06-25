import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const { user_id, title, image } = await req.json();

  await prisma.blogs.create({
    data: {
      title: title,
      user_id: parseInt(user_id, 10),
      image: image,
    },
  });
  return NextResponse.json("created");
}
