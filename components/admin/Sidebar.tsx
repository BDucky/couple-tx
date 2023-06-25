/* eslint-disable react/jsx-key */
"use client";
import React, { useMemo } from "react";
import { AiFillAppstore } from "react-icons/ai";
import { HiShoppingCart, HiUser } from "react-icons/hi";
import { MdCategory } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
        href: "/admin/order",
        onClick: undefined,
        selected: pathname.includes("/admin/order"),
      },
      {
        icon: HiUser,
        label: "Customers",
        href: `/admin/customers`,
        onClick: undefined,
        selected: pathname.includes("/customers"),
      },
      {
        icon: MdCategory,
        label: "Categories",
        href: `/admin/category`,
        onClick: undefined,
        selected: pathname === "/admin/category",
      },
    ],
    [pathname]
  );
  return (
    <div className=" fixed left-0 top-0 p-5 w-[20%] bg-[#4167d5] h-[100vh] shadow-lg flex flex-col gap-2">
      <div className="mb-5 text-white text-3xl font-bold flex justify-center">
        ADMIN
      </div>
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
