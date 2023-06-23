"use client";
import { CategoryBannerProps } from "@/types";
import Image from "next/image";
import React from "react";

const CategoryBanner = ({ img, category, descriptions }: CategoryBannerProps) => {
    return (
        <div>
            <Image width={590} height={461} src={img} alt="" style={{ marginBottom: "1.5rem", height: 'auto', width: '100%'}} />
            <a href="">
                <p className="mb-[0.5rem] font-normal text-[1rem] tracking-[0.03em] leading-[1.4]">{descriptions}</p>
                <div className="flex text-[1.25rem] tracking-[0.04em] font-bold items-center uppercase">
                    {category}
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="100%" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M192 128l128 128-128 128z"></path></svg>
                </div>
            </a>
        </div>
    )
}

export default CategoryBanner