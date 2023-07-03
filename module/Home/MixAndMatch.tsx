"use client";
import Image from "next/image";
import HomeButton from "./HomeButton";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const MixAndMatch = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/api/products/filter");
      setProducts(res.data.slice(0, 4));
    }
    getData();
  }, []);
  return (
    <div className="container py-[90px] px-[60px] text-left bg-grayE">
      <h1 className="mb-4 text-4xl font-bold">MIX & MATCH</h1>
      <p className="mb-3 text-gray-500">
        Thoả sức sáng tạo với vô số sự kết hợp từ món đồ bạn thích.
      </p>
      <HomeButton title="SHOP NOW"></HomeButton>
      <div className="grid grid-cols-4 gap-x-12 mt-8 mb-[34px]">
        {products &&
          products.map((item: any) => (
            <Link key={item} href={`/products/${item?.id}`}>
              <div className="max-h-[409px]">
                <Image
                  src={item?.productVariants[0].images[0].imageUrl}
                  alt="mixandmatch"
                  width={330}
                  height={440}
                  className="object-contain w-full h-full cursor-pointer"
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MixAndMatch;
