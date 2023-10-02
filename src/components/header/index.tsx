"use client";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useCycle,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  buttonVariant,
  spanVariantBefore,
  spanVariantAfter,
  spanVariantBurger,
  spanVariantCross,
  spanText,
  translate,
} from "./anim";
import "@radix-ui/themes/styles.css";
const Header = () => {
  // HOOK
  const [isToggled, toggle] = useCycle(false, true);
  const { scrollYProgress } = useScroll();

  const headerProgress = useTransform(
    scrollYProgress,
    [0, 0.29, 0.3],
    [0, 0, 1]
  );
  const smoothHeaderProgress = useSpring(headerProgress, { restSpeed: 1 });
  const headerPadding = useTransform(
    smoothHeaderProgress,
    [0, 1],
    ["0px 20px", "20px 20px"]
  );
  const navBackdrop = useTransform(
    smoothHeaderProgress,
    [0, 1],
    ["blur(0px)", "blur(16px)"]
  );
  const navBackgroundColor = useTransform(
    smoothHeaderProgress,
    [0, 1],
    ["rgba(255,255,255,0.0)", "rgba(255,255,255,0.5)"]
  );
  const buttonColor = useTransform(
    smoothHeaderProgress,
    [0, 1],
    ["#fff", "#000"]
  );
  const buttonColorReverse = useTransform(
    smoothHeaderProgress,
    [0, 1],
    ["#000", "#fff"]
  );

  // FUNCTION
  const getChars = (word: string) => {
    let chars: any[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  //RENDER
  return (
    <motion.header
      className="w-[calc(100%)] fixed bottom-0 h-[110px] md:top-0"
      style={{ padding: headerPadding }}
    >
      <motion.nav
        className="flex flex-wrap items-center justify-between px-[0.625rem] py-0 bg-[rgba(255,255,255,0.0)] w-[100%] h-[100%] rounded-xl"
        style={{
          backdropFilter: navBackdrop,
          background: navBackgroundColor,
        }}
      >
        {/* BUTTON */}
        <motion.button
          variants={buttonVariant}
          whileHover="hover"
          initial="initial"
          animate="animate"
          className="w-[135.2px] items-center inline-flex relative"
          onClick={() => toggle()}
        >
          {/* CIRCLE */}
          <span className="inline-flex relative items-center w-[52px] h-[52px]">
            <motion.span
              className="absolute w-[50px] h-[50px] rounded-full"
              style={{ backgroundColor: buttonColor }}
              variants={spanVariantBefore}
            />
            {/*BURGER*/}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[27px] h-[7px] overflow-hidden">
              <motion.span
                className="top-[0px] h-[1px] w-[27px] bg-black relative block"
                variants={spanVariantBurger}
                custom={isToggled}
                animate={{
                  x: isToggled ? 29 : 0,
                  transition: { delay: 0.2, duration: 0.3, type: "easeOut" },
                }}
              >
                {""}
              </motion.span>
              <motion.span
                className="top-[5px] h-[1px] w-[27px] bg-black relative block"
                variants={spanVariantBurger}
                custom={isToggled}
                animate={{
                  x: isToggled ? 29 : 0,
                  transition: { duration: 0.3, type: "easeOut" },
                }}
              >
                {""}
              </motion.span>
            </span>
            {/*CROSS*/}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26px] h-[26px] rotate-45 overflow-hidden">
              <motion.span
                className="h-[1px] w-[26px] top-1/2 -translate-y-1/2 bg-black relative block "
                variants={spanVariantCross}
                initial={{ x: 29 }}
                animate={{
                  x: isToggled ? 0 : 29,
                  transition: { duration: 0.3, type: "easeOut" },
                }}
              >
                {""}
              </motion.span>
              <motion.span
                className="w-[1px] h-[26px] left-1/2 -translate-x-1/2 bg-black relative block"
                variants={spanVariantCross}
                initial={{ y: 29 }}
                animate={{
                  y: isToggled ? 0 : 29,
                  transition: { duration: 0.3, type: "easeOut", delay: 0.2 },
                }}
              >
                {""}
              </motion.span>
            </span>
            <motion.span
              className="absolute w-[54px] h-[54px] rounded-full border-[1px]"
              variants={spanVariantAfter}
              style={{ borderColor: buttonColor }}
            />
          </span>
          {/* TEXT */}
          <motion.span
            className="relative inline-flex flex-col h-5 overflow-hidden ml-4"
            style={{ color: buttonColor }}
            variants={spanText}
          >
            <motion.span
              className="font-medium text-[17px]"
              initial={{ y: 0 }}
              animate={{
                y: isToggled ? -28 : 0,
                transition: { duration: 0.2, type: "spring" },
              }}
            >
              Menu
            </motion.span>
            <motion.span
              className="font-medium text-[17px]"
              initial={{ y: 0 }}
              animate={{
                y: isToggled ? -28 : 0,
                transition: { duration: 0.2, type: "spring" },
              }}
            >
              Đóng
            </motion.span>
          </motion.span>
        </motion.button>
        {/* LOGO */}
        <Link href="/" className="items-center">
          <motion.div className="flex">
            <motion.div
              className="flex"
              variants={translate}
              initial="initialImage"
              animate="enterImage"
            >
              <Image
                src="./alygarden-icon.svg"
                height={70}
                width={70}
                alt="logo"
              />
            </motion.div>
            <motion.p
              className="self-center text-2xl font-semibold text-[32px] whitespace-nowrap md:flex hidden font-mono"
              style={{ color: "white" }}
            >
              {getChars("ALYGARDEN")}
            </motion.p>
          </motion.div>
        </Link>
        {/* CONTROL */}
        <Link href="/" className="flex">
          <motion.div className="relative inline-flex items-center">
            <motion.span className="w-[120px] h-[50px] rounded-md border-black border-[1px]"></motion.span>
            <motion.span className="absolute left-[14px] font-medium">
              {" "}
              ĐĂNG NHẬP
            </motion.span>
          </motion.div>
        </Link>
      </motion.nav>
    </motion.header>
  );
};
export default Header;