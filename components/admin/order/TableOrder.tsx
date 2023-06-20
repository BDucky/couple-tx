"use client";

import { LoadingOutlined } from "@ant-design/icons";
import { Table } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";

const TableOrder = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(true);
  const columns = useMemo(
    () => [
      {
        title: "Id",
        key: "id",
        dataIndex: "id",
        width: 50,
      },
      {
        title: "Phone Number",
        key: "phone",
        dataIndex: "phone",
        width: 500,
      },
      {
        title: "Payment Method",
        key: "payment_method",
        dataIndex: "payment_method",
      },
      {
        title: "Action",
        key: "action",
        render: (_: any, record: any) => (
          <div className=" cursor-pointer flex gap-3">
            <div
              onClick={() => router.push(`/admin/order/detail/${record.id}`)}
              className=" w-20 flex transition hover:bg-blue-500 hover:text-white justify-center border p-1 border-[blue]"
            >
              Detail
            </div>
            <div className=" cursor-pointer transition hover:bg-red-500 hover:text-white w-20 flex justify-center border p-1 border-[red]">
              {loading ? <LoadingOutlined /> : <p>Delete</p>}
            </div>
          </div>
        ),
      },
    ],
    [loading, router]
  );

  const getData = useCallback(async () => {
    setLoading(true);
    await axios
      .get("/api/order/getList")
      .then((response) => {
        const transformedData = response.data.map((item: any) => {
          return {
            ...item,
            phone: item.user.phone,
          };
        });
        setData(transformedData);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className="h-[100vh] w-[100%] bg-[#fff] p-3 ">
      {loading ? (
        <div className="flex items-center justify-center w-[100%] h-[100%]">
          <LoadingOutlined style={{ fontSize: 50 }} />
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            current: 1,
            pageSize: 10,
          }}
        />
      )}
    </div>
  );
};

export default TableOrder;
