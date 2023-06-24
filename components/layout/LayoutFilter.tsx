"use client";
import React from "react";
import Filter from "../Filter";
import LayoutCard from "./LayoutCard";
import ColorItem from "../ColorItem";
import { Card } from "../home";

const LayoutFilter = async ({ products }: any) => {
  return (
    <div className="flex items-start !mb-10 gap-x-3">
      <div>
        <Filter></Filter>
      </div>
      <div className="flex flex-col gap-y-5">
        {products && products.length > 0 && <ColorItem></ColorItem>}
        {products && products.length > 0 && (
          <LayoutCard products={products}></LayoutCard>
        )}
      </div>
    </div>
  );
};

export default LayoutFilter;
