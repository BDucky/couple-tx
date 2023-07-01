"use client";
import { CheckOutProps } from "@/types";
import React from "react";

const CheckOut = ({
    img,
    productName,
    productPrice,
    category,
    descriptions,
}: CheckOutProps) => {
    return (
        <div>
            <div>
                <div className="mt-[20px] mx-[20px] flex">
                    <div className="mr-[10px] w-[calc(100%-400px)]">
                        <div className="relative">
                            <div>
                                <button className="left-[calc(50%-70px)] transform right-auto top-[15px] z-[2] cursor-pointer bg-white p-0 w-[40px] h-[40px] rounded-[20px] border border-transparent transition-all duration-300 min-h-auto absolute opacity-100">
                                    <svg className="transition-fill duration-200 fill-transparent stroke-current stroke-black stroke-[1px] w-[22px] h-[20px] inline-block" viewBox="0 0 16 13" id="favorites" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.135l-.949-.95C5.698.828 3.504.828 2.167 2.184c-1.354 1.355-1.354 3.568 0 4.94l3.39 3.413L8 13l5.833-5.89c1.354-1.357 1.354-3.57 0-4.941-1.353-1.356-3.546-1.356-4.884 0L8 3.135z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <div className="flex flex-wrap mx-[-0.75rem] justify-center items-center">
                                    <div className="w-1/2 px-[0.75rem] mb-[1.5rem] cursor-pointer">
                                        <img src={img} alt="" className="w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pr-[1.25rem] w-[400px] mx-[20px] mb-[5.25rem]">
                        <div>
                            <form action="">
                                <div className="text-[1.625rem] tracking-[0.024em] leading-[1.2] mt-0 mb-[1.1875rem] text-left font-[600]">{productName}</div>
                                {/* <div className="flex flex-wrap items-center"></div> */}
                                <div className="text-[1.25rem] font-bold tracking-[0.05em] leading-[1.25] mt-[1.4375rem]">
                                    <span>{productPrice.toLocaleString()} VND</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;