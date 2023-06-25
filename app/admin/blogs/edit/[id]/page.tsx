"use client";

import ImageUploadWrapper from "@/components/Image/ImageUploadWrapper";
import Input from "@/components/admin/Input";
import TablePosts from "@/components/admin/blogs/TablePosts";
import Layout from "@/components/admin/layout";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

const EditBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>();
  const [subCategory, setSubCategory] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [reload, setReload] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const getData = useCallback(async () => {
    await axios
      .get(`/api/blog/findById?id=${id}`)
      .then((response) => {
        console.log(response.data);
        setBlog(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, [id]);
  //update
  const onHandleSubmit = async (data: any) => {
    console.log(data);
    const title = data.title;
    const image = data.images[0];
    const user = localStorage.getItem("admin");
    if (user) {
      const userData = JSON.parse(user);
      const dataV2 = { title, image, user_id: userData.id };
      await axios
        .post("/api/blog/update", { id: id, ...dataV2 })
        .then((response) => {
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors);
        });
    }
  };

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <Layout>
      <div className="p-3 bg-[#fff] m-2 shadow-lg">
        <form onSubmit={handleSubmit((data) => onHandleSubmit(data))}>
          <ImageUploadWrapper
            single
            data={blog && blog.image}
            register={register}
          />
          <Input
            data={blog && blog.title}
            id="title"
            register={register}
            label="Title Blog"
          />

          <input
            className="p-2 mt-2 mb-2 text-white bg-green-500 cursor-pointer hover:opacity-70"
            type="submit"
            value="Update"
          />
        </form>
        <div className="border border-[#ccc] p-6">
          <TablePosts id={parseInt(id)} reload={reload} />
        </div>
      </div>
    </Layout>
  );
};

export default EditBlog;
