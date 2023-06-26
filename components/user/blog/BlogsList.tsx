"use client"
import { BlogListProps } from "@/types"
import React, { useEffect, useState } from "react"

const BlogList = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:3000/api/blog/getList")
            const data = await res.json()
            setBlogs(data)
        }
        fetchData();
    }, [])

    return (
        <div className="w-full px-[15px]">
            <div className="max-w-[1000px] mx-auto my-0">
                {blogs.map((blog) => (
                    <a key={blog?.id} href="" className="flex py-[30px] border-t border-gray-300 text-black no-underline">
                        <div className="pr-[20px] max-w-[50%]">
                            <img src={blog?.image} alt="" className="w-full max-w-full transition-all duration-200 ease-in-out" />
                        </div>
                        <div className="px-[20px] max-w-[50%] w-[50%]">
                            <h3 className="text-[1.5rem] font-medium leading-[1.33] tracking-[0.091em] uppercase m-0 p-0">
                                {blog?.title}
                            </h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default BlogList