"use client";

import React, { useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import Input from "./Input";
import SelectCategory_SubCategory from "./SelectCategory_SubCategory";
import ProductInformation from "./ProductInformation";
import Gender from "./Gender";
import ListVariants from "./ListVariants";
import axios from "axios";

const CreateProductModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const [productVariants, setProductVariants] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("product_variants");
    if (data) {
      setProductVariants(JSON.parse(data));
    } else return;
  }, []);
  const onSubmitHandler = async (data: any) => {
    console.log({ ...data, productVariants });
    await axios
      .post("/api/products/createProduct", { ...data, productVariants })
      .then((response) => {
        alert("Tạo thành công !");
      })
      .catch((error) => {
        alert("Tạo thất bại !");
      });
  };
  return (
    <form onSubmit={handleSubmit((data) => onSubmitHandler(data))}>
      <p className=" text-[#4f4e4e] text-sm">
        * Lưu ý: Nhớ bấm lưu sau khi hoàn tất mỗi mục để lưu thông tin vừa nhập
      </p>
      <Input
        id="product_name"
        type="text"
        disabled={false}
        required={true}
        register={register}
        label="Product Name"
      />
      <Gender register={register} />
      <SelectCategory_SubCategory register={register} />
      <ProductInformation
        id="product_preference"
        register={register}
        label="Product preference"
      />
      <ProductInformation
        id="product_information"
        register={register}
        label="Product information"
      />
      <ListVariants />
      <input type="submit" />
    </form>
  );
};

export default CreateProductModal;
