"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Table } from "antd";
import axios from "axios";

interface TableSubCategoryProps {
  reload: boolean;
  id: number;
}

const TableSubCategory: React.FC<TableSubCategoryProps> = ({ reload, id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(true);

  const getData = useCallback(async () => {
    setLoading(true);
    await axios
      .get(`/api/category?key=id&value=${id}`)
      .then((response) => {
        setData(response.data.subcategories);
        // console.log(response.data.subcategories);
      })
      .catch((error) => {
        console.log(error);
      });

    setLoading(false);
  }, [id]);

  const handleDelete = useCallback(
    async (id: number) => {
      await axios
        .post("/api/category/subCategory/delete", { sub_category_id: id })
        .then(() => {
          alert("Deleted");
        })
        .catch((error) => {
          alert("Error: " + error);
        });
      getData();
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
            <div
              onClick={() => {
                handleDelete(record.id);
              }}
              className=" cursor-pointer transition hover:bg-red-500 hover:text-white w-20 flex justify-center border p-1 border-[red]"
            >
              {loading ? <LoadingOutlined /> : "Delete"}
            </div>
          </div>
        ),
      },
    ],
    [loading, handleDelete, getData]
  );

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
