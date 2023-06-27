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
    }, [params.id])

    console.log(posts);

    return (
        <LayoutWebsite>
            <div className="max-w-lg mx-auto p-4">
                <div className="md:max-w-[768px] lg:max-w-[1024px] mx-auto px-[15px]">
                    {posts?.map((post) => (
                        <div key={post?.id} className="post">
                            <div className="title">
                                <h1 className="text-center text-2xl font-bold mb-2">{post?.title}</h1>
                            </div>
                            <div className="image">
                                <img
                                    src={post?.image}
                                    alt=""
                                    className="w-full mb-4"
                                />
                            </div>
                            <div className="content">
                                <article className="prose mx-auto lg:prose-xl">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: post?.body,
                                        }}
                                    />
                                </article>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </LayoutWebsite>
    );
};

export default Page;
