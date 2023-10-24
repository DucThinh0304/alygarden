"use client";
import React, { useRef } from "react";
import { FaUserTie } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { GiFarmer } from "react-icons/gi";

const contentBuyer = [
  {
    id: 1,
    title: "Hỗ trợ trực tiếp",
    text: "Hỗ trợ nông dân quy mô nhỏ và nhà sản xuất thực phẩm bằng cách mua sắm thông qua nền tảng thương mại của chúng tôi.",
    custom: "row-span-2  pr-12",
  },
  {
    id: 2,
    title: "Mọi nhu cầu",
    text: "Tiếp cận nhiều loại hàng hóa nông nghiệp trên một thị trường từ những người bán đã được kiểm duyệt",
    custom: "pr-4",
  },
  {
    id: 3,
    title: "Giá hợp lý",
    text: "Khám phá và mua nông sản và hàng hóa tươi sống trực tiếp từ người bán địa phương với giá hợp lý",
    custom: "pr-4",
  },
];

const contentSeller = [
  {
    id: 1,
    title: "Không qua trung gian",
    text: "Bán sản phẩm, vật nuôi hoặc cây trồng của bạn trực tiếp cho người mua mà không cần qua trung gian tốn kém",
  },
  {
    id: 2,
    title: "Tiếp cận trực tuyến",
    text: "Mở rộng phạm vi tiếp cận của bạn và tiếp cận mức giá minh bạch bằng cách niêm yết trên nền tảng giao dịch trực tuyến của chúng tôi.",
  },
  {
    id: 3,
    title: "Quản lý và vận chuyển",
    text: "Quản lý mọi thứ từ niêm yết đến vận chuyển và được thanh toán nhanh chóng bằng các công cụ dành cho người bán của bạn.",
  },
];

const arrow = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(29, 30, 82, 1)",
  },
};

const Arrow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.svg
      width="105"
      height="24"
      viewBox="0 0 105 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-[#1d1e52]"
    >
      <motion.path
        d="M105 12C105 7.58172 101.418 4 97 4C92.5817 4 89 7.58172 89 12C89 16.4183 92.5817 20 97 20C101.418 20 105 16.4183 105 12Z"
        variants={arrow}
        initial="hidden"
        whileInView="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51471C13.1924 2.92892 13.1924 1.97918 12.6066 1.39339C12.0208 0.807604 11.0711 0.807604 10.4853 1.39339L0.93934 10.9393Z"
        variants={arrow}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M97 10.5L2 10.5L2 13.5L97 13.5L97 10.5Z"
        variants={arrow}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  );
};

const ValueProposition = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit py-[100px] bg-[#F8F4EB] lg:flex-row">
      {/* BUYER */}
      <div className="flex justify-center items-center">
        <div className="w-[400px] h-[400px] grid grid-cols-2 gap-[4px] relative xl:w-[500px] xl:h-[500px] mb-20 lg:mb-0">
          {contentBuyer.map((content) => (
            <motion.div
              className={`bg-[#454698] text-left px-5 flex flex-col justify-center pl-4 ${content.custom}`}
              whileHover={{ scale: 1.02 }}
              key={content.id}
            >
              <div className="text-[#E7B1E4] font-bold xl:mb-3 xl:text-2xl text-lg mb-1">
                {content.title}
              </div>
              <div className="text-white text-xs xl:text-sm">
                {content.text}
              </div>
            </motion.div>
          ))}
          <div className="bg-[#FFBB5C] p-4 rounded-full absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <FaUserTie className="text-xl text-white" size={50} />
          </div>
        </div>
      </div>
      <div className="hidden flex-col items-center justify-center gap-5 lg:flex xl:scale-150 scale-95 w-[120px] xl:w-[170px] transition-all">
        <Arrow />
        <Arrow />
      </div>
      {/* SELLER */}
      <div className="flex items-center justify-center">
        <div className="w-[400px] h-[400px] grid grid-cols-2 gap-[4px] relative xl:w-[500px] xl:h-[500px] [&>*:nth-child(2)]:row-span-2 [&>*:nth-child(2)]:pl-12">
          {contentSeller.map((content) => (
            <motion.div
              className={`bg-[#FFBB5C] text-left px-5 flex flex-col justify-center pl-4`}
              whileHover={{ scale: 1.02 }}
              key={content.id}
            >
              <div className="text-[#454698] font-bold xl:mb-3 xl:text-2xl text-lg mb-1">
                {content.title}
              </div>
              <div className="text-[#1d1e52] text-xs xl:text-sm">
                {content.text}
              </div>
            </motion.div>
          ))}
          <div className="bg-[#454698] p-4 rounded-full absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] scale-90 xl:scale-100 transition-all">
            <GiFarmer className="text-white" size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
