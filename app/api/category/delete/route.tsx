import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const { category_id } = await req.json();

  await prisma.categories.delete({
    where: {
      id: parseInt(category_id),
    },
  });
  return NextResponse.json("Deleted");
}
