import React from "react";

const Button = ({
  isSubmitting,
  type = "submit",
  title = "ĐĂNG NHẬP",
}: any) => {
  return (
    <button
      type={type}
      disabled={isSubmitting}
      className={`w-full p-2 font-light text-white cursor-pointer bg-black ${
        isSubmitting && "opacity-50 cursor-progress"
      }`}
    >
      {isSubmitting ? (
        <div className="w-6 h-6 mx-auto border border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
