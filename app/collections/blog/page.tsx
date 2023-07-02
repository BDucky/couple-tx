"use client";
import HeaderBlog from "@/components/blog/HeaderBlog";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState<any>([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/blog/getList");
      const data = await res.json();
      setBlogs(data);
    }
    fetchData();
  }, []);

  return (
    <LayoutWebsite>
      <div className="w-full px-[15px]">
        <HeaderBlog blogs={blogs} />
        <div className="w-[100%] justify-center flex flex-col items-center mt-2 mb-2">
          {blogs &&
            blogs.map((blog: any) => (
              <div
                key={blog.id}
                className="flex flex-col gap-3  cursor-pointer"
              >
                {blog.posts.map((post: any) => (
                  <div
                    className="flex hover:opacity-80 "
                    onClick={() =>
                      router.push(`/collections/blog/post/${post.id}`)
                    }
                    key={post.id}
                  >
                    <img
                      className="w-[450px] h-[450px]"
                      src={post.image}
                      alt=""
                    />
                    <div className="w-[500px] items-center text-2xl uppercase font-light flex flex-col justify-between">
                      <p>{post.title}</p>
                      <p className="text-base font-thin">
                        {format(new Date(post.created_at), "MMMM dd, yyyy")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </LayoutWebsite>
  );
};

export default Page;
