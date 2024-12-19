import { IDataAnime } from "@/types/detail/anime";
import Image from "next/image";
import BrutalButton from "./brutal-btn";
import BrutalCard from "./brutal-card";
import { useState } from "react";

export default function HeroAnimePopuler({ data }: { data: IDataAnime[] }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <BrutalCard key={item.mal_id}>
          <div
            className="relative aspect-video"
            onMouseEnter={() => setHoveredId(item.mal_id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Image
              loading="lazy"
              width={300}
              height={200}
              alt={item.title}
              src={item.images.webp.large_image_url}
              className={`border-black border-2 object-cover w-full h-full rounded-lg transition-opacity duration-300 ${
                hoveredId === item.mal_id ? "opacity-0" : "opacity-100"
              }`}
            />
            {item.trailer?.embed_url && (
              <iframe
                className={`absolute inset-0 w-full h-full object-cover rounded-lg border-black border-2 transition-opacity duration-300 ${
                  hoveredId === item.mal_id ? "opacity-100" : "opacity-0"
                }`}
                src={item.trailer.embed_url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {item.genres?.map((genre) => (
                <BrutalButton
                  key={genre.name}
                  className="rounded-full text-black"
                  disabled
                >
                  {genre.name}
                </BrutalButton>
              ))}
            </div>

            <h1 className="text-lg font-bold line-clamp-1">{item.title}</h1>
            
            <p className="text-sm text-gray-900 line-clamp-3 selection:bg-violet-400">
              {item.synopsis}
            </p>

            <BrutalButton
              link={`/detail/anime/${item.mal_id}`}
              className="mt-4 text-black"
            >
              Lihat Detail →
            </BrutalButton>
          </div>
        </BrutalCard>
      ))}
    </div>
  );
}