import React from "react";
import BrutalCard from "./brutal-card";
import BrutalButton from "./brutal-btn";
import Image from "next/image";
import { IDataManga } from "@/types/detail/manga";

export default function HeroMangaPopuler({ data }: { data: IDataManga[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <BrutalCard key={item.mal_id}>
          <div className="flex flex-row gap-2">
            <Image
              loading="lazy"
              width={300}
              height={200}
              alt="One Piece"
              src={item.images.webp.large_image_url}
              className="border-black border-2 object-cover aspect-video rounded-lg"
            />
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {/* {item.genres.map((item, index) => (
                  <BrutalButton
                    key={index}
                    className="rounded-full text-black"
                    disabled
                  >
                    {item.name}
                  </BrutalButton>
                ))} */}
              </div>
            </div>
          </div>
          <h1 className="text-lg font-bold line-clamp-1">
            <h1>{item.title}</h1>
          </h1>
          <p className="text-sm text-gray-900 line-clamp-3 selection:bg-violet-400">
            {item.synopsis}
          </p>

          <BrutalButton
            link={`/detail/manga/${item.mal_id}`}
            className="mt-2 text-black"
          >
            Lihat Detail →
          </BrutalButton>
        </BrutalCard>
      ))}
    </div>
  );
}
