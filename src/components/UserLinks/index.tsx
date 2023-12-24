"use client";
import React from "react";
import { MotionValue, motion } from "framer-motion";
import { buttonLogin, buttonLoginBorder, buttonLogoutBorder } from "./anim";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

type UserLinkType = {
  buttonColor: MotionValue<string>;
};

const UserLinks = ({ buttonColor }: UserLinkType) => {
  const { status } = useSession();
  return (
    <motion.div
      className="flex items-center cursor-pointer"
      variants={buttonLogin}
      whileHover="hoverButton"
    >
      {status === "authenticated" ? (
        <div onClick={() => signOut()}>
          <motion.div
            className="relative inline-flex items-center"
            variants={buttonLogin}
            whileHover="hoverButton"
          >
            <motion.span
              className="w-[100px] h-[40px] rounded-md border-[1px] sm:w-[120px] sm:h-[50px]"
              variants={buttonLogoutBorder}
              style={{ borderColor: buttonColor }}
            ></motion.span>
            <motion.span
              className="absolute left-[9px] sm:left-[14px] font-medium text-sm sm:text-medium"
              style={{ color: buttonColor }}
            >
              ĐĂNG XUẤT
            </motion.span>
          </motion.div>
        </div>
      ) : (
        <Link href="./login" className="inline-flex">
          <motion.div
            className="relative inline-flex items-center"
            variants={buttonLogin}
            whileHover="hoverButton"
          >
            <motion.span
              className="w-[100px] h-[40px] rounded-md border-[1px] sm:w-[120px] sm:h-[50px]"
              variants={buttonLoginBorder}
              style={{ borderColor: buttonColor }}
            ></motion.span>
            <motion.span
              className="absolute left-[9px] sm:left-[14px] font-medium text-sm sm:text-medium"
              style={{ color: buttonColor }}
            >
              ĐĂNG NHẬP
            </motion.span>
          </motion.div>
        </Link>
      )}
    </motion.div>
  );
};

export default UserLinks;
