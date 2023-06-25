"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../home";
import { useAppSelector } from "@/hooks/redux";
import axios from "axios";

const LayoutCard = ({ products }: any) => {
  const [filterProduct, setFilterProduct] = useState(products);
  const colors = useAppSelector((state: any) => state.filterReducer.colors);
  useEffect(() => {
    async function getData() {
      if (colors.length > 0) {
        const queryColors = colors
          .map((item: any) => "&color=" + item)
          .join("");
        const res = await axios.get(
          ` http://localhost:3000/api/products/filter?color=${colors[0]}${
            colors.length > 1 ? queryColors : ""
          }`
        );
        const data = res.data;
        setFilterProduct(data);
      } else {
        setFilterProduct(products);
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors.length, colors]);
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
