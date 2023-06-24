"use client";
import ReactMarkdown from "react-markdown";
import React, { useState } from "react";

const ProductInfo = ({ content, title = "" }: any) => {
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);
  const handleCloseTab = () => {
    setIcon((icon) => !icon);
    setShow((show) => !show);
  };
  return (
    <div className="flex flex-col gap-y-3 max-w-[380px] w-full mb-2">
      <div>
        <div className="h-[0.9px] bg-gray-700 mb-4"></div>
        <div
          onClick={handleCloseTab}
          className="flex items-center justify-between mb-3 px-3 cursor-pointer"
        >
          <span className="font-semibold text-[14px]">{title}</span>
          <span>
            {icon ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </span>
        </div>
        {show && (
          <ReactMarkdown className="text-xs max-w-[350px] break-words px-3">
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
