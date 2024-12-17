// components/BrutalButton.tsx

import Link from "next/link";
import React from "react";

interface Props {
  color?: string;

  children?: React.ReactNode;
  link?: string;
  className?: string;
}

const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];

const BrutalButton = ({ link, color, children,className } : Props ) => {
  const randomColor =
    color ?? colors[Math.floor(Math.random() * colors.length)];

  return (
    <Link href={`${link}`}>
      <div className={`${className} brutal-btn`} style={{ backgroundColor: randomColor }}>
        {children} 
      </div>
    </Link>
  );
};

export default BrutalButton;
