import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const { id, author_id, body, title, image } = await req.json();

  const post = await prisma.posts.findFirst({
    where: {
      id: parseInt(id, 10),
    },
  });
  if (post) {
    await prisma.posts.update({
      where: {
        id: post.id,
      },
      data: {
        title: title == "" ? post.title : title,
        author_id: parseInt(author_id, 10),
        image: image,
        body: body == "" ? post.body : title,
      },
    });
    return NextResponse.json("updated");
  }
}
