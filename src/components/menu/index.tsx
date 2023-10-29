"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const anim = {
  hidden: {
    y: "-100vh",
    transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
  },
  visible: {
    y: "0",
    transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    y: "-100vh",
    transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
  },
};

type MenuItem = {
  title: string;
  href: string;
};

const AllUserMenu: MenuItem[] = [
  { title: "TRANG CHỦ", href: "./" },
  { title: "SẢN PHẨM", href: "./products" },
  { title: "TÀI KHOẢN", href: "./my-account" },
  { title: "GIỎ HÀNG", href: "./cart" },
  { title: "LIÊN HỆ", href: "./contact" },
];

type MenuType = {
  setMenuIsActive: (value: boolean) => void;
};

const Menu = ({ setMenuIsActive }: MenuType) => {
  //RESPONSIVE
  const [isDesktop, setIsDesktop] = useState(true);
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <motion.div
      className="w-full bg-white h-[100vh] z-20 fixed flex items-center"
      variants={anim}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="menu"
    >
      <div className="ml-[150px]">
        {AllUserMenu.map((menu) => (
          <div className="my-5" key={menu.title}>
            <Link
              className="font-bold text-4xl"
              href={menu.href}
              onClick={() => setMenuIsActive(false)}
            >
              {menu.title}
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Menu;
