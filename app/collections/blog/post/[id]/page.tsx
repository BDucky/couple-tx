"use client";

import LayoutWebsite from "@/components/layout/LayoutWebsite";
import { Posts } from "@prisma/client";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Posts>();
  const getData = useCallback(async () => {
    await axios
      .get(`/api/blog/post/findById?id=${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <LayoutWebsite>
      {post && (
        <div className="flex flex-col items-center justify-center">
          <img src={post.image} alt="" className="w-[100%]" />
          <div className="flex flex-col justify-center items-center">
            <h1 className=" text-5xl font-bold mt-2 mb-2">{post.title}</h1>
            <div className="p-5 pl-48 pr-48">
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>
            <p className="text-base font-thin">
              {format(new Date(post.created_at), "MMMM dd, yyyy")}
            </p>
          </div>
        </div>
      )}
    </LayoutWebsite>
  );
};

export default PostPage;
