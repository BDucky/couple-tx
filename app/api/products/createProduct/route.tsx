import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

import prisma from "@/libs/prismadb";

export async function POST(req: Request) {
  console.log(req);
  const body = await req.json();
  const {
    product_name,
    product_preference,
    product_information,
    gender,
    productVariants,
  } = body;
  const products = await prisma.products.create({
    data: {
      product_name: product_name,
      favorite_counters: 0,
      product_references: product_preference,
      information: product_information,
      subcategory_id: 1,
      category_id: 1,
      gender_id: gender.value,
      created_at: new Date(),
    },
  });
  const productId = products.id;
  productVariants.forEach(async (variantData: any) => {
    const variant = await prisma.productsVariant.create({
      data: {
        product_id: productId,
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
  return NextResponse.json(products);
}
