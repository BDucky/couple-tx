"use client";

import ImageUpload from "@/components/Image/ImageUpload";
import ImageUploadWrapper from "@/components/Image/ImageUploadWrapper";
import Gender from "@/components/admin/Gender";
import Input from "@/components/admin/Input";
import TableSubCategory from "@/components/admin/category/TableSubCategory";
import Layout from "@/components/admin/layout";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

const Edit = () => {
  const { id } = useParams();
  const [category, setCategory] = useState<any>();
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
      .get(`/api/category?key=id&value=${id}`)
      .then((response) => {
        console.log(response.data);
        setCategory(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, [id]);
  //update
  const onHandleSubmit = async (data: any) => {
    const name = data.name;
    const image = data.images[0];
    const gender = data.gender.label;
    const dataV2 = { name, image, gender };

    await axios
      .post("/api/category/create", { id: id, ...dataV2 })
      .then((response) => {
        console.log(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const handleUploadImg = useCallback((url: string) => {
    setUrl(url);
  }, []);

  const handleAddSubCategory = async () => {
    await axios
      .post("/api/category/subCategory/create", {
        image: url,
        name: subCategory,
        id,
      })
      .then((response) => {
        console.log("Success");
      })
      .catch((err) => {
        console.log(err);
      });
    setReload(!reload);
  };

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <Layout>
      <div className="p-3 bg-[#fff] m-2 shadow-lg">
        <form onSubmit={handleSubmit((data) => onHandleSubmit(data))}>
          <ImageUploadWrapper
            data={category && category.image}
            register={register}
          />
          <Input
            data={category && category.name}
            id="name"
            register={register}
            label="Category Name"
          />

          <Gender data={category && category.gender} register={register} />
          <input
            className="p-2 mt-2 mb-2 text-white bg-green-500 cursor-pointer hover:opacity-70"
            type="submit"
            value="Update"
          />
        </form>
        <div className="border border-[#ccc] p-6">
          <div>
            <p>Sub Category Name</p>
            <input
              className="border p-1 rounded-md border-[#ccc]"
              id="sub_category"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            />
            <div className="flex">
              <ImageUpload onChange={handleUploadImg} />
              {url !== "" && (
                <Image alt="" src={url} width={300} height={300} />
              )}
            </div>
          </div>
          <div
            onClick={handleAddSubCategory}
            className=" mt-2 text-white p-2 cursor-pointer flex items-center justify-center bg-green-500 hover:opacity-70"
          >
            Add sub category
          </div>
          <TableSubCategory id={parseInt(id)} reload={reload} />
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
