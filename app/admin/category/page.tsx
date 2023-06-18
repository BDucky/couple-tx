"use client";

import ImageUploadWrapper from "@/components/Image/ImageUploadWrapper";
import Gender from "@/components/admin/Gender";
import Input from "@/components/admin/Input";
import TableCategory from "@/components/admin/category/TableCategory";
import Layout from "@/components/admin/layout";
import axios from "axios";
import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

const Category = () => {
  const [reloadTable, setReloadTable] = useState(false);
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
    setReloadTable(!reloadTable);
  };
  return (
    <Layout>
      <div className="p-3 bg-[#fff] m-2 shadow-lg">
        <form onSubmit={handleSubmit((data) => onHandleSubmit(data))}>
          <ImageUploadWrapper register={register} />
          <Input id="name" register={register} label="Category Name" />
          <Gender register={register} />
          <input type="submit" value="Create" />
        </form>
        <div>
          <TableCategory reload={reloadTable} />
        </div>
      </div>
    </Layout>
  );
};

export default Category;
