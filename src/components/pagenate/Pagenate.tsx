import Link from "next/link";
import React from "react";

type Props = {
  numberOfPage: number;
  cat: string;
  page: number;
};
const Pagenate = ({ numberOfPage, cat, page }: Props) => {
  const pageNumbers = () => {
    return Array.from({ length: numberOfPage }, (_, index) => index + 1);
  };
  return (
    <div>
      {pageNumbers().map((number) => (
        <Link href={`/products?cat=${cat}&page=${number}`} key={number}>
          <button
            key={number}
            className="border-2 border-black px-5 py-2 hover:bg-black hover:text-white rounded-md disabled:bg-black disabled:text-white"
            disabled={+page === number}
          >
            {number}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Pagenate;
