import { defaultImage } from "@/constant/Image";
import Image from "next/image";
import React from "react";

const ProductDetial = async ({ params }: { params: { id: string } }) => {
  const product = await getProductDetial(params.id);
  return (
    <div className="min-h-[2000px] mx-auto max-w-[1480px]">
      <div className="flex gap-x-[60px] mt-5">
        <div className="grid gap-6 grid-cols-2 flex-grow-[8] max-h-[1000px] overflow-y-auto scrollBar ">
          {new Array(8).fill(null).map((item, index) => (
            <Image
              key={index}
              src={defaultImage}
              alt="product"
              width={330}
              height={440}
              className="w-full object-cover cursor-pointer"
            />
          ))}
        </div>
        <div className="flex-grow-[2] max-h-[800px]">
          <h1 className="font-semibold text-left text-[26px] max-w-[356px] mb-6">
            Áo Thun Nữ Regular Fit FastX In “Legacy” WTS 2271
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
            <span>[Yêu thích 566]</span>
          </div>
          <div className="font-bold text-[20px] mb-3">299,000 VND</div>
          <div className="mb-3 text-xs">
            <strong>MÀU SẮC:</strong> BE ĐẬM
          </div>
          <div className="flex gap-x-3 mb-3">
            {new Array(2).fill(null).map((item, index) => (
              <div
                key={index}
                className="bg-orange-400 rounded-full border border-black w-10 h-10 cursor-pointer"
              ></div>
            ))}
          </div>
          <div className="mb-3 text-xs">
            <strong>SIZE:</strong> CHỌN SIZE
          </div>
          <div className="flex gap-x-3 ml-1 mb-3">
            {new Array(2).fill(null).map((item, index) => (
              <div
                key={index}
                className="px-8 py-2 border border-gray-400 text-xs"
              >
                S
              </div>
            ))}
          </div>
          <div className="flex gap-x-3 items-center mb-[30px]">
            <strong className="text-[14px]">SỐ LƯỢNG: </strong>
            <div className="flex gap-x-2">
              <div className="bg-white hover:bg-gray-50 duration-100 transition-all px-3 py-1 shadow-sm rounded-md cursor-pointer">
                -
              </div>
              <div className="bg-gray-100 px-6 py-1 rounded-md">1</div>
              <div className="bg-white duration-100 transition-all hover:bg-gray-50 px-3 py-1 shadow-sm rounded-md cursor-pointer">
                +
              </div>
            </div>
          </div>
          <div className="flex gap-x-3 items-center max-w-[380px] mb-[40px]">
            <button className="text-center py-2 transition-all text-[14px] font-bold duration-200 flex-1 bg-black border border-black hover:bg-white text-white hover:text-black">
              THÊM VÀO GIỎ
            </button>
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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
          <div className="flex flex-col gap-y-3 max-w-[380px] w-full">
            <div>
              <div className="h-[0.9px] bg-gray-700 mb-4"></div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[14px]">
                  THÔNG TIN SẢN PHẨM
                </span>
                <span>
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
              <div>Markdown here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

async function getProductDetial(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/products/findById?id=${id}`
  );
  return res.json();
}

export default ProductDetial;
