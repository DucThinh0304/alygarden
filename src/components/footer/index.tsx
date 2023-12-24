"use client";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaSnapchatSquare, FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t py-8 snap-proximity">
      <div className="w-full">
        <div className="flex">
          <div className="w-full">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/alygarden-icon.svg"
                width={200}
                height={200}
                alt="moon lamp"
                className="mt-2"
              />

              <ul className="flex justify-center mt-8 gap-3">
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-black hover:text-white hover:bg-[#8b9dc3] transition-all">
                    <AiFillFacebook size={25} />
                  </div>
                </li>
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-black hover:text-white hover:bg-[#ff6b90] transition-all">
                    <AiFillInstagram size={25} />
                  </div>
                </li>
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-black hover:text-white hover:bg-[#8b9dc3] transition-all">
                    <AiFillTwitterSquare size={25} />
                  </div>
                </li>
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-black hover:text-white hover:bg-[#8b9dc3] transition-all">
                    <FaPinterestSquare size={25} />
                  </div>
                </li>
                <li>
                  <div className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-black hover:text-white hover:bg-[#8b9dc3] transition-all">
                    <FaSnapchatSquare size={25} />
                  </div>
                </li>
              </ul>
              <p className=" mt-8">© 2023 AlyGarden by Đức Thịnh</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
