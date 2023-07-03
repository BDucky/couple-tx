import React from "react";

interface HeaderBlogProps {
  blogs: any;
}
const HeaderBlog: React.FC<HeaderBlogProps> = ({ blogs }) => {
  return (
    <div className="flex p-2 gap-3 overflow-x-scroll justify-center items-center no-scrollbar">
      {blogs &&
        blogs.map((blog: any) => (
          <div
            key={blog.id}
            className="text-lg font-light uppercase cursor-pointer hover:opacity-80"
          >
            {blog.title}
          </div>
        ))}
    </div>
  );
};

export default HeaderBlog;
