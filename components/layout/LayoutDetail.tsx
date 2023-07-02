import { SortBtn } from "@/module/Home";
import React from "react";
import LayoutCard from "./LayoutCard";
import ColorItem from "../ColorItem";
import SizeItem from "../SizeItem";
import { useAppSelector } from "@/hooks/redux";

const LayoutDetail = ({ products }: any) => {
  const fixed = useAppSelector((state: any) => state.filterReducer.fixed);
  console.log(products);

  return (
    <div className={`flex flex-col gap-y-5 ${fixed && "ml-[330px]"}`}>
      <SortBtn></SortBtn>
      <div className="inline-flex gap-x-2">
        {products && products.length > 0 && <ColorItem></ColorItem>}
        {products && products.length > 0 && <SizeItem></SizeItem>}
      </div>
      {products && products.length > 0 && (
        <LayoutCard products={products}></LayoutCard>
      )}
    </div>
  );
};

export default LayoutDetail;
