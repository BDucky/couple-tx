import Providers from "@/components/Provider";
import LayoutProductDetail from "@/components/layout/LayoutProductDetail";
import ProductDetailImage from "@/module/NewArrival/ProductDetailImage";
import ProductInfo from "@/module/NewArrival/ProductInfo";
import ProductSideBar from "@/module/NewArrival/ProductSideBar";
import Image from "next/image";
import React from "react";

const ProductDetial = async ({ params }: { params: { id: string } }) => {
  const product = await getProductDetial(params.id);
  console.log("product", product);
  return (
    <div className="min-h-[3000px] mx-auto max-w-[1480px]">
      <Providers>
        <LayoutProductDetail>
          <>
            <ProductDetailImage product={product}></ProductDetailImage>
            <ProductSideBar product={product}></ProductSideBar>
          </>
        </LayoutProductDetail>
      </Providers>
    </div>
  );
};

async function getProductDetial(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/products/findById?id=${id}`
  );
  return res.json();
}

export default ProductDetial;
