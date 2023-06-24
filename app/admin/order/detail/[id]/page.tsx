"use client";

import Layout from "@/components/admin/layout";
import OrderInfo from "@/components/admin/order/OrderInfo";
import { HiUser, HiTruck, HiMap } from "react-icons/hi";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { format, parseISO } from "date-fns";
import TableItemOrder from "@/components/admin/order/TableItemOrder";

const DetailOrder = () => {
  const [data, setData] = useState<any>();
  const { id } = useParams();

  const getData = useCallback(async () => {
    try {
      const response = await axios.get(`/api/order/findById?id=${id}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const formattedDate = data
    ? format(parseISO(data.created_at), "dd/MM/yyyy")
    : "";
  const formattedWeekday = data
    ? format(parseISO(data.created_at), "EEEE")
    : "";
  const formattedTime = data ? format(parseISO(data.created_at), "HH:mm") : "";

  return (
    <Layout>
      <div className=" shadow-xl bg-[#fff] m-3 p-4">
        <div>
          <p>
            {formattedDate}, {formattedWeekday}, {formattedTime}
          </p>
        </div>
        <div className=" p-4 border-t-2">
          <div className=" flex justify-between">
            <OrderInfo
              label="Customer"
              phone={data?.user.phone}
              icon={HiUser}
            />
            <OrderInfo
              label="Shipping"
              shipping
              payment={data?.payment_method}
              icon={HiTruck}
            />
            <OrderInfo label="Address" address={data?.address} icon={HiMap} />
          </div>
          <div>
            <TableItemOrder id={parseInt(id)} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailOrder;
