const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];

interface Props {
  color?: string;
  children?: React.ReactNode;
  className?: string;
}

const BrutalCard = ({ color, children,className } : Props) => {
  const randomColor =
    color ?? colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`brutal-card ${className}`} style={{ backgroundColor: randomColor }}>
      {children}
    </div>
  );
};

export default BrutalCard;
