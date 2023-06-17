"use client";

import ImageUploadWrapper from "@/components/Image/ImageUploadWrapper";
import Gender from "@/components/admin/Gender";
import Input from "@/components/admin/Input";
import TableCategory from "@/components/admin/category/TableCategory";
import Layout from "@/components/admin/layout";
import axios from "axios";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";

const Category = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const onHandleSubmit = async (data: any) => {
    const name = data.name;
    const image = data.images[0];
    const gender = data.gender.label;
    const dataV2 = { name, image, gender };

    await axios
      .post("/api/category/create", dataV2)
      .then((response) => {
        console.log(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  return (
    <Layout>
      <div className="p-3">
        <form onSubmit={handleSubmit((data) => onHandleSubmit(data))}>
          <ImageUploadWrapper register={register} />
          <Input id="name" register={register} label="Category Name" />
          <Gender register={register} />
          <input type="submit" />
        </form>
        <div>
          <TableCategory />
        </div>
      </div>
    </Layout>
  );
};

export default Category;
