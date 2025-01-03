import { IDataAnime } from "@/types/detail/anime";
import Image from "next/image";
import BrutalButton from "./brutal-btn";
import BrutalCard from "./brutal-card";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import YoutubeVideo from "youtube-video-element/react";
import MediaThemeSutro from "player.style/sutro/react";

export default function HeroAnimePopuler({ data }: { data: IDataAnime[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <BrutalCard key={item.mal_id}>
          <div className="relative aspect-video">
            <Tabs defaultValue="cover" className="">
              <TabsList>
                <TabsTrigger value="cover">
                  <BrutalButton className="text-black" disabled>
                    cover
                  </BrutalButton>
                </TabsTrigger>
                <TabsTrigger value="trailer">
                  <BrutalButton className="text-black" disabled>
                    trailer
                  </BrutalButton>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cover">
                <div className="relative aspect-video">
                  <Image
                    loading="lazy"
                    width={300}
                    height={200}
                    alt={item.title}
                    src={item.images.webp.large_image_url}
                    className={`border-black border-2 object-cover w-full h-full rounded-lg transition-opacity duration-300 "}`}
                  />
                </div>
              </TabsContent>
              <TabsContent value="trailer">
                {item.trailer?.embed_url ? (
                  <div className="relative aspect-video rounded-xl">
                    <MediaThemeSutro className="w-full h-full rounded-xl aspect-video">
                      <YoutubeVideo
                        src={item.trailer.embed_url}
                        className="rounded-xl "
                        playsInline
                        crossOrigin="anonymous"
                        slot="media"
                      />
                    </MediaThemeSutro>
                  </div>
                ) : (
                  <div className="flex items-center justify-center my-28">
                    <Badge variant={"destructive"}>
                      Sorry no trailer available
                    </Badge>
                  </div>
                )}
              </TabsContent>
            </Tabs>
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
              link={`/anime/${item.mal_id}`}
              className="mt-4 text-black group "
            >
              Lihat Detail
              <span className=" pl-1 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                →
              </span>
            </BrutalButton>
          </div>
        </BrutalCard>
      ))}
    </div>
  );
}
