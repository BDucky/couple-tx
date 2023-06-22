"use client";
import Filter from "@/components/Filter";
import { Card } from "@/components/home";
import { CardLoadingSkeleton } from "@/components/home/Card";
import LayoutCard from "@/layout/LayoutCard";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:3000/api/products/filter");
      setProducts(res?.data);
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <div className="container px-[24px]">
      <div className="flex items-center !mb-10 gap-x-12">
        <div className="max-h-[406px]">
          <Image
            src="/image/new_arrival_banner.webp"
            alt="new_arrival"
            width={696}
            height={406}
            className="w-full h-full"
          />
        </div>
        <div>
          <h1 className="font-bold text-[32px] text-center">
            BST THỜI TRANG MỚI COUPLE TX
          </h1>
          <p className="text-center text-gray-500">
            Sáng tạo nhiều phong cách cho mọi dịp với những thiết kế trẻ trung,
            năng động, thời thượng từ Couple TX.
          </p>
        </div>
      </div>
      <div className="flex items-start !mb-10 gap-x-3">
        <div>
          <Filter></Filter>
        </div>
        {loading && (
          <LayoutCard>
            {new Array(6).fill(null).map((item, index) => (
              <CardLoadingSkeleton key={index}></CardLoadingSkeleton>
            ))}
          </LayoutCard>
        )}
        {!loading && (
          <LayoutCard>
            {products &&
              products.length > 0 &&
              products.map((product) => (
                <Card key={product.product_name} productId={product.id}></Card>
              ))}
          </LayoutCard>
        )}
      </div>
    </div>
  );
};

export default NewArrival;
