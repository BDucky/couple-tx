import prisma from "@/libs/prismadb";
import { parse } from "url";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const { search } = parse(req.url || "", true);
  const searchParams = new URLSearchParams(search || "");
  const product_id = searchParams.get("product_id") as string;

  const reviews = await prisma.rate.findMany({
    where: {
      id: parseInt(product_id),
    },
    include: {
      images: true,
    },
  });
  return NextResponse.json(reviews);
}
