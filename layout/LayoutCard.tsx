import { LayoutCardProps } from "@/types";
import React from "react";

const LayoutCard = ({ children }: LayoutCardProps) => {
  return (
    <div
      className="grid !gap-x-6"
      style={{
        rowGap: "50px",
        columnGap: "24px",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        maxWidth: "1000px",
        marginLeft: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default LayoutCard;
