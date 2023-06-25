import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { Table } from "antd";

const TableUser = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(true);
  const [list, setList] = useState<any>();

  const getList = useCallback(async () => {
    setLoading(true);
    await axios.get("/api/user/find").then((response) => {
      setList(response.data);
    });
    setLoading(false);
  }, []);

  const handleDelete = async (data: any) => {
    setLoadingDelete(true);
    await axios.post("/api/user/delete", { user_id: data }).then(() => {
      window.location.reload();
    });
    setLoadingDelete(false);
  };

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
        title: "Action",
        key: "action",
        render: (_: any, record: any) => (
          <div className=" cursor-pointer flex gap-3">
            <div
              onClick={() =>
                router.push(`/admin/customers/editUser/${record.id}`)
              }
              className=" w-20 flex transition hover:bg-blue-500 hover:text-white justify-center border p-1 border-[blue]"
            >
              Detail
            </div>
            <div
              onClick={() => handleDelete(record.id)}
              className=" cursor-pointer transition hover:bg-red-500 hover:text-white w-20 flex justify-center border p-1 border-[red]"
            >
              {loadingDelete ? <LoadingOutlined /> : <p>Delete</p>}
            </div>
          </div>
        ),
      },
    ],
    [router, loadingDelete]
  );

  useEffect(() => {
    getList();
  }, [getList, loadingDelete]);
  return (
    <div className="h-[100vh] w-[100%] bg-[#fff] p-3 ">
      {loading ? (
        <div className="flex items-center justify-center w-[100%] h-[100%]">
          <LoadingOutlined style={{ fontSize: 50 }} />
        </div>
      ) : (
        <Table columns={columns} dataSource={list} pagination={false} />
      )}
    </div>
  );
};

export default TableUser;
