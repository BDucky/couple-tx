import React, { useEffect, useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  data?: any;
  register: UseFormRegister<FieldValues>;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  disabled,
  data,
  register,
  required,
}) => {
  const [value, setValue] = useState<string>();
  useEffect(() => {
    let isMounted = true;

    if (data && isMounted) {
      setValue(data);
      console.log(data);
    }

    return () => {
      isMounted = false;
    };
  }, [data]);

  return (
    <div className=" flex w-[100%] items-center">
      <p className=" w-[200px] mr-3">{label}</p>
      <input
        className=" mt-2 w-[60%] border pl-2 p-1 rounded-md border-[#ccc] focus:outline-none"
        type={type}
        {...register(id)}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
