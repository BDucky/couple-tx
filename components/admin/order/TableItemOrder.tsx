import { Table } from "antd";
import axios from "axios";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";

interface TableItemOrderProps {
  id: number;
}

const TableItemOrder: React.FC<TableItemOrderProps> = ({ id }) => {
  const [data, setData] = useState<any>();

  const columns = useMemo(
    () => [
      {
        title: "Image",
        key: "image",
        dataIndex: "image",
        width: 100,
        render: (image: string) => (
          <Image width={50} height={50} src={image} alt="Product" />
        ),
      },
      {
        title: "Product Variant Name",
        key: "productVariantName",
        dataIndex: "productVariantName",
        width: 500,
      },
      {
        title: "Quantity",
        key: "quantity",
        dataIndex: "quantity",
      },
      {
        title: "Price",
        key: "price",
        dataIndex: "price",
      },
      {
        title: "Total Price",
        key: "total_price",
        dataIndex: "total_price",
      },
    ],
    []
  );

  const getData = useCallback(async () => {
    try {
      const response = await axios.get(`/api/order/findById?id=${id}`);
      const orderItem = response.data.order_item;
      const formattedData = orderItem.map((item: any) => ({
        ...item,
        productVariantName: item.product_variant.product_variant_name,
        image: item.product_variant.images[0].imageUrl,
      }));
      setData(formattedData);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default TableItemOrder;
