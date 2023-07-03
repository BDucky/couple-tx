import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: any) {
  if (req.method === "GET") {
    const { search } = parse(req.url || "", true);
    const searchParams = new URLSearchParams(search || "");
    const key = searchParams.get("key") as string;
    const value = searchParams.get("value") as string;
    const color = searchParams.getAll("color") as string[];
    const size = searchParams.getAll("size") as string[];
    const gender = searchParams.getAll("gender") as string[];
    const price = searchParams.get("price") as string;

    if (!key) {
      const products = await prisma.products.findMany({
        where: {
          AND: [
            color.length > 0
              ? {
                  productVariants: {
                    some: {
                      color: {
                        in: color,
                      },
                    },
                  },
                }
              : {},
            size.length > 0
              ? {
                  productVariants: {
                    some: {
                      size: {
                        some: {
                          name_size: {
                            in: size,
                          },
                        },
                      },
                    },
                  },
                }
              : {},

            gender.length > 0
              ? {
                  genders: {
                    name: {
                      in: gender,
                    },
                  },
                }
              : {},
          ],
        },
        include: {
          rates: {
            include: {
              images: true,
            },
          },
          productVariants: {
            include: {
              images: true,
            },
          },
        },
      });
      if (price) {
        console.log("price");

        let res;
        if (parseInt(price) === 1) {
          res = products.filter((product) =>
            product.productVariants.some((item) => item.price < 300000)
          );
        } else if (parseInt(price) === 2) {
          res = products.filter((product) =>
            product.productVariants.some((item) => item.price < 500000)
          );
        } else if (parseInt(price) === 3) {
          res = products.filter((product) =>
            product.productVariants.some((item) => item.price > 500000)
          );
        }
        return NextResponse.json(res);
      }
      return NextResponse.json(products);
    }

    if (key === "category") {
      const category = await prisma.categories.findMany({
        where: {
          name: value,
        },
        include: {
          products: {
            include: {
              rates: {
                include: {
                  images: true,
                },
              },
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
    if (key === "sub_category") {
      const category = await prisma.subCategory.findFirst({
        where: {
          name: value,
        },
        include: {
          products: {
            include: {
              rates: {
                include: {
                  images: true,
                },
              },
              productVariants: {
                include: {
                  images: true,
                },
              },
            },
          },
        },
      });

      if (category) {
        const products = await prisma.products.findMany({
          where: {
            subcategory_id: category.id,
            AND: [
              color.length > 0
                ? {
                    productVariants: {
                      some: {
                        color: {
                          in: color,
                        },
                      },
                    },
                  }
                : {},
              size.length > 0
                ? {
                    productVariants: {
                      some: {
                        size: {
                          some: {
                            name_size: {
                              in: size,
                            },
                          },
                        },
                      },
                    },
                  }
                : {},
              gender.length > 0
                ? {
                    genders: {
                      name: {
                        in: gender,
                      },
                    },
                  }
                : {},
            ],
          },
          include: {
            rates: {
              include: {
                images: true,
              },
            },
            productVariants: {
              include: {
                images: true,
              },
            },
          },
        });

        if (price) {
          console.log("price");

          let res;
          if (parseInt(price) === 1) {
            res = products.filter((product) =>
              product.productVariants.some((item) => item.price < 300000)
            );
          } else if (parseInt(price) === 2) {
            res = products.filter((product) =>
              product.productVariants.some((item) => item.price < 500000)
            );
          } else if (parseInt(price) === 3) {
            res = products.filter((product) =>
              product.productVariants.some((item) => item.price > 500000)
            );
          }
          return NextResponse.json(res);
        }

        return NextResponse.json(products);
      }
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
          AND: [
            color.length > 0
              ? {
                  productVariants: {
                    some: {
                      color: {
                        in: color,
                      },
                    },
                  },
                }
              : {},
            size.length > 0
              ? {
                  productVariants: {
                    some: {
                      size: {
                        some: {
                          name_size: {
                            in: size,
                          },
                        },
                      },
                    },
                  },
                }
              : {},

            gender.length > 0
              ? {
                  genders: {
                    name: {
                      in: gender,
                    },
                  },
                }
              : {},
          ],
        },
        include: {
          rates: {
            include: {
              images: true,
            },
          },
          productVariants: {
            include: {
              images: true,
            },
          },
        },
      });
      if (price) {
        let product = products;
        let res;
        if (parseInt(price) === 1) {
          res = product.filter((product) =>
            product.productVariants.some((item) => item.price < 300000)
          );
        }
        if (parseInt(price) === 2) {
          res = product.filter((product) =>
            product.productVariants.some((item) => item.price < 500000)
          );
        }
        if (parseInt(price) === 3) {
          res = product.filter((product) =>
            product.productVariants.some((item) => item.price > 500000)
          );
        }
        return NextResponse.json(res);
      }
      return NextResponse.json(products);
    }

    return NextResponse.json(products);
  }
}
