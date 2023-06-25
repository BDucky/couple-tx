import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: Request, res: NextApiResponse) {
  //   const { search } = parse(req.url || "", true);
  //   const searchParams = new URLSearchParams(search || "");
  //   const user_id = searchParams.get("id") as string;

  const blogs = await prisma.blogs.findMany({});
  return NextResponse.json(blogs);
}
