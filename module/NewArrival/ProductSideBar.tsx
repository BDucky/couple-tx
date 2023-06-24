"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductInfo from "./ProductInfo";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { handleFixed } from "@/store/fixedSlice";
import axios from "axios";

const ProductSideBar = ({ product }: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [fillColor, setFillColor] = useState("none");
  const [favorite, setFavorite] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const fixed = useAppSelector((state: any) => state.fixedReducer.fixed);
  const dispatch = useAppDispatch();

  const handleFavorite = useRef(() => {});
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if (scrollPosition > 1905) {
        dispatch(handleFixed(false));
      } else {
        dispatch(handleFixed(true));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, scrollPosition]);

  useEffect(() => {
    setFavorite(product.favorite_counters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  handleFavorite.current = async () => {
    if (fillColor === "none") {
      setFillColor("black");
      setFavorite((prev) => prev + 1);
      await axios.post("http://localhost:3000/api/products/favorite", {
        key: "plus",
        product_id: product.id,
      });
    } else {
      setFillColor("none");
      if (favorite > 0) {
        setFavorite((prev) => prev - 1);
        await axios.post("http://localhost:3000/api/products/favorite", {
          key: "minus",
          product_id: product.id,
        });
      }
    }
  };
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div
      className={`flex-grow-[2] max-h-[2500px] max-w-[350px] ${
        !fixed && "mt-[1905px]"
      } ${fixed && "fixed right-[76px]"}`}
    >
      <h1 className="font-semibold text-left text-[26px] max-w-[350px] mb-6">
        {product.product_name}
      </h1>
      <div className="flex gap-x-2 mb-[26px]">
        <span className="flex text-yellow-300">
          {new Array(5).fill(null).map((item, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          ))}
        </span>
        <span>[Yêu thích {favorite}]</span>
      </div>
      <div className="font-bold text-[20px] mb-3">
        {product.productVariants[0].price} VND
      </div>
      <div className="mb-3 text-xs">
        <strong>MÀU SẮC:</strong> {product.productVariants[0].color}
      </div>
      <div className="flex gap-x-3 mb-3">
        {product.productVariants.map((item: any, index: number) => (
          <div
            key={item.id}
            className="rounded-full border border-black w-10 h-10 cursor-pointer"
            style={{
              backgroundColor: product.productVariants[index].color,
            }}
          ></div>
        ))}
      </div>
      <div className="mb-3 text-xs">
        <strong>SIZE:</strong> CHỌN SIZE
      </div>
      <div className="flex gap-x-3 ml-1 mb-3">
        {product.productVariants[0].size.map((item: any, index: number) => (
          <div
            key={item.id}
            className="px-8 py-2 border border-gray-400 text-xs"
          >
            {item.name_size}
          </div>
        ))}
      </div>
      <div className="flex gap-x-3 items-center mb-[30px]">
        <strong className="text-[14px]">SỐ LƯỢNG: </strong>
        <div className="flex gap-x-2 font-semibold select-none">
          <div
            onClick={handleDecrease}
            className="bg-white hover:bg-gray-50 duration-100 transition-all px-3 py-1 shadow-sm rounded-md cursor-pointer"
          >
            -
          </div>
          <div className="bg-gray-100 px-6 py-1 rounded-md">{quantity}</div>
          <div
            onClick={handleIncrease}
            className="bg-white duration-100 transition-all hover:bg-gray-50 px-3 py-1 shadow-sm rounded-md cursor-pointer"
          >
            +
          </div>
        </div>
      </div>
      <div className="flex gap-x-3 items-center max-w-[380px] mb-[40px]">
        <button className="text-center py-2 transition-all text-[14px] font-bold duration-200 flex-1 bg-black border border-black hover:bg-white text-white hover:text-black">
          THÊM VÀO GIỎ
        </button>
        <span onClick={handleFavorite.current} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </span>
      </div>
      <ProductInfo
        title="THÔNG TIN SẢN PHẨM"
        content={product.information}
      ></ProductInfo>
      <ProductInfo
        title="THAM KHẢO"
        content={product.product_references}
      ></ProductInfo>
    </div>
  );
};

export default ProductSideBar;
