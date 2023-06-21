"use client";

import React, { useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import Input from "./Input";
import { LoadingOutlined } from "@ant-design/icons";
import SelectCategory_SubCategory from "./SelectCategory_SubCategory";
import ProductInformation from "./ProductInformation";
import Gender from "./Gender";
import ListVariants from "./ListVariants";
import axios from "axios";

const CreateProductModal = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const [productVariants, setProductVariants] = useState<any[]>([]);
  const [gender, setGenderValue] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("product_variants");
    if (data) {
      setProductVariants(JSON.parse(data));
    } else return;
  }, []);
  const onSubmitHandler = async (data: any) => {
    setLoading(true);
    await axios
      .post("/api/products/createProduct", { ...data, productVariants })
      .then((response) => {
        localStorage.removeItem("product_variants");
        alert("Tạo thành công !");
        window.location.reload();
      })
      .catch((error) => {
        alert("Tạo thất bại !");
      });
    setLoading(false);
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
      <Gender setGenderValue={setGenderValue} register={register} />
      <SelectCategory_SubCategory gender={gender?.label} register={register} />
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
      {loading ? (
        <LoadingOutlined />
      ) : (
        <input
          className="p-2 hover:opacity-70 cursor-pointer bg-green-500 text-white mt-4 w-32"
          type="submit"
        />
      )}
    </form>
  );
};

export default CreateProductModal;
