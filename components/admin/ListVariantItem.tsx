import React, { useCallback } from "react";

interface ListVariantItemProps {
  item: any;
  onDelete: (name: string) => void;
}

const ListVariantItem: React.FC<ListVariantItemProps> = ({
  item,
  onDelete,
}) => {
  const handleDelete = useCallback(() => {
    onDelete(item.product_variant_name);
  }, [onDelete, item.product_variant_name]);

  return (
    <div className="flex justify-between">
      <p className="w-[200px] flex justify-center">{item.color}</p>
      <p className="w-[200px] flex justify-center">{item.price}</p>
      <p className="w-[200px] flex justify-center">{item.quantity}</p>
      <p
        onClick={handleDelete}
        className="w-[100px] text-white p-1 bg-red-400 hover:opacity-70 flex items-center justify-center cursor-pointer"
      >
        Delete
      </p>
    </div>
  );
};

export default ListVariantItem;
