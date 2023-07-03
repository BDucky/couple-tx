"use client";
import { Select } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const Cart = () => {
  const [quantities, setQuantities] = useState<any>({});

  const router = useRouter();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setToTalPrice] = useState<number>(0);
  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];

  const getData = useCallback(async () => {
    await axios
      .get("/api/cart/find?id=1")
      .then((response) => {
        // console.log(response.data);
        setCartItems(response.data[0].cart_item);
        response.data[0].cart_item.map((item: any) =>
          setQuantities((prevQuantities: any) => ({
            ...prevQuantities,
            [item.id]: item.quantity,
          }))
        );

        setToTalPrice(
          response.data[0].cart_item.reduce(
            (total: number, cartItem: any) => total + cartItem.total_price,
            0
          )
        );
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddCart = async (id: number) => {
    console.log(quantities[id]);
    await axios
      .post("/api/cart/addCart", {
        product_variant_id: id,
        user_id: 1,
        quantity: quantities[id],
        size: "S",
        color: "",
      })
      .then(() => {
        alert("Đã thêm");
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = async (product_variant_id: number) => {
    await axios
      .post("/api/cart/delete", {
        user_id: 1,
        product_variant_id: product_variant_id,
      })
      .then(() => {
        alert("Đã xóa");
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <div className="py-[50px]">
        <div className="mx-auto my-0 p-0 max-w-[1157px]">
          <h1 className="uppercase text-[36px] leading-[43px] text-center font-[700] mb-[10px]">
            Giỏ hàng của bạn
          </h1>
          <div>
            <div className="flex py-[10px] px-0 border-t-[2px] border-b-[2px] border-solid border-black">
              <div className="grow-0 shrink-0 basis-auto font-bold uppercase text-[20px] w-[15%] mr-[10px]">
                Sản phẩm
              </div>
              <div className="grow-0 shrink-0 basis-auto font-bold uppercase text-[20px] flex w-[calc(85%-10px)]">
                <div className="grow-0 shrink-0 basis-auto w-[40%]"></div>
                <div className="grow-0 shrink-0 basis-auto w-[17%]">
                  Số lượng
                </div>
                <div className="grow-0 shrink-0 basis-auto w-[26%]">Giá</div>
                <div className="grow-0 shrink-0 basis-auto w-[17%] text-right">
                  Thành tiền
                </div>
              </div>
            </div>
            <div>
              {cartItems.length > 0 &&
                cartItems.map((item) => (
                  <div className="flex mt-3" key={item.id}>
                    <img
                      className=" mr-[10px] w-[17%] h-[200px] object-cover"
                      src={item.product_variant.images[0].imageUrl}
                      alt=""
                    />
                    <div className=" ml-2  w-[40%]">
                      <p className=" font-bold">
                        {item.product_variant.product_variant_name}
                      </p>
                      <p className=" font-extralight text-xs">
                        Size: {item.size}
                      </p>
                      <p className=" font-extralight text-xs">
                        Màu sắc: {item.color}
                      </p>
                      <p
                        className=" cursor-pointer italic  font-extralight text-base underline"
                        onClick={() => handleDelete(item.product_variant_id)}
                      >
                        Xóa
                      </p>
                    </div>
                    <div className=" w-[17%]">
                      {" "}
                      <p className=" font-extralight text-xs flex w-[100%] justify-between">
                        {/* <p>Số lượng: {item.quantity}</p> */}
                        <Select
                          options={options}
                          value={quantities[item.id]}
                          onChange={(e) => {
                            setQuantities((prevQuantities: any) => ({
                              ...prevQuantities,
                              [item.id]: e,
                            }));
                          }}
                        ></Select>
                      </p>
                    </div>
                    <div className=" w-[26%]">
                      <p className=" font-bold">
                        {item.product_variant.price} VND
                      </p>
                    </div>
                    <div className="w-[17%]">
                      <p className=" font-bold">{item.total_price} VND</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-[100%] items-end flex justify-end flex-col">
            <div className="flex gap-3 items-center">
              <p>Tổng tiền: </p>
              <p className=" font-bold text-2xl">{totalPrice} VND</p>
            </div>
            <div
              onClick={() => router.push("/checkout")}
              className="p-3 bg-black text-white cursor-pointer"
            >
              Thanh toán
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
