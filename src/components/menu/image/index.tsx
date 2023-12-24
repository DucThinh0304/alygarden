import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

type ImageMenuProp = {
  src: string;
  isActive: boolean;
};

const ImageMenu = ({ src, isActive }: ImageMenuProp) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className="block w-[500px] h-[450px] relative"
    >
      <Image
        src={src}
        alt="image"
        width={500}
        height={400}
        style={{ objectFit: "cover", width: "500px", height: "400px" }}
      />
    </motion.div>
  );
};

export default ImageMenu;
