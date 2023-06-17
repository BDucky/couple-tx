import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import ListVariantItem from "./ListVariantItem";

const ListVariants = () => {
  const route = useRouter();
  const [list, setList] = useState<any[]>([]);

  const handleClick = () => {
    route.push("/admin/products/addProduct/createVariants");
  };

  const getList = useCallback(() => {
    const data = localStorage.getItem("product_variants");
    if (data) {
      setList(JSON.parse(data));
    } else return;
  }, []);

  const handleDeleteItem = useCallback(
    (name: string) => {
      const filterData = list.filter(
        (i: any) => i.product_variant_name !== name
      );
      setList(filterData);
      localStorage.setItem("product_variants", JSON.stringify(filterData));
    },
    [list]
  );

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <div className="w-[100%]">
      <div className="flex justify-between">
        <p>Variants</p>
        <p
          className="cursor-pointer text-blue-400 hover:text-blue-300"
          onClick={handleClick}
        >
          Create Variant
        </p>
      </div>
      {list.length > 0 && (
        <>
          <div className="flex justify-between">
            <p className="w-[200px] flex justify-center">Color</p>
            <p className="w-[200px] flex justify-center">Price</p>
            <p className="w-[200px] flex justify-center">Quantity</p>
            <p className="w-[100px] flex justify-center">Action</p>
          </div>
          {list.map((item, index) => (
            <ListVariantItem
              item={item}
              key={index}
              onDelete={handleDeleteItem}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListVariants;
