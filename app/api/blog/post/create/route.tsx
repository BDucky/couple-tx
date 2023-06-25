import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const { body, image, author_id, title, blog_id } = await req.json();

  await prisma.posts.create({
    data: {
      title: title,
      author_id: parseInt(author_id, 10),
      image: image,
      body: body,
      blog_id: parseInt(blog_id, 10),
    },
  });
  return NextResponse.json("created");
}
