"use client";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: string } }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:3000/api/blog/post/findById?id=${params.id}`);
            const data = await res.json();
            const postsData: any = [];
            postsData.push(data);
            setPosts(postsData);
        }
        fetchData();
    }, [params.id]);

    return (
        <LayoutWebsite>
            <div className="w-full px-[15px]">
                <div className="md:max-w-[768px] lg:max-w-[1024px] mx-auto px-[15px]">
                    {posts?.map((post) => (
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