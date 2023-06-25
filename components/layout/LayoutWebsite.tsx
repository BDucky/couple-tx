import React from "react";
import Header from "../user/header/page";
import Footer from "../user/footer/page";
interface LayouWebsitetProps {
  children: React.ReactNode;
}

const LayoutWebsite: React.FC<LayouWebsitetProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWebsite;
