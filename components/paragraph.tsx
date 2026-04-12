"use client";
import { useScroll } from "motion/react";
import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";

function Paragraph({ value }: { value: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });
  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);
  return (
    <motion.p
      ref={element}
      style={{ opacity: scrollYProgress }}
      className="text-2xl max-w-7xl p-10"
    >
      {value}
    </motion.p>
  );
}

export default Paragraph;
