import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { id, phone, first_name, last_name, gender, date_of_birth } =
    await req.json();

  await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      phone: phone,
      last_name: last_name,
      first_name: first_name,
      gender: gender,
      date_of_birth: date_of_birth,
    },
  });

  return NextResponse.json("Updated");
}
