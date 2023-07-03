import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import Link from "next/link";

const ShowUserInfo = ({ onMouseEnter = () => {}, onMouseLeave = () => {} }) => {
  const [positionTop, setPositionTop] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setPositionTop("top-[110px]");
      } else {
        setPositionTop("top-[120px]");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLogout = (e: any) => {
    e.stopPropagation();
    Cookie.remove("login");
    Cookie.remove("id");
    Cookie.remove("phone");
    window.location.reload();
  };
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`fixed ${positionTop} p-2 bg-white flex flex-col gap-y-1 w-[300px] h-[170px] text-[13px] border border-gray-500 z-[999] right-[50px]`}
    >
      <div className="p-2 transition-all duration-200 cursor-pointer hover:bg-gray-300">
        hi, Truong Hao
      </div>
      <div className="p-2 transition-all duration-200 cursor-pointer hover:bg-gray-300">
        <Link href={"/account"}>Thông tin tài khoản</Link>
      </div>
      <div className="p-2 transition-all duration-200 cursor-pointer hover:bg-gray-300">
        Danh sách địa chỉ
      </div>
      <div
        onClick={(e) => handleLogout(e)}
        className="p-2 transition-all duration-200 cursor-pointer hover:bg-gray-300"
      >
        Đăng xuất
      </div>
    </div>
  );
};

export default ShowUserInfo;
