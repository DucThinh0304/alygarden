"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const anim = {
  initial: {
    height: 0,
  },
  open: {
    height: "100vh",
  },
  exit: {
    height: 0,
  },
};

const animText = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 100,
  },
  exit: {
    opacity: 0,
  },
};

type Props = {
  menuIsActive: boolean;
};

const Menu = ({ menuIsActive }: Props) => {
  return (
    <motion.div
      className="w-[100vw - 43px] bg-yellow-50 h-[100vh] z-20"
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}
    >
      <motion.div
        initial="initial"
        variants={animText}
        animate={menuIsActive ? "open" : "closed"}
      >
        asdasdasdasdsad
      </motion.div>
    </motion.div>
  );
};

export default Menu;
