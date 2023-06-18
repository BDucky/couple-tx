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
    if (!key) {
      const products = await prisma.products.findMany({
        include: {
          productVariants: {
            include: {
              images: true,
            },
          },
        },
      });
      return NextResponse.json(products);
    }

    if (key === "category") {
      const category = await prisma.categories.findMany({
        where: {
          name: value,
        },
        include: {
          products: true,
        },
      });
      return NextResponse.json(category);
    }
    if (key === "sub_category") {
      const category = await prisma.subCategory.findMany({
        where: {
          name: value,
        },
        include: {
          products: {
            include: {
              productVariants: {
                include: {
                  images: true,
                },
              },
            },
          },
        },
      });
      return NextResponse.json(category);
    }

    let products;
    if (key === "new") {
      const currentDate = new Date();
      const twoDaysAgo = new Date(
        currentDate.getTime() - 2 * 24 * 60 * 60 * 1000
      );

      const products = await prisma.products.findMany({
        where: {
          created_at: {
            gte: twoDaysAgo,
            lte: currentDate,
          },
        },
        include: {
          productVariants: {
            include: {
              images: true,
            },
          },
        },
      });
      return NextResponse.json(products);
    }
    if (key === "color") {
      products = await prisma.products.findMany({
        where: {
          productVariants: {
            some: {
              color: value,
            },
          },
        },
        include: {
          productVariants: {
            include: {
              images: true,
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
        include: {
          productVariants: {
            include: {
              images: true,
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
        include: {
          productVariants: {
            include: {
              images: true,
            },
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
        include: {
          productVariants: {
            include: {
              images: true,
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
