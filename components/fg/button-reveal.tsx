"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ButtonReveal = ({className} : {className? : string}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="">
      <button
       className={`rounded-[0.5rem] border-black border-[3px] drop-shadow-[7px_7px_0_rgb(0_0_0_/_1)] transition-all duration-500 ease-in-out hover:drop-shadow-[5px_5px_0_rgb(0_0_0_/_1)] p-4 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>Learn More</span>
        <motion.svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M5 12H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.2 }}
          />
          <motion.path
            d="M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 0 : -7 }}
            transition={{ duration: 0.2 }}
          />
        </motion.svg>
      </button>
    </div>
  );
};

export default ButtonReveal;
