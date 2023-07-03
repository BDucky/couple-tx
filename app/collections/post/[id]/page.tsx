"use client";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("/api/blog/post/findById?id=${id}")
        .then((response) => setBlogs(response.data))
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  return (
    <LayoutWebsite>
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto">
          {blogs.map((blog) => (
            <article key={blog.id} className="">
              <div className="feature">
                <img src={blog?.image} alt="" className="mx-auto" />
              </div>
              <div className="container">
                <h3 className="text-center bold">{blog?.title}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog?.body,
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </LayoutWebsite>
  );
};

export default Page;
