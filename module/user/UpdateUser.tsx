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
    reset,
    watch,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const watchGender = watch("gender");
  const router = useRouter();
  const addDays = function (str: string, days: number) {
    const myDate = new Date(str);
    myDate.setDate(myDate.getDate() + days);
    return myDate;
  };

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
        date_of_birth: addDays(date.toISOString(), 1),
        gender,
      });
      toast.success("update Successfully!");
      router.push("/account");
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

  useEffect(() => {
    async function getData() {
      const id = Cookie.get("id");
      if (id === undefined) return;
      try {
        const res = await axios.get(`/api/user/find?key=${id}`);
        const data = res.data;
        reset({
          lastName: data.last_name,
          firstName: data.first_name,
          date: data.date_of_birth.substr(0, 10),
          gender: data.gender,
        });
      } catch (err) {
        console.log("error", err);
      }
    }
    getData();
  }, [reset]);
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
                checked={watchGender === "Nam"}
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
                checked={watchGender === "Nữ"}
                value={"Nữ"}
                className="radio"
              />
              <label htmlFor="Nữ">Nữ</label>
            </div>
          </div>
        </div>
        <Button
          isSubmitting={isSubmitting}
          title="Cập nhật"
          className="font-semibold"
        ></Button>
      </FormSubmit>
      <ToastContainer />
    </div>
  );
};

export default UpdateUser;
