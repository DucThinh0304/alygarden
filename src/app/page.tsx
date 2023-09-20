import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[200vh]">
      <Image
        src="/main.jpg"
        fill
        className="w-[100%] object-cover"
        alt="Nông dân cày ruộng"
      ></Image>
    </main>
  );
}
