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
  description: string;
};

const toVietnameseCurrency = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
};

const ProductCard = ({
  image,
  name,
  price,
  seller,
  rating,
  href,
  description,
}: Prop) => {
  return (
    <div>
      <Card shadow="sm" className="w-full h-full" radius="sm">
        <CardBody className="overflow-visible p-4 relative">
          <div className="cursor-pointer">
            <div className="w-full h-full">
              <Image
                shadow="sm"
                radius="lg"
                className="object-cover w-full h-auto min-h-[50vh] z-0"
                src={`.${image}`}
              />
            </div>
            <div className="bg-black text-white flex flex-row absolute right-6 top-6 rounded-md gap-1 justify-center items-center text-lg pl-1 pr-2">
              <p>
                <AiOutlineStar size={20} />
              </p>
              {rating}
            </div>
          </div>
        </CardBody>
        <CardFooter className="text-large flex-col">
          <div className="flex justify-between w-[100%] transition-all mb-3">
            <b className="hover:text-[#5142FC] hover:cursor-pointer">
              {name} - <span className="font-normal">{description}</span>
            </b>
            <p className="text-default-500">{toVietnameseCurrency(price)}</p>
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
    </div>
  );
};

export default ProductCard;
