"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { IconType } from "react-icons";
interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  selected?: boolean;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  selected,
}) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/").filter((p) => p != "");

  const handleClick = useCallback(() => {
    if (onClick) {
      setShow(() => !show);
      return onClick();
    }
    if (href) {
      return router.push(href);
    }
  }, [onClick, show, router, href]);

  const handleLink = useCallback(
    (href: string) => {
      if (href) {
        return router.push(href);
      }
    },
    [router]
  );

  return (
    <div onClick={handleClick}>
      <div
        className={` p-3 flex  items-center text-black cursor-pointer hover:bg-[#e8effd] ${
          selected && " bg-cyan-100"
        } `}
      >
        <Icon size={28} color={`${selected ? "#4369c9" : "#888888"}`} />
        <p
          className={`ml-2 font-bold ${
            selected ? "text-[#4369c9]" : "text-[#888888]"
          }`}
        >
          {label}
        </p>
      </div>
      {show && (
        <div className="text-[#888888] font-semibold">
          <div
            onClick={() => handleLink("/admin/products")}
            className={` p-2 pl-10 mt-2 ${
              path[path.length - 1] === "products" &&
              "bg-cyan-100 text-[#4369c9]"
            } cursor-pointer`}
          >
            Product list
          </div>
          <div
            className={` p-2 pl-10 mt-2 ${
              path[path.length - 1] === "addProduct" &&
              "bg-cyan-100 text-[#4369c9]"
            } cursor-pointer`}
            onClick={() => handleLink("/admin/products/addProduct")}
          >
            Add Product
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
