"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Menu from "@/components/menu";
import { AnimatePresence } from "framer-motion";
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
    <main className="h-[200vh] ">
      <div className="absolute z-10">
        <Image
          src="/close-up-box-with-vegetables-hands-mature-man.png"
          width={1920}
          height={1080}
          className="w-[100%] object-cover"
          alt="Nông dân cày ruộng"
        />
      </div>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      <AnimatePresence>
        {menuIsActive && <Menu setMenuIsActive={setMenuIsActive} />}
      </AnimatePresence>
    </main>
  );
}
