"use client";

import { motion } from "framer-motion";
import AnimatedImage from "./components/animated-image";
import flowerImage from "../../public/flower.png";
import starImage from "../../public/star.png";
import { useRef, useState } from "react";

export default function Home() {
  const constraintsRef = useRef(null);
  const [size, setSize] = useState(24);

  const text =
    "서비스플랫폼 파트너오피스 CRM WMS 서비스플랫폼 파트너오피스 CRM WMS 서비스플랫폼 파트너오피스 CRM WMS 서비스플랫폼 파트너오피스 CRM WMS";

  const animations = {
    rotate: { rotate: [0, 360] },
    move: { x: [0, 100, -100, 0], y: [0, -100, 100, 0] },
  };

  const handleClick = () => {
    setSize(100);
  };

  return (
    <motion.div className="pt-[40px] h-full flex flex-col" ref={constraintsRef}>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex gap-x-[4vw] md:flex-row flex-col">
          <h1 className="text-[12vw] text-nowrap line leading-[14vw] font-bold">
            WE ARE
            <br />
            SERVICE <br />
            PLATFORM.
          </h1>
          <div className="text-[1.2vw] flex flex-col justify-end w-[220px] gap-y-6">
            <p>
              --+-+-+-+ +-+-- +-+-++-+-- +--+-+-+ +-++ -+-+-+-
              ++-+-+-+---+-+-+-+ +-+-- +-+-++-+-- +--+-+-+ +-++ -+-+-+-
              ++-+-+-+- --+-+
            </p>
            <p>
              +--+-+++- -+-+- +--+- +-+--- +-+-+-+ +-+-+ +-+--++-+-+--+-+-+
              -+-+-+ +-++ +-+--+
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap w-full bg-black text-white ">
        <motion.div
          className="flex gap-x-2 h-[40px] items-center "
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ display: "flex" }}
        >
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </motion.div>
      </div>
      <div className="overflow-hidden whitespace-nowrap w-full bg-black text-white gradient-border">
        <motion.div
          className="flex gap-x-2 h-[40px] items-center "
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ display: "flex" }}
        >
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </motion.div>
      </div>
      <div className="overflow-hidden whitespace-nowrap w-full bg-black text-white">
        <motion.div
          className="flex gap-x-2 h-[40px] items-center "
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          style={{ display: "flex" }}
        >
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </motion.div>
      </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <>
          <AnimatedImage
            src={"/flower.png"}
            alt="Flower"
            constraintsRef={constraintsRef}
          />
          <AnimatedImage
            src={"/star.png"}
            alt="Star"
            constraintsRef={constraintsRef}
          />
        </>
      ))}
      <AnimatedImage
        src={"/cow.png"}
        alt="Star"
        constraintsRef={constraintsRef}
        width={size}
        height={size}
        onClick={handleClick}
      />
    </motion.div>
  );
}
