import Sidebar from "@/components/admin/Sidebar";
import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex bg-[#f7f7f7]">
      <Sidebar />

      <div className="w-[80%] relative left-[20%]">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
