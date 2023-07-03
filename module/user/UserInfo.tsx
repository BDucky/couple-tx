"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const UserInfo = () => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);
  const handleChangeTab = (e: any, tab: number) => {
    e.stopPropagation();
    switch (tab) {
      case 1:
        setTab1(true);
        setTab2(false);
        setTab3(false);
        setTab4(false);
        break;
      case 2:
        setTab1(false);
        setTab2(true);
        setTab3(false);
        setTab4(false);
        break;
      case 3:
        setTab1(false);
        setTab2(false);
        setTab3(true);
        setTab4(false);
        break;
      case 4:
        setTab1(false);
        setTab2(false);
        setTab3(false);
        setTab4(true);
        break;
    }
  };
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex items-center text-center justify-evenly">
          <div
            onClick={(e) => handleChangeTab(e, 1)}
            className="relative w-full p-3 font-light text-gray-700 cursor-pointer"
          >
            HẠNG VÀ ĐIỂM HIỆN TẠI
            {tab1 && (
              <div className="w-[80%] left-2/4 top-[85%] -translate-x-2/4 h-[1.6px] bg-black absolute"></div>
            )}
          </div>
          <div
            onClick={(e) => handleChangeTab(e, 2)}
            className="relative w-full p-3 font-light text-gray-700 cursor-pointer"
          >
            DANH SÁCH MÃ COUPON
            {tab2 && (
              <div className="w-[80%] left-2/4 top-[85%] -translate-x-2/4 h-[1.6px] bg-black absolute"></div>
            )}
          </div>
          <div
            onClick={(e) => handleChangeTab(e, 3)}
            className="relative w-full p-3 font-light text-gray-700 cursor-pointer"
          >
            LỊCH SỬ GIAO DỊCH
            {tab3 && (
              <div className="w-[80%] left-2/4 top-[85%] -translate-x-2/4 h-[1.6px] bg-black absolute"></div>
            )}
          </div>
          <div
            onClick={(e) => handleChangeTab(e, 4)}
            className="relative w-full p-3 font-light text-gray-700 cursor-pointer"
          >
            QUY CHẾ LÊN HẠNG
            {tab4 && (
              <div className="w-[80%] left-2/4 top-[85%] -translate-x-2/4 h-[1.6px] bg-black absolute"></div>
            )}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          {tab1 && (
            <>
              <div className="flex-1">
                <Image
                  src={"/image/user-info.png"}
                  width={500}
                  height={300}
                  alt="user-info"
                  className="object-contain w-full h-full"
                />
              </div>
              <Link
                className="inline-block w-full p-4 text-lg font-bold text-center text-white bg-black"
                href={"/account"}
              >
                Xem các sản phẩm mới nhất
              </Link>
            </>
          )}
          {tab2 && (
            <div className="flex-1 mt-10">
              <p className="text-center">
                Hiện tại chưa có chương trình đổi thưởng
              </p>
            </div>
          )}
          {tab3 && (
            <div className="flex-1 mt-10">
              <p className="text-center">
                Bạn chưa có đơn hàng online nào. Hãy đặt đơn{" "}
                <strong>ngay.</strong>
              </p>
            </div>
          )}
          {tab4 && (
            <div className="flex-1">
              <Image
                src={"/image/user-price.webp"}
                width={500}
                height={300}
                alt="user-price"
                className="object-contain w-full h-full"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserInfo;
