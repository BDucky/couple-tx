"use client";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Cart from "../../module/Home/Cart";
import LayoutWebsite from "@/components/layout/LayoutWebsite";

const Carts = () => {
  return (
    <LayoutWebsite>
      <Cart />
    </LayoutWebsite>
  );
};

export default Carts;
