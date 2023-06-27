import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const { blog_id } = await req.json();

  await prisma.blogs.delete({
    where: {
      id: parseInt(blog_id),
    },
  });
  return NextResponse.json("Deleted");
}
