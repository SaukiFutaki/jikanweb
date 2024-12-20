"use client";
import { Sanchez } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  color?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  link?: string;
  className?: string;
  onClick?: () => void;
  type ?: "submit" | "button" | "reset";
}

const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];
const sanchez = Sanchez({
  subsets: ["latin"],
  weight: ["400"],
})
const BrutalButton = ({
  link,
  color,
  children,
  className,
  disabled,
  onClick,
  type
}: Props) => {
  const [isHovered, setIsHovered] = useState(false); // State untuk hover
  const [isPressed, setIsPressed] = useState(false); // State untuk tombol ditekan
  const [randomColor, setRandomColor] = useState(color);
  console.log(type)
  useEffect(() => {
    setRandomColor(color ?? colors[Math.floor(Math.random() * colors.length)]);
  }, [color]);

  return (
    <>
      {disabled ? (
        <div onClick={onClick}>
          <div
            className={`${className} brutal-btn ${sanchez.className} ${
              isHovered || isPressed ? "bg-random" : "bg-white"
            }`}
            style={
              isHovered || isPressed ? { backgroundColor: randomColor } : {}
            }
            onMouseEnter={() => setIsHovered(true)} // Event handler untuk hover
            onMouseLeave={() => setIsHovered(false)} // Event handler untuk hover
            onMouseDown={() => setIsPressed(true)} // Event handler untuk tombol ditekan
            onMouseUp={() => setIsPressed(false)} // Event handler untuk tombol dilepas
          >
            {children}
          </div>
        </div>
      ) : (
        <Link href={`${link}`} className="">
          <div
            className={`${className} brutal-btn ${
              isHovered || isPressed ? "bg-random" : "bg-white"
            }`}
            style={
              isHovered || isPressed ? { backgroundColor: randomColor } : {}
            }
            onMouseEnter={() => setIsHovered(true)} // Event handler untuk hover
            onMouseLeave={() => setIsHovered(false)} // Event handler untuk hover
            onMouseDown={() => setIsPressed(true)} // Event handler untuk tombol ditekan
            onMouseUp={() => setIsPressed(false)} // Event handler untuk tombol dilepas
          >
            {children}
          </div>
        </Link>
      )}
    </>
  );
};

export default BrutalButton;
