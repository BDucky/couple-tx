"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const CheckOut = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setToTalPrice] = useState<number>(0);
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const getData = useCallback(async () => {
    await axios
      .get("/api/cart/find?id=1")
      .then((response) => {
        // console.log(response.data);
        setCartItems(response.data[0].cart_item);
        setToTalPrice(
          response.data[0].cart_item.reduce(
            (total: number, cartItem: any) => total + cartItem.total_price,
            0
          )
        );
      })
      .catch((error) => console.log(error));
  }, []);
  const handleAddOrder = useCallback(async () => {
    await axios
      .post("/api/order/addOrder", {
        user_id: 1,
        payment_method: paymentMethod,
        address: address,
        phone: phone,
        full_name: fullName,
      })
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [address, fullName, paymentMethod, phone, router]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="container flex p-5 justify-center">
      <div className=" w-3/5">
        <div className="main ">
          <div className="mb-[20px]">
            <div className="border">
              <div className="m-[15px]">
                <div className="">
                  <h1 className="font-bold text-2xl">Thông tin giao hàng</h1>
                </div>
                <div className="">
                  <div className="">
                    <div className="">
                      <div className="">
                        <input
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Họ và tên"
                          className="w-full px-3 py-2 mb-1 border border-gray-200 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-3/5">
                        <input
                          placeholder="Email"
                          className="w-full px-3 py-2 mb-1 border border-gray-200 focus:outline-none focus:border-indigo-500 transition-colors"
                          type="email"
                        />
                      </div>
                      <div className="pl-2 w-2/5">
                        <input
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Số điện thoại"
                          className="w-full px-3 py-2 mb-1 border border-gray-200 focus:outline-none focus:border-indigo-500 transition-colors"
                          maxLength={15}
                          type="tel"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border">
                  <div className="m-[5px]">
                    <form
                      id="form_update_shipping_method"
                      className=""
                      acceptCharset="UTF-8"
                      method="post"
                    >
                      <input name="utf8" type="hidden" value="✓" />
                      <div className="">
                        <div className="">
                          <label className="">
                            <span className="">Giao tận nơi</span>
                          </label>
                          <div className="px-2 w-full">
                            <input
                              onChange={(e) => setAddress(e.target.value)}
                              placeholder="Địa Chỉ"
                              className="w-full px-3 py-2 mb-1 border border-gray-200 focus:outline-none focus:border-indigo-500 transition-colors"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div>
                  <div className="">
                    <div className="">
                      <div className=""></div>
                    </div>
                    <div className="">
                      <h2 className="font-bold text-2xl">
                        Phương thức thanh toán
                      </h2>
                    </div>
                    <div className="">
                      <div className="">
                        <div className="radio-wrapper content-box-row">
                          <label
                            className="radio-label flex items-center"
                            htmlFor="payment_method_id_509146"
                          >
                            <input
                              onChange={(e) => setPaymentMethod("COD")}
                              type-id="1"
                              id="payment_method_id_509146"
                              className="input-radio"
                              name="payment_method_id"
                              type="radio"
                              value="509146"
                            />
                            <div className="radio-content-input ml-[10px]">
                              <div className="flex items-center">
                                <img
                                  className="main-img col-span-6"
                                  src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
                                />
                              </div>
                              <div>
                                <span className="radio-label-primary">
                                  Thanh toán khi giao hàng (COD)
                                </span>
                                <span className="quick-tagline hidden"></span>
                              </div>
                            </div>
                          </label>
                        </div>
                        <hr className="my-4" />

                        <div className="radio-wrapper  content-box-row">
                          <label
                            className="radio-label flex items-center"
                            htmlFor="payment_method_id_1002663486"
                          >
                            <input
                              onChange={(e) => setPaymentMethod("Momo")}
                              type-id="36"
                              id="payment_method_id_1002663486"
                              className="input-radio"
                              name="payment_method_id"
                              type="radio"
                              value="1002663486"
                            />
                            <div className="radio-content-input  ml-[10px]">
                              <div className="flex items-center">
                                <img
                                  className="main-img col-span-6 w-[40px] h-[40px]"
                                  src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
                                />
                              </div>
                              <div>
                                <span className="radio-label-primary">
                                  Ví Momo
                                </span>
                                <span className="quick-tagline hidden"></span>
                              </div>
                            </div>
                          </label>
                        </div>
                        <hr className="my-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div
                onClick={() => handleAddOrder()}
                className="border cursor-pointer inline-block border-black bg-white text-black px-5 py-2"
              >
                Hoàn tất đơn hàng
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/5 ml-4 border flex flex-col justify-between shadow-xl p-4">
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="w-[100%] items-center flex gap-3 mt-1"
            >
              <div>
                <img
                  className=" w-[60px] h-[60px] object-cover"
                  src={item.product_variant.images[0].imageUrl}
                  alt=""
                />
              </div>
              <div>
                <p className=" font-bold">
                  {item.product_variant.product_variant_name}
                </p>
                <p className=" font-extralight text-xs">Size: {item.size}</p>
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
        <div>
          <div className="flex justify-between items-center">
            <p className=" uppercase">Tổng cộng:</p>
            <p className=" text-3xl">{totalPrice} VND</p>
          </div>
          <p className=" italic font-light">
            Cảm ơn bạn đã luôn tin tưởng và ủng hộ Couple TX
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
