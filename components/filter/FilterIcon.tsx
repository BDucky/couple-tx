"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { handleColorShow, handleSizeShow } from "@/store/showFilterSlice";
import { useRef } from "react";

const FilterIcon = ({ name }: any) => {
  const dispatch = useAppDispatch();
  const callbackShow: any = useRef(() => {});
  const handleShow: any = useRef(() => {});
  switch (name) {
    case "color":
      handleShow.current = handleColorShow();
      callbackShow.current = (state: any) => state.showFilterReducer.colorShow;
      break;
    case "size":
      handleShow.current = handleSizeShow();
      callbackShow.current = (state: any) => state.showFilterReducer.sizeShow;
      break;
  }
  const show = useAppSelector(callbackShow.current);
  const handleShowIcon = (e: any) => {
    e.stopPropagation();
    dispatch(handleShow.current);
  };
  return (
    <span onClick={handleShowIcon} className={`cursor-pointer`}>
      {show ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      )}
    </span>
  );
};

export default FilterIcon;
