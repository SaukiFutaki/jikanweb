"use client"
import Link from "next/link";
import { useEffect,useState } from "react";


interface Props {
  color?: string;

  children?: React.ReactNode;
  link?: string;
  className?: string;
}

const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];

const BrutalButton = ({ link, color, children,className } : Props ) => {
  


    const [randomColor, setRandomColor] = useState(color);

    useEffect(() => {
      setRandomColor(color ?? colors[Math.floor(Math.random() * colors.length)]);
    }, [color])
  return (
    <Link href={`${link}`} className="">
      <div className={`${className} brutal-btn `} style={{ backgroundColor: randomColor }}>
        {children} 
      </div>
    </Link>
  );
};

export default BrutalButton;
