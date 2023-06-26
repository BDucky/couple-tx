"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "../home";
import { useAppSelector } from "@/hooks/redux";
import axios from "axios";

const LayoutCard = ({ products = [] }: any) => {
  const [filterProduct, setFilterProduct] = useState(products);
  const colors = useAppSelector((state: any) => state.filterReducer.colors);
  const sizes = useAppSelector((state: any) => state.filterReducer.sizes);
  const firstValue = useRef("");

  useEffect(() => {
    async function getData() {
      if (colors.length > 0 || sizes.length > 0) {
        if (colors.length > 0 && sizes.length <= 0) {
          firstValue.current = `color=${colors[0]}`;
        } else if (sizes.length > 0 && colors.length <= 0) {
          firstValue.current = `size=${sizes[0]}`;
        }
        const queryColors = colors
          .map((item: any) => "&color=" + item)
          .join("");
        const querySize = sizes.map((item: any) => "&size=" + item).join("");
        const res = await axios.get(
          ` http://localhost:3000/api/products/filter?${firstValue.current}${
            colors.length > 0 ? queryColors : ""
          }
          ${sizes.length > 0 ? querySize : ""}
          `
        );
        const data = res.data;
        setFilterProduct(data);
      } else {
        setFilterProduct(products);
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors.length, sizes.length]);
  return (
    <div
      className="grid"
      style={{
        rowGap: "50px",
        columnGap: "50px",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        maxWidth: "1000px",
      }}
    >
      {filterProduct &&
        filterProduct.length > 0 &&
        filterProduct.map((product: any) => (
          <Card key={product.product_name} productId={product.id}></Card>
        ))}
    </div>
  );
};

export default LayoutCard;
