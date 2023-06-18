"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

const Login = () => {
  const [phone, setPhone] = useState<string>();
  const router = useRouter();

  const handleSubmit = async () => {
    await axios
      .post("/api/user/create", { sdt: phone })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("admin", JSON.stringify(response.data));
        router.push("/admin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <form className=" shadow-md w-[40%] flex flex-col items-center justify-center p-3 ">
        <p className=" text-lg uppercase mb-2">Welcome to admin Login</p>
        <div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className=" w-[300px] p-2 border border-[#ccc]"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div
          onClick={handleSubmit}
          className=" flex cursor-pointer justify-center w-[150px] text-white font-bold bg-black p-3 mt-3"
        >
          Đăng nhập
        </div>
      </form>
    </div>
  );
};

export default Login;
