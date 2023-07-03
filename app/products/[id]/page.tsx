"use client";

import Providers from "@/components/Provider";
import LayoutProductDetail from "@/components/layout/LayoutProductDetail";
import ProductDetailImage from "@/components/ProductDetailImage";
import ProductSideBar from "@/components/ProductSideBar";
import React, { useCallback, useEffect, useState } from "react";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import Comment from "@/components/Comment";
import ListComment from "@/components/ListComment";
import { useParams } from "next/navigation";
import axios from "axios";

const ProductDetial = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>();
  const getData = useCallback(async () => {
    await axios
      .get(`/api/products/findById?id=${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <LayoutWebsite>
      <div className=" p-3 mx-auto max-w-[1480px]">
        <Providers>
          <LayoutProductDetail>
            <>
              <ProductDetailImage product={product}></ProductDetailImage>
              <ProductSideBar product={product && product}></ProductSideBar>
            </>
          </LayoutProductDetail>
          <Comment product={product} />
          <ListComment id={product && product.id} />
        </Providers>
      </div>
    </LayoutWebsite>
  );
};

export default ProductDetial;
