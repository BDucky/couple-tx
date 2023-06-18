"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Table } from "antd";
import axios from "axios";

interface TableSubCategoryProps {
  reload: boolean;
}

const TableSubCategory: React.FC<TableSubCategoryProps> = ({ reload }) => {
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
        title: "Sub category name",
        key: "name",
        dataIndex: "name",
        width: 500,
      },

      {
        title: "Action",
        key: "action",
        render: (_: any, record: any) => (
          <div className=" cursor-pointer flex gap-3">
            <div className=" cursor-pointer transition hover:bg-red-500 hover:text-white w-20 flex justify-center border p-1 border-[red]">
              {loading ? <LoadingOutlined /> : "Delete"}
            </div>
          </div>
        ),
      },
    ],
    [loading]
  );

  const getData = useCallback(async () => {
    setLoading(true);
    await axios
      .get("/api/category?key=sub_category")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [getData, reload]);
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

export default TableSubCategory;
