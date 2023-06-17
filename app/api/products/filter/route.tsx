import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { search } = parse(req.url || "", true);
    const searchParams = new URLSearchParams(search || "");
    const key = searchParams.get("key") as string;
    const value = searchParams.get("value") as string;
    if (!key || !value) {
      const products = await prisma.products.findMany({});
      return NextResponse.json(products);
    }

    let products;

    if (key === "color") {
      products = await prisma.products.findMany({
        where: {
          productVariants: {
            some: {
              color: value,
            },
          },
        },
      });
    } else if (key === "size") {
      products = await prisma.products.findMany({
        where: {
          productVariants: {
            some: {
              size: {
                some: {
                  name_size: value,
                },
              },
            },
          },
        },
      });
    } else if (key === "gender") {
      products = await prisma.products.findMany({
        where: {
          genders: {
            name: value,
          },
        },
      });
    } else if (key === "price") {
      let priceCondition;
      if (parseInt(value) === 1) {
        priceCondition = { lt: 300000 };
      } else if (parseInt(value) === 2) {
        priceCondition = { lt: 500000 };
      } else if (parseInt(value) === 3) {
        priceCondition = { gt: 500000 };
      } else {
        return NextResponse.json({ error: "Invalid value" });
      }

      products = await prisma.products.findMany({
        where: {
          productVariants: {
            some: {
              price: priceCondition,
            },
          },
        },
      });
    } else {
      return NextResponse.json({ error: "Invalid key" });
    }

    return NextResponse.json(products);
  }
}
