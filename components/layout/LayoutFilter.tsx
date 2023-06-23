"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Filter from "../Filter";
import LayoutCard from "./LayoutCard";
import Card, { CardLoadingSkeleton } from "../home/Card";
import { useAppSelector } from "@/hooks/redux";
import { filterColors } from "@/constant/Color";

const LayoutFilter = () => {
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
  const colors = useAppSelector((state: any) => state.filterReducer.colors);

  return (
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
        <div className="flex flex-col gap-y-5">
          {colors && colors.length > 0 && (
            <div className="flex gap-x-2">
              {colors &&
                colors.length > 0 &&
                colors.map((item: string, index: number) => (
                  <div
                    key={item}
                    className="px-3 py-1 border border-gray-500 rounded-md"
                  >
                    <div className="flex items-center gap-x-2">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                      <span>
                        {
                          filterColors.find((color) => color.enColor == item)
                            .vnColor
                        }
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          )}
          <LayoutCard>
            {products &&
              products.length > 0 &&
              products.map((product) => (
                <Card key={product.product_name} productId={product.id}></Card>
              ))}
          </LayoutCard>
        </div>
      )}
    </div>
  );
};

export default LayoutFilter;
