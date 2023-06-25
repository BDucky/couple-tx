"use client";
import { filterColors } from "@/constant/Color";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { filterColor } from "@/store/filterSlice";
import FilterItem from "./FilterItem";

const FilterColor = () => {
  const dispatch = useAppDispatch();
  const colors = useAppSelector((state: any) => state.filterReducer.colors);
  const userColors = filterColors.map((item) => item.vnColor);
  const handleActiveColor = (e: any, color: string) => {
    e.stopPropagation();
    if (colors.length < userColors.length && !colors.includes(color)) {
      dispatch(filterColor(color));
    }
  };
  return (
    <FilterItem title="MÀU SẮC" name="color">
      <div className="flex flex-wrap items-center justify-start gap-x-3 max-w-[272px] mb-2">
        {filterColors &&
          filterColors.map((item) => (
            <div
              onClick={(event) => handleActiveColor(event, item.enColor)}
              key={item.enColor}
              className="mb-2 border border-black rounded-full cursor-pointer w-7 h-7 "
              style={{
                backgroundColor: item.enColor,
              }}
            ></div>
          ))}
      </div>
    </FilterItem>
  );
};

export default FilterColor;
