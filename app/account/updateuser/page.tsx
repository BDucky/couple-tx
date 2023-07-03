import LayoutUser from "@/components/layout/LayoutUser";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import UpdateUser from "@/module/user/UpdateUser";

const page = () => {
  const login = cookies().get("login");
  if (login?.value !== "LoginSuccess") {
    redirect("/");
  }
  return (
    <LayoutWebsite>
      <LayoutUser>
        <UpdateUser></UpdateUser>
      </LayoutUser>
    </LayoutWebsite>
  );
};

export default page;
