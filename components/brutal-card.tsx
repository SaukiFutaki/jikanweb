"use client";
import { useEffect, useState } from "react";

const colors = [
  "#94a3b8",
  "#a8a29e",
  "#38bdf8",
  "#fb7185",
  "#f472b6",
  "#fb923c",
]; //

interface Props {
  color?: string;
  children?: React.ReactNode;
  className?: string;
}

const BrutalCard = ({ color, children, className }: Props) => {
  const [randomColor, setRandomColor] = useState(color);

  useEffect(() => {
    setRandomColor(color ?? colors[Math.floor(Math.random() * colors.length)]);
  }, [color]);
  return (
    <div
      className={`rounded-[0.5rem] border-black border-[3px] drop-shadow-[7px_7px_0_rgb(0_0_0_/_1)] transition-all duration-500 ease-in-out hover:drop-shadow-[5px_5px_0_rgb(0_0_0_/_1)] p-4 ${className}`}
      style={{ backgroundColor: randomColor }}
    >
      {children}
    </div>
  );
};

export default BrutalCard;
