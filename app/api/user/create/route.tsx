import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { sdt } = body;
  if (!sdt) {
    return NextResponse.json(null);
  } else {
    const user = await prisma.user.findFirst({
      where: {
        phone: sdt,
      },
    });
    if (user) {
      return NextResponse.json(user);
    } else {
      const user = await prisma.user.create({
        data: {
          phone: sdt,
          gender: "",
        },
      });
      return NextResponse.json(user);
    }
  }
}
