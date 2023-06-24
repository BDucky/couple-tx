"use client";

import Gender from "@/components/admin/Gender";
import Input from "@/components/admin/Input";
import ListVariants from "@/components/admin/ListVariants";
import ProductInformation from "@/components/admin/ProductInformation";
import SelectCategory_SubCategory from "@/components/admin/SelectCategory_SubCategory";
import Layout from "@/components/admin/layout";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

const EditProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const { id } = useParams();
  const [product, setProduct] = useState<any>();
  const [gender, setGenderValue] = useState<any>(null);
  const [productVariants, setProductVariants] = useState<any[]>([]);

  const options = [
    { value: 1, label: "Nam" },
    { value: 2, label: "Nữ" },
  ];
  const getData = useCallback(async () => {
    await axios
      .get(`/api/products/findById?id=${id}`)
      .then((response) => {
        setProduct(response.data);
        localStorage.setItem(
          "product_variants",
          JSON.stringify(response.data.productVariants)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    const data = localStorage.getItem("product_variants");
    if (data && data.length !== 0) {
      setProductVariants(JSON.parse(data));
    } else window.location.reload();
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <Layout>
      <div className="p-2 bg-[#fff] m-3">
        <Input
          data={product?.product_name}
          register={register}
          label="Product Name"
          id="product_name"
        />
        <Gender
          data={product?.genders.name}
          setGenderValue={setGenderValue}
          register={register}
        />
        <SelectCategory_SubCategory
          gender={gender?.label}
          register={register}
        />
        <ProductInformation
          data={product?.product_references}
          id="product_preference"
          register={register}
          label="Product preference"
        />
        <ProductInformation
          data={product?.information}
          id="product_information"
          register={register}
          label="Product information"
        />
        <ListVariants />
        <div
          onClick={handleSubmit((data) => {
            const handleUpdate = async () => {
              await axios
                .post("/api/products/update", {
                  ...data,
                  product_id: id,
                  productVariants,
                })
                .then(() => {
                  alert("Updated");
                })
                .catch((error) => {
                  alert("Error");
                });
            };
            handleUpdate();
          })}
          className="p-2 inline-block bg-blue-500 text-white hover:opacity-70 cursor-pointer"
        >
          Submit
        </div>
      </div>
    </Layout>
  );
};

export default EditProduct;
