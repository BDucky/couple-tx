import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const blogs = await prisma.blogs.findMany({
    include: {
      posts: true,
    },
  });
  return NextResponse.json(blogs);
}
