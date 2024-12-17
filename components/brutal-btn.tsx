"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  color?: string;

  children?: React.ReactNode;
  link?: string;
  className?: string;
}

const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];

const BrutalButton = ({ link, color, children, className }: Props) => {
  const [isHovered, setIsHovered] = useState(false); // State untuk hover
  const [isPressed, setIsPressed] = useState(false); // State untuk tombol ditekan
  const [randomColor, setRandomColor] = useState(color);

  useEffect(() => {
    setRandomColor(color ?? colors[Math.floor(Math.random() * colors.length)]);
  }, [color]);

  return (
    <Link href={`${link}`} className="">
      <div
        className={`${className} brutal-btn ${isHovered || isPressed ? 'bg-random' : 'bg-white'}`}
        style={isHovered || isPressed ? { backgroundColor: randomColor } : {}}
        onMouseEnter={() => setIsHovered(true)} // Event handler untuk hover
        onMouseLeave={() => setIsHovered(false)} // Event handler untuk hover
        onMouseDown={() => setIsPressed(true)} // Event handler untuk tombol ditekan
        onMouseUp={() => setIsPressed(false)} // Event handler untuk tombol dilepas
      >
        {children}
      </div>
    </Link>
  );
};

export default BrutalButton;