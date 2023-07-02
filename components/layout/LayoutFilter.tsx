"use client";
import React from "react";
import Filter from "../filter/Filter";
import LayoutDetail from "./LayoutDetail";

const LayoutFilter = (products: any) => {
  console.log(products.products);

  return (
    <div className="flex items-start !mb-10 gap-x-3">
      <div>
        <Filter></Filter>
      </div>
      <LayoutDetail products={products.products}></LayoutDetail>
    </div>
  );
};

export default LayoutFilter;
