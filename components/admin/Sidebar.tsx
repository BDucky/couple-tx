/* eslint-disable react/jsx-key */
"use client";
import React, { useMemo } from "react";
import { AiFillAppstore } from "react-icons/ai";
import { HiShoppingCart, HiUser } from "react-icons/hi";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const items = useMemo(
    () => [
      {
        icon: AiFillAppstore,
        label: "Products",
        onClick: () => {},
        selected: pathname.includes("/products"),
      },
      {
        icon: HiShoppingCart,
        label: "Orders",
        href: "/admin/addProduct",
        onClick: undefined,
        selected: pathname === "/admin/orders",
      },
      {
        icon: HiUser,
        label: "Customers",
        href: `/abc`,
        onClick: undefined,
        selected: pathname === "/abc",
      },
    ],
    [pathname]
  );
  return (
    <div className=" fixed left-0 top-0 p-5 w-[20%] bg-[#fff] h-[100vh] shadow-lg flex flex-col gap-2">
      {items.map((item) => (
        <SidebarItem
          key={item.label}
          label={item.label}
          href={item.href}
          icon={item.icon}
          onClick={item.onClick}
          selected={item.selected}
        />
      ))}
    </div>
  );
};

export default Sidebar;
