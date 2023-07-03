import React from "react";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import LayoutCardPost from "@/components/layout/LayoutCardPost";
import { Blogs } from "@prisma/client";

interface BlogProps {
  blogs: Blogs;
}

const Blog: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <LayoutWebsite>
      <div className="md:max-w-[768px] lg:max-w-[1024px] mx-auto px-[15px] mb-[30px]">
        <h1 className="text-2xl font-bold text-center mb-[30px] pb-[15px] relative before:absolute before:bottom-0 before:left-[50%] before:translate-x-[-50%] before:w-[65px] before:h-[1px] before:bg-[#000]">
          Blogs
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* {blogs.map((blog) => (
            <LayoutCardPost key={blog.id} blog={blog} />
          ))} */}
        </div>
      </div>
    </LayoutWebsite>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/blog/blog/getList");
  const blogs = await res.json();

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
