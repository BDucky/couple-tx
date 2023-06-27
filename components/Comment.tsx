"use client";

import { LoadingOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import React, { useEffect, useState, useCallback } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbPhotoPlus } from "react-icons/tb";

interface ComponentProps {
  product: any;
}

const Comment: React.FC<ComponentProps> = ({ product }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [user, setUser] = useState<any>();
  const [show, setShow] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [star, setStar] = useState<number>(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculationRating = () => {
    const value = product.rates.reduce(
      (acc: number, i: any) => acc + i.star,
      0
    );
    setRating(value / product.rates.length);
  };

  const getUser = useCallback(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const handleUpload = useCallback((result: any) => {
    setImages((pre) => [...pre, result.info.secure_url]);
  }, []);
  const handleRemoveImage = useCallback(
    (image: string) => {
      setImages(images.filter((img) => img != image));
    },
    [images]
  );

  const handleComment = useCallback(async () => {
    setLoading(true);
    let user_id = 1;
    if (user) {
      user_id = user.id;
    }
    await axios
      .post("/api/products/review/add", {
        user_id: user_id,
        title: title,
        product_id: product.id,
        images: images,
        star: star,
        description: description,
      })
      .then((response) => {
        console.log("added");
      })
      .catch((err) => console.log(err));
    setLoading(false);
    alert("Đã đánh giá");
    window.location.reload();
  }, [description, images, product.id, star, title, user]);

  useEffect(() => {
    console.log(product);
    getUser();
    calculationRating();
  }, [product, calculationRating, getUser]);
  return (
    <div className="p-10 mt-5 pl-16 pr-16 bg-[#f8f8f8] w-[100%] h-auto flex items-center justify-center flex-col ">
      <h1 className=" inline-block font-bold text-3xl">Đánh giá sản phẩm</h1>
      <div className="flex w-[100%] justify-between">
        <div className="flex items-center justify-center flex-col">
          <Rate disabled defaultValue={rating} />
          <div>Dựa trên {product.rates.length} lượt đánh giá</div>
        </div>
        <div>
          <div
            onClick={() => setShow(!show)}
            className="p-2 cursor-pointer border rounded-sm border-[black]"
          >
            Viết đánh giá
          </div>
        </div>
      </div>
      {/* input comment */}
      {show && (
        <div className="w-[100%]">
          <div className="flex gap-2">
            <div className="w-[30%]">
              <p className=" text-lg">Tên</p>
              <input className="p-1 w-[100%] border focus:outline-none border-[#ccc]" />
            </div>
            <div className="w-[30%]">
              <p className=" text-lg">Email</p>
              <input
                placeholder="hi@example.com"
                className="p-1 w-[100%] border focus:outline-none border-[#ccc]"
              />
            </div>
            <div className="w-[30%]">
              <p className=" text-lg">Số điện thoại</p>
              <input
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Số điện thoại"
                className="p-1 w-[100%] border focus:outline-none border-[#ccc]"
              />
            </div>
          </div>
          <div>
            <p className=" text-lg mt-2">Đánh giá</p>
            <Rate onChange={(e) => setStar(e)} />
          </div>
          <div className="w-[100%]">
            <p className=" text-lg">Tiêu đề đánh giá</p>
            <input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nhập tiêu đề đánh giá của bạn"
              className="p-1 w-[100%] border focus:outline-none border-[#ccc]"
            />
          </div>
          <div className="w-[100%]">
            <p className=" text-lg mt-2">Nội dung đánh giá</p>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Viết nội dung đánh giá của bạn"
              className=" resize-none h-[150px] p-1 w-[100%] border focus:outline-none border-[#ccc]"
            />
          </div>
          <div className="flex justify-between w-[100%] items-center">
            <div className="flex items-center gap-1">
              <p>Hình ảnh (không bắt buộc)</p>
              <CldUploadWidget
                onUpload={handleUpload}
                uploadPreset="unb4qhox"
                options={{ maxFiles: 1 }}
              >
                {({ open }) => {
                  return (
                    <div
                      onClick={() => open?.()}
                      className=" rounded-md inline-block p-1 text-blue-500 border border-blue-500"
                    >
                      Chọn hình
                    </div>
                  );
                }}
              </CldUploadWidget>
              {images.length > 0 &&
                images.map((image, index) => (
                  <div key={index} className=" relative w-[100px] h-[100px]">
                    {" "}
                    <AiFillCloseCircle
                      size={24}
                      onClick={() => handleRemoveImage(image)}
                      className=" cursor-pointer absolute top-0 right-[-5px]"
                    />{" "}
                    <img src={image} alt="" className="w-[100%] h-[100%]" />
                  </div>
                ))}
            </div>
            <div
              onClick={() => handleComment()}
              className=" text-center bg-yellow-400 p-2 inline-block rounded-md right-0"
            >
              {loading ? <LoadingOutlined size={28} /> : "Gửi đánh giá"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
