"use client";
import Image from "next/image";
import HomeButton from "./HomeButton";
import { useEffect, useState } from "react";
import axios from "axios";

const MixAndMatch = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:3000/api/products/filter");
      const data = res.data;
      const dataImages = data.find(
        (item: any) => item.product_name == "mixandmatch"
      ).productVariants[0].images;
      setImages(dataImages);
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
      <div className="grid grid-cols-4 gap-x-3 mt-8 mb-[34px]">
        {images &&
          images.map((item) => {
            return (
              <div key={item.id} className="cursor-pointer">
                <Image
                  width={318}
                  height={398}
                  src={item.imageUrl}
                  alt="mixandmatch"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MixAndMatch;
