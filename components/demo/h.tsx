"use client";
import { motion } from "framer-motion";

export default function H() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h1 className="text-4xl mb-2  inline-block ">
        Top Manga
        <div className="border-b-[3px] mt-1 border-black" />
      </h1>
    </motion.div>
  );
}
