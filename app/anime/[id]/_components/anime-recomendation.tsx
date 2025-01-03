"use client";

import BrutalCard from "@/components/brutal-card";
import { IDataRecommendationManga } from "@/types/detail/anime";
import Image from "next/image";
import Link from "next/link";
import AnimatedWrapper from "./animate-wrap";

export function AnimeRecommendations({
  recommendations,
}: {
  recommendations: IDataRecommendationManga[];
}) {
  if (!recommendations || recommendations.length === 0) return null;

  return (
    <AnimatedWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      threshold={0.1} // Start animation when 10% of container is visible
      once={true}
    >
      <h3 className="text-2xl font-bold mb-4">Recommended Anime</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {recommendations.map((recommendation, index) => (
          <AnimatedWrapper
            key={recommendation.entry.mal_id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            threshold={0.2} // Start animation when 20% of item is visible
            once={true}
            amount="some" // Trigger when some of the element is in view
          >
            <BrutalCard>
              <Link 
                href={`/anime/${recommendation.entry.mal_id}`}
                className="block transform transition-transform hover:scale-[1.02] duration-200"
              >
                <div className="relative aspect-[2/3] mb-2">
                  <Image
                    src={
                      recommendation.entry.images.webp.image_url ||
                      recommendation.entry.images.jpg.image_url
                    }
                    alt={recommendation.entry.title}
                    fill
                    className="object-cover border-2 border-black"
                  />
                </div>
                <p className="text-sm font-medium line-clamp-1">
                  {recommendation.entry.title}
                </p>
              </Link>
            </BrutalCard>
          </AnimatedWrapper>
        ))}
      </div>
    </AnimatedWrapper>
  );
}