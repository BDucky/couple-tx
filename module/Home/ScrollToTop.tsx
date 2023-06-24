"use client";

import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Xác định vị trí cuộn và hiển thị nút Scroll to Top khi cuộn xuống
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  // Xử lý sự kiện cuộn trang
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cuộn về đầu trang khi nhấp vào nút Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="scroll-to-top" style={{ display: isVisible ? 'block' : 'none' }}>
      <button onClick={scrollToTop} className="bg-gray-900 text-white fixed right-4 bottom-4 p-3 rounded-full shadow-lg transition-opacity duration-300 hover:opacity-70">
        <ChevronUpIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ScrollToTop;
