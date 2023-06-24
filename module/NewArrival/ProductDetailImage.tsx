"use client";
import { defaultImage } from "@/constant/Image";
import { useAppSelector } from "@/hooks/redux";
import Image from "next/image";
import React from "react";

const ProductDetailImage = ({ product }: any) => {
  const fixed = useAppSelector((state: any) => state.fixedReducer.fixed);

  return (
    <div
      className={`grid gap-6 grid-cols-2 flex-grow-[8] max-w-[1014px] ${
        fixed && "mr-[456px]"
      }`}
    >
      {product.productVariants.map((item: any, index: number) => (
        <Image
          key={item.id}
          src={item.images[0].imageUrl}
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
