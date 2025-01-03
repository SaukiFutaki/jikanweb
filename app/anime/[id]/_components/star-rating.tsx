"use client";
import { IDetailAnime } from "@/types/detail/anime";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function StarRating({ data }: { data: IDetailAnime }) {
  const rating = Number(data.rating);
  const normalizedRating = rating / 2;
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {Array.from({ length: fullStars }).map((_, i) => (
        <motion.div
          key={`full-${i}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Star className="w-5 h-5 fill-primary text-primary" />
        </motion.div>
      ))}
      {hasHalfStar && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: fullStars * 0.1 }}
          className="relative"
        >
          <Star className="w-5 h-5 text-muted" />
          <div className="absolute inset-0 overflow-hidden w-[50%]">
            <Star className="w-5 h-5 fill-primary text-primary" />
          </div>
        </motion.div>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <motion.div
          key={`empty-${i}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: (fullStars + (hasHalfStar ? 1 : 0) + i) * 0.1 }}
        >
          <Star className="w-5 h-5 text-muted" />
        </motion.div>
      ))}
    </div>
  );
}
