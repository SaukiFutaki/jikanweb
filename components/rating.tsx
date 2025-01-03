import { Star, StarHalf } from "lucide-react";

export const formattedScoreBy = (scoreBy: number): string => {
  return scoreBy.toLocaleString();
};

export const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  const normalizedRating = rating / 2; // Ubah skala ke 0-5
  const fullStars = Math.floor(normalizedRating); // Jumlah bintang penuh
  const hasHalfStar = normalizedRating % 1 >= 0.5; // Setengah bintang jika sisa ≥ 0.5

  const stars = [];

  // Tambahkan bintang penuh
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={i} className="h-5 w-5 fill-yellow-300 text-yellow-300" />
    );
  }

  // Tambahkan setengah bintang jika diperlukan
  if (hasHalfStar) {
    stars.push(
      <StarHalf key={fullStars} className="h-5 w-5 fill-yellow-300 text-yellow-300" />
    );
  }

  // Tambahkan bintang kosong hingga total bintang = 5
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
