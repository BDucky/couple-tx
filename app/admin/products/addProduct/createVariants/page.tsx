import CreateVariantModal from "@/components/admin/createVariants/CreateVariantModal";
import Layout from "@/components/admin/layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="p-10 w-[100%]">
        <h2 className="mb-2 font-bold text-lg">Create Variant</h2>
        <div className="bg-[#fff] w-[100%] h-auto shadow-md p-4">
          <CreateVariantModal />
        </div>
      </div>
    </Layout>
  );
};

export default page;
