import React, { useCallback, useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { UseFormRegister, FieldValues } from "react-hook-form";
import axios from "axios";

interface OptionType {
  value: string;
  label: string;
}

interface SelectCategory_SubCategoryProps {
  register: UseFormRegister<FieldValues>;
  gender: string;
}

const SelectCategory_SubCategory: React.FC<SelectCategory_SubCategoryProps> = ({
  register,
  gender,
}) => {
  const [dataAll, setDataAll] = useState<any>();
  const [category, setCategory] = useState<OptionType | null>(null);
  const [options, setOptions] = useState<OptionType[]>([]);
  const [subCategory, setSubCategory] = useState<OptionType | null>(null);

  const getData = useCallback(async () => {
    console.log(gender);
    await axios
      .get(`/api/category/?key=gender&value=${gender}`)
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        setDataAll(data);
        setOptions(data.map((i: any) => ({ value: i.id, label: i.name })));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [gender]);

  const sub_category = useMemo(() => {
    setSubCategory(null);
    if (category?.value) {
      const selectedCategory = dataAll.find(
        (item: any) => item.id === category.value
      );
      if (selectedCategory) {
        return selectedCategory.subcategories.map((item: any) => ({
          label: item.name,
          value: item.id,
        }));
      }
    }
    return [];
  }, [category, dataAll]);

  useEffect(() => {
    getData();
  }, [gender, getData]);

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
