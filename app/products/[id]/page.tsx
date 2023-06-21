import React from "react";

const ProductDetial = async ({ params }: { params: { id: string } }) => {
  const product = await getProductDetial(params.id);
  return <div>My Product: {product.id}</div>;
};

async function getProductDetial(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/products/findById?id=${id}`
  );
  return res.json();
}

export default ProductDetial;
