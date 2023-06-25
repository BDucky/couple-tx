import React from "react";
import FilterColor from "./FilterColor";
import FilterSize from "./FilterSize";

const Filter = () => {
  return (
    <div className="flex flex-col gap-y-3 p-3 border border-black w-[330px] relative">
      <FilterColor></FilterColor>
      <FilterSize></FilterSize>
    </div>
  );
};

export default Filter;
