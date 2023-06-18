import Image from "next/image";
import React from "react";

const Card = ({ isNew = true }) => {
  return (
    <div className="flex flex-col items-start gap-y-2">
      <div className="relative cursor-pointer group">
        <Image
          src="https://product.hstatic.net/1000184601/product/men_den__5__98f703b761a84b51a648321006455283_1024x1024.jpg"
          alt="product"
          width={330}
          height={440}
        />
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
        <h1 className="text-base w-[330px]">
          Áo Khoác Nam Dù Basic Regular Fit MOP 1040
        </h1>
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
          <span>20 [Yêu thích 503]</span>
        </div>
        <div>599,000 VND</div>
      </div>
    </div>
  );
};

export default Card;
