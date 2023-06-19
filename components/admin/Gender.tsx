import React, { useEffect, useState } from "react";
import Select from "react-select";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface GenderProps {
  register: UseFormRegister<FieldValues>;
  data?: any;
  setGenderValue?: any;
}

const Gender: React.FC<GenderProps> = ({ register, data, setGenderValue }) => {
  const [gender, setGender] = useState<any>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = [
    { value: 1, label: "Nam" },
    { value: 2, label: "Nữ" },
  ];
  useEffect(() => {
    let isMounted = true;

    if (data) {
      const value = options.find((option) => option.label === data);
      setGender(value);
      setGenderValue(value);
    }
    return () => {
      isMounted = false;
    };
  }, [data, options, setGenderValue]);
  return (
    <div className=" mt-2 flex  items-center">
      <p className=" w-[200px] mr-3">Gender</p>
      <Select
        id="category"
        onChange={(e) => {
          setGenderValue(e);
          setGender(e);
          register("gender", { value: e });
        }}
        options={options}
        value={gender}
      />
    </div>
  );
};

export default Gender;
