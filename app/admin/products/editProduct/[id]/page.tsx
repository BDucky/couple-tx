"use client";

import Layout from "@/components/admin/layout";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const getData = useCallback(async () => {
    await axios
      .get("/api/products/findById?id=1")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <Layout>
      <div className="p-2">hello</div>
    </Layout>
  );
};

export default EditProduct;
