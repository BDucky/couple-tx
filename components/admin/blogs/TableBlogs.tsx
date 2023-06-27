"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Table } from "antd";
import axios from "axios";

interface TableBlogsProps {
  reload: boolean;
}
const TableBlogs: React.FC<TableBlogsProps> = ({ reload }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(true);

  const handleDelete = useCallback(async (id: number) => {
    await axios
      .post("/api/blog/delete", { blog_id: id })
      .then(() => {
        alert("Deleted");
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        title: "Id",
        key: "id",
        dataIndex: "id",
        width: 50,
      },
      {
        title: "Title",
        key: "title",
        dataIndex: "title",
        width: 500,
      },

      {
        title: "Action",
        key: "action",
        render: (_: any, record: any) => (
          <div className=" cursor-pointer flex gap-3">
            <div
              onClick={() => router.push(`/admin/blogs/edit/${record.id}`)}
              className=" w-20 flex transition hover:bg-blue-500 hover:text-white justify-center border p-1 border-[blue]"
            >
              Edit
            </div>
            <div
              onClick={() => router.push(`/admin/blogs/addPost/${record.id}`)}
              className=" w-20 flex transition hover:bg-green-500 hover:text-white justify-center border p-1 border-[green]"
            >
              Add post
            </div>
            <div
              onClick={() => handleDelete(record.id)}
              className=" cursor-pointer transition hover:bg-red-500 hover:text-white w-20 flex justify-center border p-1 border-[red]"
            >
              {loading ? <LoadingOutlined /> : "Delete"}
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
      .get("/api/blog/getList")
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
        <Table columns={columns} dataSource={data} pagination={false} />
      )}
    </div>
  );
};

export default TableBlogs;
