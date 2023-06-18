"use client";
import Image from "next/image";

const FlashSale = () => {
  return (
    <div className="py-[90px] container">
      <Image
        width={1440}
        height={225}
        src="/image/flash_sale.webp"
        alt="flash_sale"
      />
    </div>
  );
};

export default FlashSale;
