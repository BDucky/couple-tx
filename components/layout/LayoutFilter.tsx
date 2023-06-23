import React from "react";
import Filter from "../Filter";
import LayoutCard from "./LayoutCard";
import Providers from "../Provider";
import ColorItem from "../ColorItem";
import { Card } from "../home";

const LayoutFilter = async () => {
  const products = await getProduct();
  return (
    <div className="flex items-start !mb-10 gap-x-3">
      <div>
        <Filter></Filter>
      </div>
      <div className="flex flex-col gap-y-5">
        {products && products.length > 0 && (
          <Providers>
            <ColorItem></ColorItem>
          </Providers>
        )}
        {products && products.length > 0 && (
          <LayoutCard>
            {products.map((product: any) => (
              <Card key={product.product_name} productId={product.id}></Card>
            ))}
          </LayoutCard>
        )}
      </div>
    </div>
  );
};

export async function getProduct() {
  const res = await fetch(`http://localhost:3000/api/products/filter`);
  return res.json();
}

export default LayoutFilter;
