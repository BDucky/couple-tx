import LayoutWebsite from "@/components/layout/LayoutWebsite";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import LayoutUser from "@/components/layout/LayoutUser";
import UserInfo from "@/module/user/UserInfo";

const page = () => {
  const login = cookies().get("login");
  if (login?.value !== "LoginSuccess") {
    redirect("/");
  }
  return (
    <LayoutWebsite>
      <LayoutUser>
        <UserInfo></UserInfo>
      </LayoutUser>
    </LayoutWebsite>
  );
};

export default page;
