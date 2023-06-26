"use client";
import { useAppSelector } from "@/hooks/redux";
import Image from "next/image";
import React from "react";

const ProductDetailImage = ({ product }: any) => {
  const fixed = useAppSelector((state: any) => state.fixedReducer.fixed);
  const variant = useAppSelector((state: any) => state.variantReducer.variant);

  return (
    <div
      className={`grid gap-6 grid-cols-2 flex-grow-[8] max-w-[1014px] ${fixed && "mr-[456px]"
        }`}
    >
      {product.productVariants[variant].images
        .map((item: any) => item.imageUrl)
        .map((item: any, index: number) => (
          <Image
            key={index}
            src={item}
            alt="product"
            width={330}
            height={440}
            className="w-full object-cover object-center cursor-pointer"
          />
        ))}
    </div>
  );
};

export default ProductDetailImage;
