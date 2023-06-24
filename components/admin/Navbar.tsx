"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("admin");
    if (!user) {
      router.push("/admin/login");
    }
  }, [router]);
  return (
    <div className="  bg-[#fff] p-4 flex justify-end">
      <div className=" inline-block text-[black] right-0">Welcome sir</div>
    </div>
  );
};

export default Navbar;
