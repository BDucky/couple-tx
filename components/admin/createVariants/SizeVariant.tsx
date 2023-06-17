import React, { useCallback, useState } from "react";
import SizeVariantItem from "./SizeVariantItem";
import { useForm, FieldValues, UseFormRegister } from "react-hook-form";

interface SizeVariantProps {
  register: UseFormRegister<FieldValues>;
}
const SizeVariant: React.FC<SizeVariantProps> = ({ register }) => {
  const [listSize, setListSize] = useState<any>(0);
  const [sizes, setSizes] = useState([]);

  const handleClick = useCallback(() => {
    setListSize((prevListSize: any) => {
      return prevListSize + 1;
    });
  }, []);
  const handleSubmit = useCallback(() => {
    console.log(sizes);
    register("size", { value: sizes });
  }, [sizes, register]);

  return (
    <div className=" w-[100%] border border-[#ccc] p-3">
      <div className="flex justify-between mb-2">
        <p>Size Variant</p>
        <p
          className=" text-cyan-400 hover:text-cyan-300 cursor-pointer"
          onClick={handleClick}
        >
          Add
        </p>
      </div>
      {Array.from({ length: listSize }, (_, index) => (
        <SizeVariantItem sizes={sizes} setSizes={setSizes} key={index} />
      ))}
      <p
        className=" p-2 bg-blue-500 inline-block text-white cursor-pointer hover:bg-blue-300"
        onClick={handleSubmit}
      >
        Submit
      </p>
    </div>
  );
};

export default SizeVariant;
