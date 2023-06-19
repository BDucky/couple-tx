import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import { UseFormRegister, FieldValues } from "react-hook-form";

// import style manually
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt(/* Markdown-it options */);

interface ProductInformationProps {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
}

const ProductInformation: React.FC<ProductInformationProps> = ({
  id,
  label,
  register,
}) => {
  const [productPreference, setProductPreference] = useState("");
  function handleEditorChange({ html, text }: { html: string; text: string }) {
    console.log("handleEditorChange", html, text);
    setProductPreference(text);
  }
  return (
    <div className="mt-3">
      <p className="mb-2">{label}</p>
      <MdEditor
        style={{ height: "200px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={(e) => {
          handleEditorChange(e);
        }}
      />

      <div
        className=" hover:opacity-70 cursor-pointer transition p-1 text-white bg-green-500 w-28 flex items-center justify-center mt-1"
        onClick={() => {
          register(id, { value: productPreference });
          alert("Đã lưu");
        }}
      >
        Lưu
      </div>
    </div>
  );
};

export default ProductInformation;
