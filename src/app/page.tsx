"use client";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <main className={menuIsActive ? `h-[100vh]` : `h-[200vh]`}>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      <Menu menuIsActive={menuIsActive} />
      <div className="">
        <Image
          src="/main.jpg"
          fill
          className="w-[100%] object-cover -z-10"
          alt="Nông dân cày ruộng"
        ></Image>
      </div>
    </main>
  );
}
