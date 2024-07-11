"use client";

import { useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";

const menuClass = "flex text-[10px] gap-x-5 font-bold uppercase";
const itemClass = "cursor-pointer";

function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): T {
  let timeout: NodeJS.Timeout | null = null;
  return function (this: any, ...args: Parameters<T>) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  } as T;
}

function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): T {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  } as T;
}

export default function Navigation() {
  const controls = useAnimation();

  useEffect(() => {
    let isScrolling: NodeJS.Timeout;

    const handleScroll = throttle(() => {
      controls.start({ y: "-100%" });
    }, 200);

    const handleScrollEnd = debounce(() => {
      controls.start({ y: 0 });
    }, 200);

    document.body.addEventListener("scroll", handleScroll);
    document.body.addEventListener("scroll", handleScrollEnd);

    return () => {
      document.body.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("scroll", handleScrollEnd);
      if (isScrolling) {
        clearTimeout(isScrolling);
      }
    };
  }, [controls]);

  return (
    <motion.div
      className="fixed flex font-bold justify-between w-full items-center bg-white px-10 h-12 z-10 font-hyeon"
      animate={controls}
      initial={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={menuClass}>
        {/* <div className={itemClass}>WHO WEE ARE</div>
        <div className={itemClass}>WHAT WE DO</div> */}
      </div>
      <h1 className="text-2xl">서플데이</h1>
      <div className={menuClass}>
        {/* <div className={itemClass}>CASE STUDIES</div>
        <div className={itemClass}>GET IN TOUCH</div> */}
      </div>
    </motion.div>
  );
}
