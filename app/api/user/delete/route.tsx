import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { user_id } = await req.json();
  await prisma.user.delete({
    where: {
      id: user_id,
    },
  });
  return NextResponse.json("deleted");
}
