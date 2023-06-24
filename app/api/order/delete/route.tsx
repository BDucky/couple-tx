import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

import prisma from "@/libs/prismadb";

export async function POST(req: Request) {
  const body = await req.json();
  const { order_id } = body;

  await prisma.order.delete({
    where: { id: order_id },
  });
  return NextResponse.json("deleted");
}
