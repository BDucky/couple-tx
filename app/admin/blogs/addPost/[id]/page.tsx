"use client";

import Input from "@/components/admin/Input";
import ImageUploadWrapper from "@/components/Image/ImageUploadWrapper";
import Layout from "@/components/admin/layout";
import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { LoadingOutlined } from "@ant-design/icons";
// import style manually
import "react-markdown-editor-lite/lib/index.css";
import axios from "axios";
import { useParams } from "next/navigation";

const mdParser = new MarkdownIt(/* Markdown-it options */);

const AddPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const [body, setBody] = useState("");

  function handleEditorChange({ html, text }: { html: string; text: string }) {
    console.log("handleEditorChange", html, text);
    setBody(text);
  }
  const handleCreatePost = async (data: any) => {
    setLoading(true);
    const user = localStorage.getItem("admin");
    if (user) {
      const userData = JSON.parse(user);
      await axios
        .post("/api/blog/post/create", {
          body: data.body,
          image: data.images[0],
          title: data.title,
          author_id: userData.id,
          blog_id: id,
        })
        .then(() => {
          console.log("created");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setLoading(false);
  };
  return (
    <Layout>
      <div className="m-6 p-3 bg-[#fff]">
        <form onSubmit={handleSubmit((data) => handleCreatePost(data))}>
          <p className=" text-[#4f4e4e] text-sm">
            * Lưu ý: Nhớ bấm lưu sau khi hoàn tất mỗi mục để lưu thông tin vừa
            nhập
          </p>
          <ImageUploadWrapper single register={register} />
          <Input
            id="title"
            type="text"
            disabled={false}
            required={true}
            register={register}
            label="Title Post"
          />
          <div className="mt-3">
            <p className="mb-2">Body</p>
            <MdEditor
              style={{ height: "800px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={(e) => {
                handleEditorChange(e);
              }}
            />

            <div
              className=" hover:opacity-70 cursor-pointer transition p-1 text-white bg-green-500 w-28 flex items-center justify-center mt-1"
              onClick={() => {
                register("body", { value: body });
                alert("Đã lưu");
              }}
            >
              Lưu
            </div>
          </div>
          {loading ? (
            <LoadingOutlined />
          ) : (
            <input
              className="p-2 hover:opacity-70 cursor-pointer bg-green-500 text-white mt-4 w-32"
              type="submit"
            />
          )}
        </form>
      </div>
    </Layout>
  );
};

export default AddPost;
