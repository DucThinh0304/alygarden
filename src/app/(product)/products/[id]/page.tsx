"use client";
import { ProductType } from "@/app/types/types";
import DeleteButton from "@/components/DeleteButton";
import Price from "@/components/Price";
import Header from "@/components/header";
import Menu from "@/components/menu";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = async () => {
  const [product, setProduct] = useState<ProductType>();
  const [menuIsActive, setMenuIsActive] = useState(false);
  const path = usePathname();
  const id = path.split("/").pop();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`, {
          cache: "no-store",
        });
        const data = await res.json();

        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, []);

  useEffect(() => {
    if (menuIsActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuIsActive]);
  return (
    <div>
      <Header
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
        title={product ? product.title : `Loading...`}
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
        </div>
      </div>
      {product && (
        <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-black md:flex-row md:gap-8 md:items-center relative">
          {product.img && (
            <div className="relative w-full h-1/2 md:h-[70%]">
              <Image
                src={`/${product.img}`}
                alt=""
                className="object-contain"
                fill
              />
            </div>
          )}
          <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
            <h1 className="text-3xl font-bold uppercase">
              <span>{product.title}</span>
              <DeleteButton id={product.id} />
            </h1>
            <p>{product.desc}</p>
            <Price product={product} />
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
