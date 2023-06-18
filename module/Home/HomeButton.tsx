import { HomeButtonProps } from "@/types";
import React from "react";

const HomeButton = ({ title, className }: HomeButtonProps) => {
  return (
    <button
      className={`py-[13px] px-[12px] inline-block bg-black text-white text-[12px] font-bold ${className}`}
    >
      {title}
    </button>
  );
};

export default HomeButton;
