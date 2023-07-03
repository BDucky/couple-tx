"use client";
import React from "react";
import UserSideBar from "../account/UserSideBar";
import Providers from "../Provider";

const LayoutUser = ({ children }: any) => {
  return (
    <Providers>
      <div className="mt-4 bg-gray-100 border">
        <div className="container flex bg-white border-gray-300 shadow-md !mb-7 items-start">
          <UserSideBar></UserSideBar>
          <div className="flex-grow-[18]">{children}</div>
        </div>
      </div>
    </Providers>
  );
};

export default LayoutUser;
