import LoginForm from "@/components/account/LoginForm";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const page = () => {
  const login = cookies().get("login");
  if (login?.value === "LoginSuccess") {
    redirect("/");
  }
  return (
    <LayoutWebsite>
      <div className="my-8 max-w-[492px] mx-auto text-center p-2">
        <h1 className="text-2xl font-light mb-14">
          ĐĂNG NHẬP BẰNG SỐ ĐIỆN THOẠI
        </h1>
        <LoginForm></LoginForm>
      </div>
    </LayoutWebsite>
  );
};

export default page;
