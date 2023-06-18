"use client";

import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import Input from "../Input";

interface ModalAddSubCategoryProps {
  active: boolean;
  label: string;
}
const ModalAddSubCategory: React.FC<ModalAddSubCategoryProps> = ({
  active,
  label,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  if (active === false) {
    return null;
  }
  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-opacity-50 bg-black">
      <div className="w-[60%] bg-[#fff] ">
        <p>{label}</p>
        <Input
          label="Sub Category Name"
          register={register}
          id="sub_category"
        />
        <div>
          <p>List sub category</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddSubCategory;
