import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

import prisma from "@/libs/prismadb";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    product_id,
    product_name,
    productVariants,
    category_id,
    subcategory_id,
    product_preference,
    product_information,
    gender,
  } = body;
  if (!product_name || !category_id || !subcategory_id) {
    return NextResponse.json("thieeu");
  }
  await prisma.productsVariant.deleteMany({
    where: {
      product_id: parseInt(product_id),
    },
  });
  const product = await prisma.products.findFirst({
    where: {
      id: parseInt(product_id),
    },
  });
  let productFind = undefined;
  if (product) {
    productFind = product;
  }
  const products = await prisma.products.update({
    where: {
      id: parseInt(product_id),
    },
    data: {
      product_name: product_name,
      product_references: product_preference,
      information: product_information,
      subcategory_id: parseInt(subcategory_id),
      category_id: parseInt(category_id),
      gender_id: gender.value ? gender.value : productFind?.gender_id,
      created_at: new Date(),
    },
  });
  if (productVariants.length > 0) {
    productVariants.forEach(async (variantData: any) => {
      const variant = await prisma.productsVariant.create({
        data: {
          product_id: parseInt(product_id),
          color: variantData.color,
          price: parseInt(variantData.price, 10),
          quantity: parseInt(variantData.quantity, 10),
          product_variant_name: variantData.product_variant_name,
        },
      });
      const id = variant.id;
      variantData.images.forEach(async (img: string) => {
        const image = await prisma.productsVariantImage.create({
          data: {
            product_variant_id: id,
            imageUrl: img,
          },
        });
      });
      variantData.size.forEach(async (size: any) => {
        const s = await prisma.size.create({
          data: {
            product_variant_id: id,
            name_size: size.nameSize,
          },
        });
        const sizeId = s.id;
        size.technical_specification.forEach(async (ts: any) => {
          const techSpec = await prisma.technical_specification.create({
            data: {
              size_id: sizeId,
              name_technical_specification: ts.key,
              value: parseFloat(ts.value),
            },
          });
        });
      });
    });
  }

  return NextResponse.json("updated");
}
