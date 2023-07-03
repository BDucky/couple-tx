import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
import { parse } from "url";
import { NextApiRequest } from "next";

export async function GET(req: any) {
  const { search } = parse(req.url || "", true);
  const searchParams = new URLSearchParams(search || "");
  const id = searchParams.get("key") as string;
  if (!id) {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } else {
    const user = await prisma.user.findFirst({
      where: {
        id: parseInt(id, 10),
      },
    });
    return NextResponse.json(user);
  }
}
