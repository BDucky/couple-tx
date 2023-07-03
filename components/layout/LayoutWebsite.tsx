import React from "react";
import Header from "../user/header/page";
import Footer from "../user/footer/page";
import Cart from "../Cart";
interface LayouWebsitetProps {
  children: React.ReactNode;
}

const LayoutWebsite: React.FC<LayouWebsitetProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Cart />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWebsite;
