import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const { id, user_id, title, image } = await req.json();

  const blog = await prisma.blogs.findFirst({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (blog) {
    await prisma.blogs.update({
      where: {
        id: blog.id,
      },
      data: {
        user_id: user_id,
        title: title,
        image: image,
      },
    });
    return NextResponse.json("updated");
  }
}
