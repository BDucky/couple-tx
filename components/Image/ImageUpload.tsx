"use client";
import React, { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploadProps {
  onChange: (value: string) => void;
}
const ImageUpload: React.FC<ImageUploadProps> = ({ onChange }) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="unb4qhox"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className=" w-16 text-neutral-600 relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-[#ccc] flex flex-col justify-center items-center gap-4"
          >
            <TbPhotoPlus />
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
