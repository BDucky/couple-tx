import Filter from "@/components/Filter";
import { Card } from "@/components/home";
import LayoutCard from "@/layout/LayoutCard";
import Image from "next/image";
import React from "react";

const NewArrival = () => {
  return (
    <div>
      <div className="container flex items-center !mb-10 gap-x-12">
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
      <div className="container flex items-start !mb-10 gap-x-3">
        <div>
          <Filter></Filter>
        </div>
        <LayoutCard>
          <Card></Card>
        </LayoutCard>
      </div>
    </div>
  );
};

export default NewArrival;
