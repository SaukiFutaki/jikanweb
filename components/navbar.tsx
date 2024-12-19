"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Pixelify_Sans, Roboto } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ButtonLogin from "./button-login";

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
    link: "/characters",
    name: "Characters",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean>(false);

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
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="border-b-4 border-black flex justify-between  items-center bg-white sticky top-0 z-50"
    >
      <div className=" border-r-4 border-black p-4">
        <Link href="/" className=" selection:bg-red-500">
          <p className={`${pixelify.className} md:text-5xl text-black`}>WP-1</p>
        </Link>
      </div>
      <div>
        <div className="text-black flex flex-row items-center justify-center gap-x-6">
          {path.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className={`${roboto.className}  ${
                pathname === item.link
                  ? "border-b-2 border-black text-xl"
                  : "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white          after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 text-2xl"
              } `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className=" border-l-4 border-black p-4">
        <ButtonLogin />
      </div>
    </motion.header>
  );
}
