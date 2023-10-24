"use client";
import Header from "@/components/header";
import Menu from "@/components/menu";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const index = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  useEffect(() => {
    if (menuIsActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Clean up function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuIsActive]);
  return (
    <div>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      <AnimatePresence>
        {menuIsActive && <Menu setMenuIsActive={setMenuIsActive} />}
      </AnimatePresence>
    </div>
  );
};

export default index;
