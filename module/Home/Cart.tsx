"use client";

import { CartProps } from "@/types";
import React, { useState } from "react";

const Cart = ({ img, title, price, color, gender, size }: CartProps) => {
    const [quantity, setQuantity] = useState(1);

    const handleSelectQuantity = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <div>
            <div className="py-[50px]">
                <div className="mx-auto my-0 p-0 max-w-[1157px]">
                    <h1 className="uppercase text-[36px] leading-[43px] text-center font-[700] mb-[10px]">Giỏ hàng của bạn</h1>
                    <div>
                        <div className="flex py-[10px] px-0 border-t-[2px] border-b-[2px] border-solid border-black">
                            <div className="grow-0 shrink-0 basis-auto font-bold uppercase text-[20px] w-[15%] mr-[10px]">Sản phẩm</div>
                            <div className="grow-0 shrink-0 basis-auto font-bold uppercase text-[20px] flex w-[calc(85%-10px)]">
                                <div className="grow-0 shrink-0 basis-auto w-[40%]"></div>
                                <div className="grow-0 shrink-0 basis-auto w-[17%]">Số lượng</div>
                                <div className="grow-0 shrink-0 basis-auto w-[26%]">Giá</div>
                                <div className="grow-0 shrink-0 basis-auto w-[17%] text-right">Thành tiền</div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-wrap py-[8px] border-b-[2px] border-black">
                                <div className="grow-0 shrink-0 basis-auto w-[15%] relative mr-[10px]">
                                    <button className="absolute right-[5px] top-[5px] border-0 bg-transparent w-[30px] h-[30px] p-0">
                                        <svg className="fill-transparent stroke-black stroke-1 w-[calc(100%-10px)] block mx-auto my-0" viewBox="0 0 16 13" id="favorites" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 3.135l-.949-.95C5.698.828 3.504.828 2.167 2.184c-1.354 1.355-1.354 3.568 0 4.94l3.39 3.413L8 13l5.833-5.89c1.354-1.357 1.354-3.57 0-4.941-1.353-1.356-3.546-1.356-4.884 0L8 3.135z"></path>
                                        </svg>
                                    </button>
                                    <a href="">
                                        <img src={img} alt="" className="max-w-full" />
                                    </a>
                                </div>
                                <div className="grow-0 shrink-0 basis-auto w-[calc(85%-10px)] flex">
                                    <div className="grow-0 shrink-0 basis-auto w-[40%]">
                                        <h4 className="uppercase mb-[3px] font-bold leading-[1.2] ">
                                            <a href="" className="text-[0.813rem]">{title}</a>
                                        </h4>
                                        <p className="text-[12px]">
                                            <strong>Item: </strong>101222302914
                                        </p>
                                        <p className="text-[12px]">
                                            <strong>Màu sắc: </strong>{color}
                                        </p>
                                        <p className="text-[12px]">
                                            <strong>Giới tính: </strong>{gender}
                                        </p>
                                        <p className="text-[12px]">
                                            <strong>Kích thước: </strong>{size}
                                        </p>
                                    </div>
                                    <div className="grow-0 shrink-0 basis-auto w-[17%]">
                                        <div className="max-w-[60px] overflow-hidden block pr-[32px] box-border border border-black rounded-none bg-white bg-[right_10px_center] bg-no-repeat bg-[url(https://file.hstatic.net/1000364782/file/chevdown_13cd2d1e1c904efc95482a32bca4784f.svg)]">
                                            <select value={quantity} onChange={handleSelectQuantity} name="" id="" className="border-0 bg-transparent pl-[10px] py-[2px] h-[38px] w-[calc(100%+32px)] appearance-none">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 basis-auto w-[26%]">{price.toLocaleString()} VND</div>
                                    <div className="grow-0 shrink-0 basis-auto w-[17%] text-right font-bold">{(price * quantity).toLocaleString()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;