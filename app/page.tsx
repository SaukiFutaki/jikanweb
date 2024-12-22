// import { getAllTopManga } from "@/lib/actions/manga";
// import CardList from "./_components/card-list";
// import IndexDemo from "@/components/demo/ps";
// import { Card } from "@/components/ui/card";
import HeroAnime from "@/components/anime/hero";
import BrutalButton from "@/components/brutal-btn";
import BrutalCard from "@/components/brutal-card";
import H from "@/components/demo/h";
import HeroMangaPopuler from "@/components/hmanga-populer";
import PSliderTopManga from "@/components/p-slider-top";
import { getTopAnimeWithLimit } from "@/lib/actions/anime";
import { getTopMangaWithLimit } from "@/lib/actions/manga";
import { orbitron, roboto } from "./fonts";

export default async function Home() {
  const data = await getTopMangaWithLimit(4);
  const animeData = await getTopAnimeWithLimit(6);

  return (
    <div>
      <div
        className={`bg-red-400  h-full p-10 border-black border-x-2 border-b`}
      >
        <BrutalCard
          className={`${orbitron.className} selection:bg-purple-400 mb-20`}
        >
          <div className="flex flex-col justify-between items-start gap-4">
            <p className="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">Halo</p>
            <p className="mt-2 outfit  text-xl md:text-3xl lg:text-5xl"></p>
            <BrutalButton
              link="https://github.com/SaukiFutaki"
              className="flex items-center justify-center"
            >
              <h1 className=" text-black ">Kunjungi Github saya →</h1>
            </BrutalButton>
          </div>
        </BrutalCard>
        <div className="flex flex-row gap-x-2">
          <BrutalButton disabled></BrutalButton>
          <BrutalButton link="anime" className="text-black">
            Temukan Anime →{" "}
          </BrutalButton>

          <BrutalButton link="manga" className="text-black">
            Temukan Manga →
          </BrutalButton>
        </div>
      </div>

      <div className="bg-yellow-400 p-10 h-full border-black border-2">
        <div className="mb-8">
          <H />
          <PSliderTopManga data={data.data} />
        </div>
        <div>
          <BrutalCard>
            <div className="flex flex-row justify-between mb-2 items-center">
              <h1 className={`text-5xl ${roboto.className}`}>
                Manga Terpopuler
              </h1>
              <BrutalButton className="text-black flex justify-center items-center">
                Go to All Manga →
              </BrutalButton>
            </div>

            <div className="">
              <HeroMangaPopuler data={data.data} />
            </div>
          </BrutalCard>
        </div>
      </div>

      <div className="h-full bg-blue-400  border-black border-2">
     
        <div className="p-10">
          <HeroAnime data={animeData.data} />
        </div>
      </div>
    </div>
  );
}
