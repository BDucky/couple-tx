import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface OptionType {
  value: string;
  label: string;
}

interface SelectCategory_SubCategoryProps {
  register: UseFormRegister<FieldValues>;
}

const SelectCategory_SubCategory: React.FC<SelectCategory_SubCategoryProps> = ({
  register,
}) => {
  const [category, setCategory] = useState<OptionType | null>(null);
  const [subCategory, setSubCategory] = useState<OptionType | null>(null);

  const options = [
    { value: "1", label: "Áo" },
    { value: "2", label: "Quần" },
    { label: "Phụ kiện", value: "3" },
  ];

  const sub_category = useMemo(() => {
    setSubCategory(null);
    if (category?.value === "1") {
      return [
        { label: "Áo Khoác", value: "1" },
        { label: "Áo Thun", value: "2" },
        { label: "Áo Sơ-mi", value: "3" },
        { label: "Áo Polo", value: "4" },
        { label: "Áo Sweater", value: "5" },
      ];
    } else if (category?.value === "2") {
      return [
        { label: "Quần Ngắn", value: "6" },
        { label: "Quần Dài", value: "7" },
        { label: "Quần Jean", value: "8" },
      ];
    } else if (category?.value === "3") {
      return [
        { label: "Tất-Vớ", value: "9" },
        { label: "Balo-Túi xách", value: "10" },
        { label: "Mũ-Nón", value: "11" },
      ];
    }
    return [];
  }, [category]);

  return (
    <div className="flex gap-2 w-[100%]">
      <div className="w-[100%]">
        <p>Category</p>
        <Select
          id="category"
          onChange={(e) => {
            setCategory(e);
            register("category", { value: e });
          }}
          options={options}
          value={category}
        />
      </div>
      <div className="w-[100%]">
        <p>Sub_Category</p>
        <Select
          id="sub_category"
          onChange={(e) => {
            setSubCategory(e);
            register("sub_category", { value: e });
          }}
          options={sub_category}
          value={subCategory}
        />
      </div>
    </div>
  );
};

export default SelectCategory_SubCategory;
