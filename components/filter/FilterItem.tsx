import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { handleColorShow, handleSizeShow } from "@/store/showFilterSlice";
import React, { useRef } from "react";
import FilterIcon from "./FilterIcon";

const FilterItem = ({ title = "", name, children }: any) => {
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
    <div onClick={(e) => handleShowIcon(e)} className="cursor-pointer">
      <div className="flex items-center justify-between mb-[15px] ">
        <h1 className="font-bold text-left text-xs">{title}</h1>
        <FilterIcon name={name}></FilterIcon>
      </div>
      <div>
        {show && children}
        <div className="w-full h-[0.9px] bg-gray-700"></div>
      </div>
    </div>
  );
};

export default FilterItem;
