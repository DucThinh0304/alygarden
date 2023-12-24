"use client";
import { ProductsType } from "@/app/types/types";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/header";
import Menu from "@/components/menu";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import Pagenate from "@/components/pagenate/Pagenate";

const ProductPage = async () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [products, setProducts] = useState<ProductsType>();
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat") || "";
  const page = searchParams.get("page") || "1";
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/products?cat=${cat}&page=${page}`,
          {
            cache: "no-store",
          }
        );
        const data = await res.json();
        setProducts(data.products);
        setNumberOfPage(data.totalPages);
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
          {products &&
            products.map((product) => (
              <Link href={`products/${product.id}`} key={product.id}>
                <ProductCard
                  key={product.id}
                  description={product.desc}
                  image={product.img ? `./${product.img}` : "a"}
                  name={product.title}
                  price={product.price}
                  seller="Đức Thịnh"
                  rating={5}
                  href=""
                />
              </Link>
            ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-5 p-10">
        <Link href={`/products`}>
          <button
            className="border-2 px-5 py-2 hover:bg-black hover:text-white rounded-md  disabled:bg-[#ccc] disabled:text-white"
            disabled={+page === 1}
          >
            <FaAngleDoubleLeft />
          </button>
        </Link>
        <Link href={`/products?cat=${cat}&page=${+page - 1}`}>
          <button
            className="border-2 px-5 py-2 hover:bg-black hover:text-white rounded-md disabled:bg-[#ccc] disabled:text-white"
            disabled={+page === 1}
          >
            <FaAngleLeft />
          </button>
        </Link>
        <Pagenate cat={cat} page={+page} numberOfPage={numberOfPage}></Pagenate>
        <button
          className="border-2 px-5 py-2 hover:bg-black hover:text-white rounded-md  disabled:bg-[#ccc] disabled:text-white"
          disabled={+page === numberOfPage}
        >
          <FaAngleRight />
        </button>
        <button
          className="border-2  px-5 py-2 hover:bg-black hover:text-white rounded-md  disabled:bg-[#ccc] disabled:text-white"
          disabled={+page === numberOfPage}
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
