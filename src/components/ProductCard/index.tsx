import { Avatar, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineStar } from "react-icons/ai";

type Prop = {
  image: string;
  name: string;
  price: number;
  seller: string;
  rating: number;
  href: string;
};

const ProductCard = ({ image, name, price, seller, rating, href }: Prop) => {
  return (
    <motion.div>
      <Card shadow="sm" className="w-fit" radius="sm">
        <CardBody className="overflow-visible p-4 relative">
          <Link href={href} className="cursor-pointer">
            <Image
              shadow="sm"
              radius="lg"
              className="object-cover w-full h-full z-0"
              src={`.${image}`}
            />
            <div className="bg-black text-white flex flex-row absolute right-6 top-6 rounded-md gap-1 justify-center items-center text-lg pl-1 pr-2">
              <p>
                <AiOutlineStar size={20} />
              </p>
              {rating}
            </div>
          </Link>
        </CardBody>
        <CardFooter className="text-large flex-col">
          <div className="flex justify-between w-[100%] transition-all mb-3">
            <b className="hover:text-[#5142FC] hover:cursor-pointer">{name}</b>
            <p className="text-default-500">{price} đ</p>
          </div>
          <div className="flex justify-between items-center w-[100%]">
            <div className="flex p-2">
              <Avatar name={seller} isBordered radius="sm" size="lg" />
              <div className="ml-3">
                <div className="text-sm">Người cung cấp</div>
                <b>{seller}</b>
              </div>
            </div>
            <p>{seller}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
