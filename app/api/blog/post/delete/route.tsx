import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const { post_id } = await req.json();

  await prisma.posts.delete({
    where: {
      id: parseInt(post_id),
    },
  });
  return NextResponse.json("Deleted");
}
