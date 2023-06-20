import React, { useCallback, useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";
import Image from "next/image";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IImageUploadWrapperProps {
  register: UseFormRegister<FieldValues>;
  data?: any;
}

const ImageUploadWrapper: React.FC<IImageUploadWrapperProps> = ({
  register,
  data,
}) => {
  const [state, setState] = useState<string[]>([]);

  const handleChange = useCallback((value: string) => {
    setState((prevState) => [...prevState, value]);
  }, []);
  const handleConfirm = useCallback(() => {
    register("images", { value: state });
    alert("Đã lưu");
  }, [state, register]);

  useEffect(() => {
    let isMounted = true;

    if (data) {
      setState((pre) => [...pre, data]);
      // console.log(data);
    }
    return () => {
      isMounted = false;
    };
  }, [data]);

  return (
    <div>
      <p className=" mb-2">Image</p>
      <div className="flex gap-1 flex-wrap">
        <ImageUpload onChange={handleChange} />
        {state.length > 0 &&
          state.map((link: any, index) => (
            <Image width={200} height={200} key={index} src={link} alt="" />
          ))}
      </div>
      <p
        onClick={handleConfirm}
        className=" cursor-pointer mt-2 mb-2 text-white bg-green-500 hover:opacity-60 p-2 inline-block"
      >
        Confirm Image
      </p>
    </div>
  );
};

export default ImageUploadWrapper;
