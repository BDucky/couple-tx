import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: Request, res: NextApiResponse) {
  const { search } = parse(req.url || "", true);
  const searchParams = new URLSearchParams(search || "");
  const id = searchParams.get("id") as string;

  const posts = await prisma.posts.findFirst({
    where: {
      id: parseInt(id, 10),
    },
  });
  return NextResponse.json(posts);
}
