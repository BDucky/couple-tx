"use client";

import ImageUploadWrapper from "@/components/Image/ImageUploadWrapper";
import Input from "@/components/admin/Input";
import Layout from "@/components/admin/layout";
import axios from "axios";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useForm, FieldValues } from "react-hook-form";
import TableBlogs from "@/components/admin/blogs/TableBlogs";

const Blogs = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [reloadTable, setReloadTable] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const onHandleSubmit = async (data: any) => {
    setLoading(true);

    const user = localStorage.getItem("admin");

    if (user) {
      const userData = JSON.parse(user);
      const name = data.name;
      const image = data.images[0];
      const dataV2 = {
        title: name,
        image: image,
        user_id: userData.id,
      };

      await axios
        .post("/api/blog/create", dataV2)
        .then((response) => {
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors);
        });
    }

    setLoading(false);
    setReloadTable(!reloadTable);
  };
  return (
    <Layout>
      <div className="p-3 m-6 bg-[#fff] shadow-lg">
        <form onSubmit={handleSubmit((data) => onHandleSubmit(data))}>
          <ImageUploadWrapper single register={register} />
          <Input id="name" register={register} label="Category Name" />
          {loading ? (
            <LoadingOutlined size={28} />
          ) : (
            <input
              className="p-2 mt-2 text-white bg-green-500 w-56 hover:opacity-70"
              type="submit"
              value="Create"
            />
          )}
        </form>
        <div>
          <TableBlogs reload={reloadTable} />
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
