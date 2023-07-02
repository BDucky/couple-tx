
"use client";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/blog/post/findById?id=${id}");
      const data = await res.json();
      setBlogs(data);
    }
    fetchData();
  }, []);

  return (
    <LayoutWebsite>
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto">
          {blogs.map((blog) => (
            <article
              key={blog?.id}
              href=""
              className=""
            >
              <div className="feature">
                <img
                  src={blog?.image}
                  alt=""
                  className="mx-auto"
                />
              </div>
              <div className="container">
                <h3 className="text-center bold">
                  {blog?.title}
                </h3>
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
