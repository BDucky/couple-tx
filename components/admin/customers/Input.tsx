"use client";

import { DatePicker } from "antd";
import { format, parseISO } from "date-fns";
import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

interface InputProps {
  label: string;
  small?: boolean;
  onChange: (value: any) => void;
  date?: boolean;
  value?: any;
}

const Input: React.FC<InputProps> = ({
  label,
  small,
  onChange,
  date,
  value,
}) => {
  return (
    <div className={`w-[40%] mt-2`}>
      <p>{label}</p>

      {date ? (
        <DatePicker
          size="large"
          value={dayjs(value ? value : new Date(), "YYYY-MM-DD")}
          onChange={(date) => onChange(date)}
        />
      ) : (
        <input
          onChange={(e) => onChange(e.target.value)}
          value={value}
          type={`text`}
          className={`p-2 focus:outline-none w-[100%] border border-[#ccc] rounded-md transition hover:border-blue-500 `}
        />
      )}
    </div>
  );
};

export default Input;
