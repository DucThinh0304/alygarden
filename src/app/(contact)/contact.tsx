import Header from "@/components/header";
import Menu from "@/components/menu";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const contact = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <div className="h-fit">
      <Header
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
        title="SẢN PHẨM"
      />
      <AnimatePresence>
        {menuIsActive && <Menu setMenuIsActive={setMenuIsActive} />}
      </AnimatePresence>
        
    </div>
  );
};

export default contact;
