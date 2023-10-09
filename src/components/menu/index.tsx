"use client";
import React from "react";
import { motion } from "framer-motion";

const anim = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: "0",
  },
  exit: {
    height: "-100vh",
  },
};

type MenuType = {
  setMenuIsActive: (value: boolean) => void;
};

const Menu = ({ setMenuIsActive }: MenuType) => {
  return (
    <motion.div
      className="w-full bg-yellow-50 h-[100vh] z-30 fixed"
      variants={anim}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <button onClick={() => setMenuIsActive(false)}>aaaaa</button>
    </motion.div>
  );
};

export default Menu;
