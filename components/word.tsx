"use client";
import { MotionValue, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";

function WordWrapper({ value }: { value: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  const words = value.split(" ");

  return (
    <motion.p
      ref={element}
      style={{ opacity: scrollYProgress }}
      className="text-2xl p-10 flex flex-wrap text-center font-mono"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </motion.p>
  );
}

const Word = ({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-3 mt-3 relative">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default WordWrapper;
