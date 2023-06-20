import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { search } = parse(req.url || "", true);
  const searchParams = new URLSearchParams(search || "");
  const key = searchParams.get("key") as string;

  if (!key) {
    const categories = await prisma.categories.findMany({
      include: {
        subcategories: true,
      },
    });
    return NextResponse.json(categories);
  }
  if (key === "id") {
    const id = searchParams.get("value") as string;
    const category = await prisma.categories.findFirst({
      where: { id: parseInt(id) },
      include: {
        subcategories: true,
      },
    });
    return NextResponse.json(category);
  }
  if (key === "sub_category") {
    const value = searchParams.get("value") as string;
    if (!value) {
      const sub_category = await prisma.subCategory.findMany();
      return NextResponse.json(sub_category);
    }
  }
  if (key === "gender") {
    const value = searchParams.get("value") as string;
    const category = await prisma.categories.findMany({
      where: {
        gender: value,
      },
      include: {
        subcategories: true,
      },
    });
    return NextResponse.json(category);
  }
}
