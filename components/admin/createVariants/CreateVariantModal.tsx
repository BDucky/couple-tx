"use client";
import React, { useCallback } from "react";
import Input from "../Input";
import { useForm, FieldValues } from "react-hook-form";
import SizeVariant from "./SizeVariant";
import ImageUploadWrapper from "@/components/Image/ImageUploadWrapper";
import { useRouter } from "next/navigation";

const CreateVariantModal = () => {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const handleSave = useCallback(
    (data: any) => {
      console.log(data);
      const exitData = localStorage.getItem("product_variants");
      if (exitData) {
        const list = JSON.parse(exitData);
        list.push(data);
        localStorage.setItem("product_variants", JSON.stringify(list));
      } else {
        localStorage.setItem("product_variants", JSON.stringify([data]));
      }
      route.push("/admin/products/addProduct");
    },
    [route]
  );
  return (
    <form onSubmit={handleSubmit((data) => handleSave(data))}>
      <Input
        id="product_variant_name"
        type="text"
        disabled={false}
        required={true}
        register={register}
        label="Product Variant Name"
      />
      <Input
        id="price"
        type="number"
        disabled={false}
        required={true}
        register={register}
        label="Price"
      />
      <Input
        id="color"
        type="text"
        disabled={false}
        required={true}
        register={register}
        label="Color"
      />
      <Input
        id="quantity"
        type="number"
        disabled={false}
        required={true}
        register={register}
        label="Quantity"
      />
      <ImageUploadWrapper register={register} />
      <SizeVariant register={register} />

      <input
        type="submit"
        className="mt-2 w-32 p-2 text-white bg-blue-500 cursor-pointer hover:bg-blue-300"
      />
    </form>
  );
};

export default CreateVariantModal;
