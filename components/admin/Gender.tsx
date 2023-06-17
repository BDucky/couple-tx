import React, { useState } from "react";
import Select from "react-select";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface OptionType {
  value: number;
  label: string;
}
interface GenderProps {
  register: UseFormRegister<FieldValues>;
}

const Gender: React.FC<GenderProps> = ({ register }) => {
  const [gender, setGender] = useState<OptionType | null>(null);
  const options = [
    { value: 1, label: "Nam" },
    { value: 2, label: "Nữ" },
  ];
  return (
    <div className="flex  items-center">
      <p className=" mr-2">Gender</p>
      <Select
        id="category"
        onChange={(e) => {
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
