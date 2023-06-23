"use client";
import { filterColors } from "@/constant/Color";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { filterColor } from "@/store/filterSlice";
import React from "react";

const Filter = () => {
  const dispatch = useAppDispatch();
  const colors = useAppSelector((state: any) => state.filterReducer.colors);
  const userColors = filterColors.map((item) => item.vnColor);
  const handleActiveColor = (color: string) => {
    if (colors.length < userColors.length && !colors.includes(color)) {
      dispatch(filterColor(color));
    }
  };
  return (
    <div className="flex flex-col p-3 border border-black w-[330px] relative">
      <div className="w-3 h-[3px] bg-black absolute right-[18px] top-[18px] cursor-pointer"></div>
      <div>
        <h1 className="mb-[30px] font-bold text-left text-xs">MÀU SẮC</h1>
        <div>
          <div className="flex flex-wrap items-center justify-start gap-x-3 max-w-[272px] mb-2">
            {filterColors &&
              filterColors.map((item) => (
                <div
                  onClick={() => handleActiveColor(item.enColor)}
                  key={item.enColor}
                  className="mb-2 border border-black rounded-full cursor-pointer w-7 h-7 "
                  style={{
                    backgroundColor: item.enColor,
                  }}
                ></div>
              ))}
          </div>
          <div className="w-full h-[0.9px] bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
