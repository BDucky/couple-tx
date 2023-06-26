"use client";
import React, { useEffect, useState } from "react";
import FilterColor from "./FilterColor";
import FilterSize from "./FilterSize";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { handleFixed } from "@/store/filterSlice";

const Filter = () => {
  const dispatch = useAppDispatch();
  const [scrollPosition, setScrollPosition] = useState(0);
  const fixed = useAppSelector((state: any) => state.filterReducer.fixed);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (scrollPosition > 380) {
        if (scrollPosition > 1300) {
          dispatch(handleFixed(false));
        } else {
          dispatch(handleFixed(true));
        }
      } else {
        dispatch(handleFixed(false));
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, scrollPosition]);
  return (
    <div
      className={`flex flex-col gap-y-3 p-3 border ${
        scrollPosition > 1300 && "mt-[1100px]"
      } border-black w-[330px] ${fixed && "fixed top-[160px] z-10"}`}
    >
      <FilterColor></FilterColor>
      <FilterSize></FilterSize>
    </div>
  );
};

export default Filter;
