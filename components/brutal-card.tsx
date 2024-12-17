"use client";
import { useEffect, useState } from "react";

const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#f472b6","#fb923c"]; //

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
      className={`brutal-card ${className}`}
      style={{ backgroundColor: randomColor }}
    >
      {children}
    </div>
  );
};

export default BrutalCard;
