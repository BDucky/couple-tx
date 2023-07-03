"use client";
import React from "react";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { Button } from "../button";
import { FormSubmit } from "../form";

const schema = yup.object().shape({
  phone: yup.number().min(10).required("Please enter your phone number"),
});

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const router = useRouter();
  useEffect(() => {
    document.title = "Login Page";
  }, []);
  const handleSignIn = async (values: any) => {
    if (!isValid || ("0" + values.phone).length < 10) {
      toast.error("It seems your phone number was wrong");
      return;
    }
    try {
      const res = await axios.post("/api/user/create", {
        sdt: "0" + values.phone,
      });
      const result = res.data;
      Cookie.set("login", "LoginSuccess", { expires: 1 });
      Cookie.set("id", `${result.id}`, { expires: 1 });
      Cookie.set("phone", `${result.phone}`, { expires: 1 });
      router.push("/");
      toast.success("SignIn Successfully!");
    } catch (error) {
      toast.error("It seems your phone number was wrong");
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
    <>
      <FormSubmit onSubmit={handleSubmit(handleSignIn)}>
        <Input
          type="text"
          name="phone"
          id="phone"
          placeholder="Số điện thoại: (+84)"
          className="w-full mb-[18px] px-4 py-2 transition-all duration-300 border border-gray-200 outline-none focus:border-black"
          control={control}
        ></Input>
        <Button isSubmitting={isSubmitting}></Button>
      </FormSubmit>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
