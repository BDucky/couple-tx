import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
import { parse } from "url";
import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  const { search } = parse(req.url || "", true);
  const searchParams = new URLSearchParams(search || "");
  const sdt = searchParams.get("key") as string;
  if (!sdt) {
    return NextResponse.json(null);
  } else {
    const user = await prisma.user.findFirst({
      where: {
        phone: sdt,
      },
    });
    return NextResponse.json(user);
  }
}
