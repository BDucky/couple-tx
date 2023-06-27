import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const { sub_category_id } = await req.json();

  await prisma.subCategory.delete({
    where: {
      id: parseInt(sub_category_id),
    },
  });
  return NextResponse.json("Deleted");
}
