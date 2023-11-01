"use client";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/header";
import Menu from "@/components/menu";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
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
        title="SẢN PHẨM"
      />
      <AnimatePresence>
        {menuIsActive && <Menu setMenuIsActive={setMenuIsActive} />}
      </AnimatePresence>
      <div className="flex flex-col w-full">
        <div className="h-[30vh] relative flex justify-center items-center">
          <Image
            className="brightness-50"
            fill
            src="/rau-qua.jpg"
            alt="Hình ảnh rau quả"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="z-10 text-white font-bold text-3xl sm:text-[rgba(0,0,0,0)]">
            SẢN PHẨM
          </div>
        </div>
        <div className="bg-white py-5 px-[100px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4 justify-center items-center">
          <ProductCard
            image="/1100440.jpg"
            name="Táo"
            price={990000}
            seller="Đức Thịnh"
            rating={5}
            href="./"
          />
          <ProductCard
            image="/1100440.jpg"
            name="Táo"
            price={990000}
            seller="Đức Thịnh"
            rating={5}
            href="./"
          />
          <ProductCard
            image="/1100440.jpg"
            name="Táo"
            price={990000}
            seller="Đức Thịnh"
            rating={5}
            href="./"
          />
          <ProductCard
            image="/1100440.jpg"
            name="Táo"
            price={990000}
            seller="Đức Thịnh"
            rating={5}
            href="./"
          />
          <ProductCard
            image="/1100440.jpg"
            name="Táo"
            price={990000}
            seller="Đức Thịnh"
            rating={5}
            href="./"
          />
          <ProductCard
            image="/1100440.jpg"
            name="Táo"
            price={990000}
            seller="Đức Thịnh"
            rating={5}
            href="./"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
