"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  constraintsRef?: React.RefObject<Element>;
  onClick?: () => void;
}

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const AnimatedImage = ({
  src,
  alt,
  width = 24,
  height = 24,
  constraintsRef,
  onClick,
}: Props) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [duration, setDuration] = useState(2);

  useEffect(() => {
    const updatePosition = () => {
      setPosition({
        x: getRandomInt(0, window.innerWidth - 100),
        y: getRandomInt(0, window.innerHeight - 100),
      });
      setDuration(getRandomInt(1, 5));
    };

    updatePosition();
    const interval = setInterval(updatePosition, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`absolute top-20 left-20`}
      animate={{ x: position.x, y: position.y }}
      transition={{ duration, ease: "linear" }}
      drag
      dragConstraints={constraintsRef}
      onClick={onClick}
    />
  );
};

export default AnimatedImage;
