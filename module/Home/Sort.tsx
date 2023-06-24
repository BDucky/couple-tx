"use client"

import { useRef } from "react";

const SortBtn = () => {
    const tagRef = useRef<HTMLUListElement>(null)

    const handleMouseOver = () => {
        if (tagRef.current) {
            tagRef.current.style.display = 'block';
        }
    }

    const handleMouseOut = () => {
        if (tagRef.current) {
            tagRef.current.style.display = 'none';
        }
    }

    return (
        <div className="w-[150px] h-[40px] pr-[10px] pl-[10px] font-normal text-[0.8125rem] text-left tracking-[0.08em] leading-[40px] cursor-pointer border-[1px] border-[#000] bg-[url('/image/sort.svg')] bg-no-repeat bg-[center_right_1rem]">
            <div id="sort-box" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="relative">
                <div>
                    <span>Sắp xếp theo</span>
                </div>
                <ul ref={tagRef} id="sort-by" className="hidden absolute w-[calc(100%_+_22px)] m-0 p-[5px] leading-[1.5rem] list-none bg-[#fff] border-[1px] border-t-[0] z-[2] left-[-10px]">
                    <li>
                        <a href="">Tự động</a>
                    </li>
                    <li>
                        <a href="">Mới nhất</a>
                    </li>
                    <li>
                        <a href="">Giá: Tăng dần</a>
                    </li>
                    <li>
                        <a href="">Giá: Giảm dần</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SortBtn