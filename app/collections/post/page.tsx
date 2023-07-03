"use client";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = ({ id }: any) => {
  const [blogs, setBlogs] = useState<any>([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`/api/blog/post/findById?id=${id}`)
        .then((response) => setBlogs(response.data))
        .catch((error) => console.log(error));
    }
    fetchData();
  }, [id]);

  return (
    <LayoutWebsite>
      <div className="w-full px-[15px]">
        <div className="md:max-w-[768px] lg:max-w-[1024px] mx-auto px-[15px]">
          {blogs.map((post: any) => (
            <div
              key={post?.id}
              className="flex py-[30px] border-t border-gray-300 text-black no-underline"
            >
              <div className="pr-[20px] max-w-[50%]">
                <img
                  src={post?.image}
                  alt=""
                  className="w-full max-w-full transition-all duration-200 ease-in-out"
                />
              </div>
              <div className="md:max-w-[768px] lg:max-w-[1024px] mx-auto px-[15px]">
                <h1 className="text-center text-bold text-3xl">
                  {post?.title}
                </h1>
              </div>
              <article className="prose mx-auto lg:prose-xl">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post?.body,
                  }}
                />
              </article>
            </div>
          ))}
        </div>
      </div>
    </LayoutWebsite>
  );
};

export default Page;
