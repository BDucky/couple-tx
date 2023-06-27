import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface SizeVariantItemProps {
  sizes: any[];
  setSizes: Dispatch<SetStateAction<any>>;
}

const SizeVariantItem: React.FC<SizeVariantItemProps> = ({
  setSizes,
  sizes,
}) => {
  const [listSize, setListSize] = useState(0);
  const [nameSize, setNameSize] = useState("");
  const [inputValues, setInputValues] = useState<
    { key: string; value: string }[]
  >([]);

  const handleClick = useCallback(() => {
    setListSize((listSize) => listSize + 1);
  }, []);

  const handleInputChange = useCallback((index: number, value: string) => {
    setInputValues((prevInputValues) => {
      const newInputValues = [...prevInputValues];
      newInputValues[index] = { key: value, value: "" };
      return newInputValues;
    });
  }, []);

  const handleSubmit = useCallback(() => {
    const exitSizeName = sizes.find((value) => value.nameSize === nameSize);
    if (exitSizeName) {
      exitSizeName.technical_specification = inputValues;
    } else {
      const data = {
        nameSize: nameSize,
        technical_specification: inputValues,
      };
      setSizes((pre: any) => [...pre, data]);
      console.log(data);
    }
    alert("Đã lưu");
  }, [nameSize, inputValues, setSizes, sizes]);

  return (
    <div className="ml-3 border border-[#ccc] p-3 mb-2">
      <div className="flex items-center">
        <p className="mr-3">Size name</p>
        <input
          onChange={(e) => setNameSize(e.target.value)}
          className="border text-center w-[100px] p-1 border-[#ccc] focus:outline-none"
          type="text"
          value={nameSize}
        />
      </div>
      <div>
        <p
          className="text-cyan-400 hover:text-cyan-300 cursor-pointer"
          onClick={handleClick}
        >
          Thêm thông số kỹ thuật
        </p>
        {Array.from({ length: listSize }, (_, index) => (
          <div className="flex gap-2 w-[100%] justify-center mb-2" key={index}>
            <input
              className="border p-1 text-center focus:outline-none"
              type="text"
              value={inputValues[index]?.key || ""}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            <input
              className="border p-1 text-center focus:outline-none"
              type="number"
              value={inputValues[index]?.value || ""}
              onChange={(e) =>
                setInputValues((prevInputValues) => {
                  const newInputValues = [...prevInputValues];
                  newInputValues[index] = {
                    key: newInputValues[index]?.key || "",
                    value: e.target.value,
                  };
                  return newInputValues;
                })
              }
            />
          </div>
        ))}
        <p
          className="p-1 bg-green-400 cursor-pointer inline-block text-white"
          onClick={handleSubmit}
        >
          Save
        </p>
      </div>
    </div>
  );
};

export default SizeVariantItem;
