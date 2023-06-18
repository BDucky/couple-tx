"use client";

import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Table } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface ProductProps {
  id: number;
  product_name: string;
  favorite_counters: number;
}
const TableProduct = () => {
  const [data, setData] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const getData = useCallback(async () => {
    setLoading(true);
    await axios
      .get("/api/products/filter")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, []);

  const handelDelete = useCallback(
    (record: any) => {
      const deleteData = async () => {
        setLoading(true);
        await axios
          .post("/api/products/delete", { id: record.id })
          .then((response) => {
            alert("Xóa thành công !");
            getData();
          })
          .catch((error) => {
            alert("Xóa thất bại !");
          });
      };
      deleteData();
      setLoading(false);
    },
    [getData]
  );
  const columns = useMemo(
    () => [
      {
        title: "Id",
        key: "id",
        dataIndex: "id",
        width: 50,
      },
      {
        title: "Name",
        key: "product_name",
        dataIndex: "product_name",
        width: 500,
      },
      {
        title: "Favorite Count",
        key: "favorite_counters",
        dataIndex: "favorite_counters",
        width: 200,
      },
      {
        title: "Action",
        key: "action",
        render: (_: any, record: any) => (
          <div className=" cursor-pointer flex gap-3">
            <div
              onClick={() =>
                router.push(`/admin/products/editProduct/${record.id}`)
              }
              className=" w-20 flex transition hover:bg-blue-500 hover:text-white justify-center border p-1 border-[blue]"
            >
              Edit
            </div>
            <div
              className=" cursor-pointer transition hover:bg-red-500 hover:text-white w-20 flex justify-center border p-1 border-[red]"
              onClick={() => handelDelete(record)}
            >
              {loading ? <LoadingOutlined /> : "Delete"}
            </div>
          </div>
        ),
      },
    ],
    [handelDelete, loading, router]
  );

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="h-[100vh] w-[100%] ">
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

export default TableProduct;
