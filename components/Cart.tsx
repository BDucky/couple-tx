"use client";

import useCartModal from "@/hooks/useCartModal";
import { FiShoppingCart } from "react-icons/fi";
import React, { useState, useCallback, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { isOpen, onClose, isReload, setCart } = useCartModal();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setToTalPrice] = useState<number>(0);
  const router = useRouter();

  const getData = useCallback(async () => {
    await axios
      .get("/api/cart/find?id=1")
      .then((response) => {
        // console.log(response.data);
        setCartItems(response.data[0].cart_item);
        setCart(response.data[0].cart_item.length);
        setToTalPrice(
          response.data[0].cart_item.reduce(
            (total: number, cartItem: any) => total + cartItem.total_price,
            0
          )
        );
      })
      .catch((error) => console.log(error));
  }, [setCart]);

  useEffect(() => {
    getData();
    console.log("reload", isReload);
  }, [getData, isReload]);
  if (!isOpen) {
    return null;
  }

  return (
    <div className=" fixed bg-black z-[100000] bg-opacity-50 top-0 right-0 h-screen w-screen">
      <div className=" absolute right-0  h-full w-[30%] bg-white">
        <div
          className=" cursor-pointer absolute right-0 top-0 "
          onClick={() => onClose()}
        >
          <AiFillCloseCircle size={30} />
        </div>
        <div className=" uppercase p-4 font-bold mt-8 border-b-[1px]">
          Giỏ hàng của bạn
        </div>
        <div className="p-3">
          {cartItems.length ? (
            <div className="pt-4 pb-4 ">
              {cartItems.map((item) => (
                <div key={item.id} className="w-[100%] flex gap-3 mt-1">
                  <div>
                    <img
                      className=" w-[100px] h-[100px] object-cover"
                      src={item.product_variant.images[0].imageUrl}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className=" font-bold">
                      {item.product_variant.product_variant_name}
                    </p>
                    <p className=" font-extralight text-xs">
                      Size: {item.size}
                    </p>
                    <p className=" font-extralight text-xs">
                      Màu sắc: {item.color}
                    </p>
                    <p className=" font-extralight text-xs flex w-[100%] justify-between">
                      <p>Số lượng: {item.quantity}</p>
                      <p className=" font-bold">{item.total_price} VND</p>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex mb-3 flex-col justify-center items-center gap-3">
              <FiShoppingCart size={48} />
              <div className=" font-light">Chưa có sản phẩm nào</div>
            </div>
          )}
          <div className="flex text-sm justify-between pt-5 border-t-[1px]">
            <p className=" uppercase font-extralight">Tổng tiền:</p>
            <p className=" font-bold">{totalPrice} VND</p>
          </div>
          <div
            onClick={() => router.push("/cart")}
            className=" uppercase flex justify-center items-center p-3 text-white bg-black font-bold mt-3 cursor-pointer hover:opacity-70"
          >
            Thanh toán
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
