"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Card = ({ isNew = true, productId = 12 }) => {
  const [product, setProduct] = useState();
  const [imageVariant, setImageVariant] = useState("");
  const [colorVariant, setColorVariant] = useState([]);
  const handleMouseEnter = () => {
    const image = product?.productVariants[1].images[0].imageUrl;
    setImageVariant(image);
  };

  const handleMouseLeave = () => {
    const image = product?.productVariants[0].images[0].imageUrl;
    setImageVariant(image);
  };
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `http://localhost:3000/api/products/findById?id=${productId}`
      );
      const data = res.data;
      setProduct(data);
      setColorVariant(data.productVariants.map((item) => item.color));
      const image = data.productVariants[0].images[0].imageUrl;
      setImageVariant(image);
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col items-start gap-y-2">
      <div
        className="relative cursor-pointer group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={imageVariant} alt="product" width={330} height={440} />
        {isNew && (
          <span className="absolute p-1 italic bg-white text-xs text-gray-500 top-[10px] left-[10px]">
            New
          </span>
        )}
        <button className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute bottom-[10px] hover:bg-[#343a40] hover:text-white transition-all duration-300 ease-in hover:ease-out left-2/4 -translate-x-2/4 w-[300px] bg-white text-black border border-black p-2 text-sm font-semibold">
          MUA NHANH
        </button>
        <span className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 ease-in hover:ease-out top-[40px] right-[20px] p-2 bg-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </span>
      </div>
      <div>
        <h1 className="text-base w-[330px]">{product?.product_name}</h1>
        <div className="flex flex-wrap items-center gap-x-2">
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
          <span>[Yêu thích 503]</span>
        </div>
        <div className="mb-2">{product?.productVariants[0].price} VND</div>
        <div className="flex gap-x-2">
          {colorVariant &&
            colorVariant.map((item) => (
              <span
                key={item}
                className={`w-4 h-4 border border-black rounded-full bg-[${item}]`}
              ></span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
