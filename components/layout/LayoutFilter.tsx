"use client";
import React from "react";
import Filter from "../filter/Filter";
import LayoutCard from "./LayoutCard";
import ColorItem from "../ColorItem";
import SizeItem from "../SizeItem";
import { SortBtn } from "@/module/Home";
import LayoutDetail from "./LayoutDetail";

const LayoutFilter = async ({ products = [] }: any) => {
  return (
    <div className="flex items-start !mb-10 gap-x-3">
      <div>
        <Filter></Filter>
      </div>
      <LayoutDetail products={products}></LayoutDetail>
    </div>
  );
};

export default LayoutFilter;
