import Providers from "@/components/Provider";
import LayoutProductDetail from "@/components/layout/LayoutProductDetail";
import ProductDetailImage from "@/components/ProductDetailImage";
import ProductSideBar from "@/components/ProductSideBar";
import React from "react";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import Comment from "@/components/Comment";
import ListComment from "@/components/ListComment";

const ProductDetial = async ({ params }: { params: { id: string } }) => {
  const product = await getProductDetial(params.id);
  return (
    <LayoutWebsite>
      <div className=" p-3 mx-auto max-w-[1480px]">
        <Providers>
          <LayoutProductDetail>
            <>
              <ProductDetailImage product={product}></ProductDetailImage>
              <ProductSideBar product={product}></ProductSideBar>
            </>
          </LayoutProductDetail>
          <Comment product={product} />
          <ListComment id={product.id} />
        </Providers>
      </div>
    </LayoutWebsite>
  );
};

async function getProductDetial(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/products/findById?id=${id}`
  );
  return res.json();
}

export default ProductDetial;
