"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";

const UserSideBar = () => {
  const [user, setUser] = useState<any>({
    first_name: "",
    last_name: "",
  });

  const handleLogout = (e: any) => {
    e.stopPropagation();
    Cookie.remove("login");
    Cookie.remove("id");
    Cookie.remove("phone");
    window.location.reload();
  };

  useEffect(() => {
    async function getData() {
      try {
        const id = Cookie.get("id");
        const res = await axios.get(`/api/user/find?key=${id}`);
        const data = res.data;
        setUser(data);
      } catch (err) {
        console.log("error", err);
      }
    }
    getData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center flex-grow-[1] p-2 border border-r-gray-300">
      <div className="p-10 text-center">
        <div className="bg-[url('/image/avatar.webp')] !bg-no-repeat bg-cover bg-center w-[120px] h-[120px] p-3 relative avatar mb-10">
          <div className="bg-[url('/image/avatar-border.webp')] !bg-no-repeat bg-cover bg-center w-[140px] h-[140px] top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 absolute"></div>
        </div>
        <h1 className="mb-6 font-light text-gray-700">
          {user.first_name && user.last_name
            ? user.first_name + " " + user.last_name
            : "Your Name"}
        </h1>
        <span className="mb-3 text-lg font-bold">0</span>
        <p className="font-light text-gray-700">Điểm khả dụng</p>
      </div>
      <div className="flex flex-col w-full px-3 font-light text-gray-700 gap-y-3">
        <div className="flex items-start w-full p-3 border border-gray-300 cursor-pointer border-t-transparent border-x-transparent gap-x-3">
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </span>
          <Link href={"/account/updateuser"} className="hover:underline">
            Chỉnh sửa thông tin cá nhân
          </Link>
        </div>
        <div className="flex items-start w-full p-3 border border-gray-300 cursor-pointer border-t-transparent border-x-transparent gap-x-3">
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
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </span>
          <span className="hover:underline">Địa chỉ giao hàng</span>
        </div>
        <div className="flex items-start w-full p-3 border border-gray-300 cursor-pointer border-t-transparent border-x-transparent gap-x-3">
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </span>
          <span className="hover:underline">Sản phẩm yêu thích</span>
        </div>
        <div className="flex items-start w-full p-3 border border-gray-300 border-t-transparent border-x-transparent gap-x-3">
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </span>
          <span>HOTLINE: 18006516</span>
        </div>
        <div className="flex items-start cursor-pointer w-full p-3 gap-x-3 mb-[149px]">
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </span>
          <span onClick={(e) => handleLogout(e)} className="hover:underline">
            Đăng xuất
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserSideBar;
