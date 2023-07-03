import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: any) {
  const { search } = parse(req.url || "", true);
  const searchParams = new URLSearchParams(search || "");
  const id = searchParams.get("id") as string;

  if (id) {
    const orders = await prisma.order.findMany({
      where: {
        user_id: parseInt(id, 10),
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(orders);
  }
  const orders = await prisma.order.findMany({
    include: {
      user: true,
    },
  });

  return NextResponse.json(orders);
}
