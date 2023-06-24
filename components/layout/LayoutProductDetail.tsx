"use client";
import { useAppSelector } from "@/hooks/redux";
import React from "react";

const LayoutProductDetail = ({ children }: any) => {
  const fixed = useAppSelector((state: any) => state.fixedReducer.fixed);

  return (
    <div
      className={`flex gap-x-[60px] mt-5 max-h-[2777px] ${
        fixed && "overflow-y-auto scrollBar relative"
      }`}
    >
      {children}
    </div>
  );
};

export default LayoutProductDetail;
