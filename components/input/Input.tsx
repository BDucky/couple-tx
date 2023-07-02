"use client";
import React from "react";
import { useController } from "react-hook-form";

const Input = ({
  name,
  type = "text",
  placeholder = "",
  control,
  ...props
}: any) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <input
      placeholder={placeholder}
      id={name}
      type={type}
      {...field}
      {...props}
    />
  );
};

export default Input;
