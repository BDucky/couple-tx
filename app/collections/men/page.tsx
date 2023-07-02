"use client";

import Providers from "@/components/Provider";
import LayoutFilter from "@/components/layout/LayoutFilter";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Page = () => {
  const [products, setProduct] = useState<any>();
  const getProduct = useCallback(async () => {
    await axios
      .get(`/api/products/filter?gender=Nữ`)

      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <LayoutWebsite>
      <div className="container px-[24px]">
        <div className="flex items-center justify-center !mb-10 gap-x-2">
          <div className="flex flex-col cursor-pointer gap-y-3 group">
            <div className="transition-all duration-200 border-2 group-hover:border-black">
              <Image
                src={`https://file.hstatic.net/1000184601/file/6_070ae319a2e54e66bce71656ee3d681f.jpg`}
                alt="Ao_nam"
                width={224}
                height={261}
                className="object-cover"
              />
            </div>
            <h1 className="relative text-xs font-bold">
              ÁO NAM
              <div className="w-[0px] top-full absolute h-[0.1rem] bg-black group-hover:w-[3.2rem] transition-all duration-200"></div>
            </h1>
          </div>
          <div className="flex flex-col cursor-pointer gap-y-3 group">
            <div className="transition-all duration-200 border-2 group-hover:border-black">
              <Image
                src={`https://file.hstatic.net/1000184601/file/7_706e3fde8b544fe9b0d5b8dff41e53cd.jpg`}
                alt="Quan_nam"
                width={224}
                height={261}
                className="object-cover"
              />
            </div>
            <h1 className="relative text-xs font-bold">
              QUẦN NAM
              <div className="w-[0px] top-full absolute h-[0.1rem] bg-black group-hover:w-[4.2rem] transition-all duration-200"></div>
            </h1>
          </div>
          <div className="flex flex-col cursor-pointer gap-y-3 group">
            <div className="transition-all duration-200 border-2 group-hover:border-black h-[261px]">
              <Image
                src={`https://file.hstatic.net/1000184601/file/cls-sp-275-350-pk_7d5eff8f1ebb45bbac55aa5b4236f117.jpg`}
                alt="phu_kien"
                width={224}
                height={261}
                className="object-cover object-center h-full"
              />
            </div>
            <h1 className="relative text-xs font-bold">
              PHỤ KIỆN
              <div className="w-[0px] top-full absolute h-[0.1rem] bg-black group-hover:w-[4.2rem] transition-all duration-200"></div>
            </h1>
          </div>
        </div>
        <Providers>
          <LayoutFilter products={products}></LayoutFilter>
        </Providers>
      </div>
    </LayoutWebsite>
  );
};

export default Page;
