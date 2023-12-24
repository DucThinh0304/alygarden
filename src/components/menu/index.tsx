"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import {
  FaHome,
  FaShoppingBag,
  FaUser,
  FaShoppingCart,
  FaPhone,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { menuItem } from "./anim";
import Image from "next/image";
import ImageMenu from "./image";

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
  index: number;
  title: string;
  href: string;
  icon: React.ReactNode;
  src: string;
};

const AllUserMenu: MenuItem[] = [
  {
    index: 1,
    title: "TRANG CHỦ",
    href: "./",
    icon: <FaHome className="scale-110 origin-center" />,
    src: "/nong-san-1.jpg",
  },
  {
    index: 2,
    title: "SẢN PHẨM",
    href: "./products",
    icon: <FaShoppingBag className="scale-110 origin-center" />,
    src: "/rau-qua.jpg",
  },
  {
    index: 3,
    title: "TÀI KHOẢN",
    href: "./my-account",
    icon: <FaUser className="scale-110 origin-center" />,
    src: "/account.png",
  },
  {
    index: 4,
    title: "GIỎ HÀNG",
    href: "./orders",
    icon: <FaShoppingCart className="scale-110 origin-center" />,
    src: "/cart.jpg",
  },
  {
    index: 5,
    title: "LIÊN HỆ",
    href: "./contact",
    icon: <FaPhone className="scale-110 origin-center" />,
    src: "/contact.jpg",
  },
];

type MenuType = {
  setMenuIsActive: (value: boolean) => void;
};

const Menu = ({ setMenuIsActive }: MenuType) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
  return (
    <motion.div
      className="w-full bg-white h-[100vh] z-20 fixed flex items-center justify-around"
      variants={anim}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="menu"
    >
      <div className="md:ml-[150px]">
        {AllUserMenu.map((menu, index) => (
          <motion.div
            className="my-7 origin-left text-[rgba(50,50,50)]"
            key={menu.index}
            variants={menuItem}
            initial="init"
            whileHover="hover"
            exit="exit"
            onMouseOver={() => {
              setSelectedLink({ isActive: true, index });
            }}
            onMouseLeave={() => {
              setSelectedLink({ isActive: false, index });
            }}
          >
            <Link href={menu.href} onClick={() => setMenuIsActive(false)}>
              <div className="font-bold text-4xl flex w-fit">
                {menu.icon} <span className="pl-5">{menu.title}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="hidden md:block">
        <ImageMenu
          src={AllUserMenu[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
};

export default Menu;
