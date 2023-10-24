"use client";
import FAQComponent from "@/components/FAQ";
import ValueProposition from "@/components/ValueProposition";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Menu from "@/components/menu";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
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
    <main className="h-fit">
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      <AnimatePresence>
        {menuIsActive && <Menu setMenuIsActive={setMenuIsActive} />}
      </AnimatePresence>
      <div className="z-10 flex flex-col relative">
        <div className="relative h-[100vh]">
          <Image
            src="/nong-san-1.jpg"
            fill
            className="absolute"
            alt="Nông sản trên tay nông dân"
          />
        </div>
        <div className="flex items-center text-center font-semibold text-4xl flex-wrap bg-white py-10 px-[20%]  justify-center ">
          Cách dễ dàng nhất để người mua và người bán trao đổi hàng nông sản
          trực tuyến.
        </div>
        <ValueProposition />
        <FAQComponent />
      </div>
    </main>
  );
}
