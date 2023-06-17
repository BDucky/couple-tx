import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  disabled,
  register,
  required,
}) => {
  return (
    <div className=" flex w-[100%] items-center">
      <p className=" w-[30%] mr-3">{label}</p>
      <input
        className=" w-[100%] border p-1 rounded-md border-[#ccc] focus:outline-none"
        type={type}
        {...register(id)}
        required={required}
      />
    </div>
  );
};

export default Input;
