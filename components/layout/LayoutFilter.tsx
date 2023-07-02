"use client";
import React from "react";
import Filter from "../filter/Filter";
import LayoutDetail from "./LayoutDetail";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setGender } from "@/store/genderSlice";

const LayoutFilter = ({ products = [], gender = "" }: any) => {
  const dispatch = useAppDispatch();
  if (gender === "men") {
    dispatch(setGender("men"));
  } else if (gender === "women") {
    dispatch(setGender("women"));
  }
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
