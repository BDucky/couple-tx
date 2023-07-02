"use client";
import React, { useEffect } from "react";
import Cookie from "js-cookie";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Input } from "@/components/input";
import { FormSubmit } from "@/components/form";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  lastName: yup.string().max(100).required("Please enter your last name"),
  firstName: yup.string().max(100).required("Please enter your first name"),
  date: yup.date().required("Please enter your date of birth"),
  gender: yup.string().required("Please fill your gender"),
});

const UpdateUser = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const router = useRouter();

  const handleUpdateUser = async (values: any) => {
    const { lastName, firstName, date, gender } = values;
    if (!isValid) {
      toast.error("It seems your info was wrong");
      return;
    }
    try {
      const id = Number(Cookie.get("id"));
      const phone = Cookie.get("phone");
      await axios.post("/api/user/update", {
        id,
        phone,
        last_name: lastName,
        first_name: firstName,
        date_of_birth: date.toISOString(),
        gender,
      });
      router.push("/account");
      toast.success("update Successfully!");
    } catch (error) {
      toast.error("It seems your info was wrong");
    }
  };
  useEffect(() => {
    const arrayError = Object.values(errors);
    if (arrayError.length > 0) {
      toast.error(arrayError[0]?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);
  return (
    <div className="p-8">
      <p className="mb-5 font-light text-gray-7000">Cập nhật thông tin</p>
      <FormSubmit
        onSubmit={handleSubmit(handleUpdateUser)}
        className="max-w-[540px] mx-auto"
      >
        <div className="flex flex-col mb-10 gap-y-2">
          <span className="font-light text-gray-700">Họ</span>
          <div className="p-2 bg-gray-100 border border-gray-200">
            <Input
              name="lastName"
              className="w-full bg-transparent outline-none"
              type="text"
              placeholder="Nhập họ (*)"
              control={control}
            />
          </div>
        </div>
        <div className="flex flex-col mb-10 gap-y-2">
          <span className="font-light text-gray-700">Tên</span>
          <div className="p-2 bg-gray-100 border border-gray-200">
            <Input
              name="firstName"
              className="w-full bg-transparent outline-none"
              type="text"
              placeholder="Nhập tên (*)"
              control={control}
            />
          </div>
        </div>
        <div className="flex flex-col mb-10 gap-y-2">
          <span className="font-light text-gray-700">Ngày sinh</span>
          <div className="p-2 bg-gray-100 border border-gray-200">
            <Input
              name="date"
              control={control}
              className="w-full bg-transparent outline-none"
              type="date"
            />
          </div>
        </div>
        <div className="flex flex-col mb-10 gap-y-2">
          <span className="font-light text-gray-700">Giới tính</span>
          <div className="flex items-center gap-x-[170px]">
            <div className="flex items-center gap-x-2">
              <Input
                control={control}
                type="radio"
                name="gender"
                id="Nam"
                value={"Nam"}
                className="radio"
              />
              <label htmlFor="Nam">Nam</label>
            </div>
            <div className="flex items-center gap-x-2">
              <Input
                control={control}
                type="radio"
                name="gender"
                id="Nữ"
                value={"Nữ"}
                className="radio"
              />
              <label htmlFor="Nữ">Nữ</label>
            </div>
          </div>
        </div>
        <Button isSubmitting={isSubmitting} title="Cập nhật"></Button>
      </FormSubmit>
      <ToastContainer />
    </div>
  );
};

export default UpdateUser;
