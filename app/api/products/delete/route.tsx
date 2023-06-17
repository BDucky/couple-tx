import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  const { id } = body;
  const product = await prisma.products.delete({
    where: { id: parseInt(id) },
  });
  return NextResponse.json(product);
}
