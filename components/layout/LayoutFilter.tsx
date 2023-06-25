"use client";
import React from "react";
import Filter from "../filter/Filter";
import LayoutCard from "./LayoutCard";
import ColorItem from "../ColorItem";
import SizeItem from "../SizeItem";
import { SortBtn } from "@/module/Home";

const LayoutFilter = async ({ products = [] }: any) => {
  return (
    <div className="flex items-start !mb-10 gap-x-3">
      <div>
        <Filter></Filter>
      </div>
      <div className="flex flex-col gap-y-5">
        <SortBtn></SortBtn>
        <div className="inline-flex gap-x-2">
          {products && products.length > 0 && <ColorItem></ColorItem>}
          {products && products.length > 0 && <SizeItem></SizeItem>}
        </div>
        {products && products.length > 0 && (
          <LayoutCard products={products}></LayoutCard>
        )}
      </div>
    </div>
  );
};

export default LayoutFilter;
