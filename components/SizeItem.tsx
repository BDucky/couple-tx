"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { deleteFilterSize } from "@/store/filterSlice";
import React from "react";

const SizeItem = () => {
  const sizes = useAppSelector((state: any) => state.filterReducer.sizes);
  const dispatch = useAppDispatch();
  const handleDeleteFilterSize = (size: string) => {
    dispatch(deleteFilterSize(size));
  };
  return (
    <>
      {sizes && sizes.length > 0 && (
        <>
          {sizes.map((size: any, index: number) => (
            <div
              key={size}
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
                <span>{size}</span>
                <span onClick={() => handleDeleteFilterSize(size)}>
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
        </>
      )}
    </>
  );
};

export default SizeItem;
