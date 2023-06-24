"use client";
import { filterColors } from "@/constant/Color";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { deleteFilterColor } from "@/store/filterSlice";
import React, { Fragment } from "react";

const ColorItem = () => {
  const colors = useAppSelector((state: any) => state.filterReducer.colors);
  const dispatch = useAppDispatch();
  const handleDeleteFilterColor = (color: string) => {
    dispatch(deleteFilterColor(color));
  };
  return (
    <Fragment>
      {colors && colors.length > 0 && (
        <div className="flex gap-x-2">
          {colors &&
            colors.length > 0 &&
            colors.map((item: string, index: number) => (
              <div
                key={item}
                className="px-3 py-1 border border-gray-500 rounded-md"
              >
                <div className="flex items-center gap-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                  <span>
                    {
                      filterColors.find((color) => color.enColor == item)
                        .vnColor
                    }
                  </span>
                  <span onClick={() => handleDeleteFilterColor(item)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default ColorItem;
