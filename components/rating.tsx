// helpers/format.tsx

import { Star } from "lucide-react";

export const formattedScoreBy = (scoreBy: number): string => {
  return scoreBy.toLocaleString();
};

export const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating / 2);
  const hasHalfStar = rating % 2 !== 0 && rating % 1 !== 0; // Periksa apakah ada desimal 0.5

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <Star key={fullStars} className="h-5 w-5 fill-primary/50 text-primary" /> 
    );
  }

  while (stars.length < 5) {
    stars.push(
      <Star key={stars.length} className="h-5 w-5 text-muted-foreground" />
    );
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center">
        {stars}
        <span className="ml-2 text-sm text-muted-foreground">
          {rating} / 10
        </span>
      </div>
    </div>
  );
};