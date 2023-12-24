"use client";
import { ProductType } from "@/app/types/types";
import React from "react";
import ProductCard from "../ProductCard";
import Link from "next/link";
import { CircularProgress } from "@nextui-org/react";

type Props = {
  products: ProductType[];
};

const Feature = ({ products }: Props) => {
  return (
    <div className="bg-white py-5 px-[100px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4 justify-center items-center">
      {products ? (
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
        ))
      ) : (
        <div className="w-screen h-screen flex items-center justify-center">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Feature;
