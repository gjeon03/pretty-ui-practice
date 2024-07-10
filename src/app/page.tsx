"use client";

import { motion } from "framer-motion";

export default function Home() {
  const text =
    "Main Banner - This is scrolling text - Main Banner - This is scrolling text - Main Banner - This is scrolling text";

  return (
    <div className="pt-[40px]">
      <div className="h-[50vw] flex justify-center items-center">
        <div className="flex gap-x-[4vw] ">
          <h1 className="text-[16vw] text-nowrap line leading-[14vw] font-bold">
            WE ARE
            <br />
            LIRIX.
          </h1>
          <div className="text-[1.2vw] flex flex-col justify-end w-[220px] gap-y-6">
            <p>
              We partner with companies around the world to promote change &
              growth through leadership & team development.
            </p>
            <p>
              We do so with up-to-date smart methods that ensure a holistic and
              personal approach.
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap w-full bg-black text-white">
        <motion.div
          className="flex gap-x-5 h-[40px] items-center "
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
      <div className="h-[2000px]">test</div>
    </div>
  );
}
