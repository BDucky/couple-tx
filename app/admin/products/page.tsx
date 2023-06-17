import TableProduct from "@/components/admin/TableProduct";
import Layout from "@/components/admin/layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="p-2">
        <TableProduct />
      </div>
    </Layout>
  );
};

export default page;
