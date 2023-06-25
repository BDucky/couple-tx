import React from "react";
import FilterItem from "./FilterItem";
import { Sizes } from "@/constant/Size";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { filterSize } from "@/store/filterSlice";

const FilterSize = () => {
  const dispatch = useAppDispatch();
  const sizes = useAppSelector((state: any) => state.filterReducer.sizes);
  const handleActiveSize = (e: any, size: string) => {
    e.stopPropagation();
    if (sizes.length < Sizes.length && !sizes.includes(size)) {
      dispatch(filterSize(size));
    }
  };
  return (
    <FilterItem title="SIZE" name="size">
      <div className="grid grid-cols-3 gap-x-3 gap-y-2 mb-[15px]">
        {Sizes.map((size) => (
          <div
            onClick={(e) => handleActiveSize(e, size)}
            key={size}
            className="px-4 py-2 text-xs text-center border border-gray-400 select-none hover:bg-gray-200"
          >
            {size}
          </div>
        ))}
      </div>
    </FilterItem>
  );
};

export default FilterSize;
