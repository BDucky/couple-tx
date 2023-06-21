import React from "react";

const ProductDetial = ({ params }: { params: { id: string } }) => {
  return <div>My Product: {params.id}</div>;
};

export default ProductDetial;
