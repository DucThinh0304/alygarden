"use client";
import Header from "@/components/header";
import Menu from "@/components/menu";
import { AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MyAccountPage = () => {
  //NAVIGATION
  const { status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/login");
  }
  //MENU
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
    <div className="h-fit">
      <Header
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
        title="TÀI KHOẢN"
      />
      <AnimatePresence>
        {menuIsActive && <Menu setMenuIsActive={setMenuIsActive} />}
      </AnimatePresence>
    </div>
  );
};

export default MyAccountPage;
