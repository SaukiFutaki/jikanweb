"use client";

import { shareTechmono } from "@/app/fonts";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Pixelify_Sans, Roboto } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

interface IPath {
  link: string;
  name: string;
}

const path: IPath[] = [
  {
    link: "/anime",
    name: "Anime",
  },
  {
    link: "/manga",
    name: "Manga",
  },
  {
    link: "/character",
    name: "Character",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-80%" },
        hover: { y: 0 },
      }}
      animate={isHovered ? "hover" : hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-20 bg-white border-black border-b-4 sticky top-0 z-50"
    >
      <div className="border-x-4 border-black mx-[8.25rem] h-full">
        <div className="flex h-full">
          {/* Left section - replace first h1 */}
          <Link
            href="/"
            className="selection:bg-red-500 flex items-center px-4 absolute left-0 top-4"
          >
            <p className={`${pixelify.className} md:text-5xl text-black`}>
              WP-1
            </p>
          </Link>

          {/* Middle section - replace second h1 */}
          <div className="flex-grow flex items-center justify-center">
            <div className="text-black flex flex-row gap-x-6">
              {path.map((item) => (
                <Link
                  href={item.link}
                  key={item.name}
                  className={`${roboto.className} ${
                    pathname === item.link
                      ? "border-b-2 border-black text-3xl"
                      : "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 text-2xl"
                  } ${shareTechmono.className}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center px-4 absolute right-[0px] top-4">
            {/* <ButtonLogin /> */}
          </div>
        </div>
      </div>
    </motion.header>
  );
}

// <motion.header
// variants={{
//   visible: { y: 0 },
//   hidden: { y: "-80%" },
//   hover: { y: 0 },
// }}
// animate={isHovered ? "hover" : hidden ? "hidden" : "visible"}
// transition={{ duration: 0.35, ease: "easeInOut" }}
// onMouseEnter={() => setIsHovered(true)}
// onMouseLeave={() => setIsHovered(false)}
// className="border-b-4 border-black flex justify-between  items-center bg-white sticky top-0 z-50"
// >
// <div className=" border-r-4 border-black p-4">
//   <Link href="/" className=" selection:bg-red-500">
//     <p className={`${pixelify.className} md:text-5xl text-black`}>WP-1</p>
//   </Link>
// </div>
// <div>
//   <div className="text-black flex flex-row items-center justify-center gap-x-6">
//     {path.map((item) => (
//       <Link
//         href={item.link}
//         key={item.name}
//         className={`${roboto.className}  ${
//           pathname === item.link
//             ? "border-b-2 border-black text-3xl"
//             : "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 text-2xl"
//         } ${shareTechmono.className} `}
//       >
//         {item.name}
//       </Link>
//     ))}
//   </div>
// </div>
// <div className=" border-l-4 border-black p-4">
//   <ButtonLogin />
// </div>
// </motion.header>
