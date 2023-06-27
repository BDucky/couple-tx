"use client";

import { Rate } from "antd";
import axios from "axios";
import { format, parseISO } from "date-fns";
import React, { useCallback, useEffect, useState } from "react";

interface ListCommentProps {
  id: number;
}

const ListComment: React.FC<ListCommentProps> = ({ id }) => {
  const [rates, setRates] = useState<any>([]);

  const getData = useCallback(async () => {
    await axios
      .get(`/api/products/review/getList?product_id=${id}`)
      .then((response) => {
        setRates(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className="mt-3">
      <div className=" font-bold border-b-[1px] border-[black]">
        <div className=" inline-block border-b-black border-b-2 mb-2">
          Đánh giá <span className=" bg-[#f8f8f8]">{rates.length}</span>
        </div>
      </div>
      {rates &&
        rates.map((rate: any, index: number) => (
          <div key={index}>
            <div className=" flex gap-28 items-center  p-3">
              <div className="bg-[#f8f8f8] p-3">
                <div className="flex gap-2 items-center">
                  <div className=" rounded-full bg-yellow-400 w-16 h-16 text-sm flex items-center justify-center ">
                    {rate.user.first_name || "Unknown"}
                  </div>
                  <div>
                    <Rate disabled value={rate.star} />
                    <p>{format(parseISO(rate.created_at), "dd/MM/yyyy")}</p>
                  </div>
                </div>
                <div className="mt-2">
                  {rate.user.phone.slice(0, 3) +
                    "*".repeat(rate.user.phone.length - 3)}
                </div>
              </div>

              <div className=" border-l-2 pl-3">
                <div className=" font-bold">{rate.title}</div>
                <div className=" font-light">{rate.description}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListComment;
