import CreateProductModal from "@/components/admin/CreateProductModal";
import Layout from "@/components/admin/layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="p-10 w-[100%]">
        <h2>Create Product</h2>
        <div className="bg-[#fff] w-[100%] h-auto shadow-md p-4">
          <CreateProductModal />
        </div>
      </div>
    </Layout>
  );
};

export default page;
