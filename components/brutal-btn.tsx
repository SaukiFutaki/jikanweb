// components/BrutalButton.tsx

import Link from "next/link";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  color?: string;

  children?: React.ReactNode;
  link: string;
}

const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];

const BrutalButton: React.FC<Props> = ({ link, color, children }) => {
  const randomColor =
    color ?? colors[Math.floor(Math.random() * colors.length)];

  return (
    <Link href={`/${link}`}>
      <div className="brutal-btn" style={{ backgroundColor: randomColor }}>
        {children}
      </div>
    </Link>
  );
};

export default BrutalButton;
