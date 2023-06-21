import React from "react";
import { IconType } from "react-icons";

interface OrderInfoProps {
  icon: IconType;
  label: string;
  phone?: string;
  address?: string;
  payment?: string;
  shipping?: boolean;
}

const OrderInfo: React.FC<OrderInfoProps> = ({
  icon: Icon,
  phone,
  address,
  payment,
  shipping,
  label,
}) => {
  return (
    <div className="flex">
      <div>
        <Icon
          size={38}
          className=" mr-2 bg-blue-300 rounded-full text-blue-500 p-2"
        />
      </div>
      <div>
        <p className=" font-bold text-base">{label}</p>
        <p>{phone}</p>
        <p>{address}</p>
        <p>{payment}</p>
        <p>{shipping && <p className=" text-green-500">Shipping</p>}</p>
      </div>
    </div>
  );
};

export default OrderInfo;
