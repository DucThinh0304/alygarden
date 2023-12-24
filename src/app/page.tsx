"use client";
import FAQComponent from "@/components/FAQ";
import ProductCard from "@/components/ProductCard";
import ValueProposition from "@/components/ValueProposition";
import Header from "@/components/header";
import Menu from "@/components/menu";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductType } from "./types/types";
import { CircularProgress } from "@nextui-org/react";
import Feature from "@/components/Feature";

export default function HomePage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/products?cat=isFeatured")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  const [menuIsActive, setMenuIsActive] = useState(false);
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
    <main className="h-fit">
      <Header
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
        title="ALYGARDEN"
      />
      <AnimatePresence>
        {menuIsActive && <Menu setMenuIsActive={setMenuIsActive} />}
      </AnimatePresence>
      <section className="z-10 flex flex-col relative">
        <div className="relative h-[100vh]">
          <Image
            src="/nong-san.png"
            fill
            alt="Nông sản trên tay nông dân"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <section className="flex items-center text-center font-semibold text-4xl flex-wrap bg-white py-10 px-[20%] justify-center">
          Cách dễ dàng nhất để người mua và người bán trao đổi hàng nông sản
          trực tuyến.
        </section>
        <section>
          <div className="flex items-center text-center font-semibold text-4xl flex-wrap bg-white py-10 px-[20%] justify-center uppercase">
            <Feature products={products} />
          </div>
        </section>
        <section>
          <ValueProposition />
        </section>
        <section>
          <FAQComponent />
        </section>
      </section>
    </main>
  );
}
