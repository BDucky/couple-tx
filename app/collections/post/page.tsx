"use client";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import React, { useEffect, useState } from "react";

const Page = ({ id }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:3000/api/blog/post/findById?id=${id}`);
            const data = await res.json();
            setBlogs(data);
        }
        fetchData();
    }, [id]);

    return (
        <LayoutWebsite>
            <div className="w-full px-[15px]">
                <div className="md:max-w-[768px] lg:max-w-[1024px] mx-auto px-[15px]">
                    {blogs.map((post) => (
                        <div
                            key={post?.id}
                            href=""
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