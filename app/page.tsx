// import { getAllTopManga } from "@/lib/actions/manga";
// import CardList from "./_components/card-list";
// import IndexDemo from "@/components/demo/ps";
// import { Card } from "@/components/ui/card";
import BrutalButton from "@/components/brutal-btn";
import BrutalCard from "@/components/brutal-card";
import H from "@/components/demo/h";
import PSliderTopManga from "@/components/p-slider-top";
import { getTopMangaWithLimit } from "@/lib/actions/manga";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Home() {
  // const data = await getAllTopManga();
  // console.log(data);
  const data = await getTopMangaWithLimit(4);

  return (
    <div>
      <div className={`bg-pink-400  h-[680px] p-10`}>
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
              Kunjungi Github saya →
            </BrutalButton>
          </div>
        </BrutalCard>
        <div className="flex flex-row gap-x-2">

          <BrutalButton>

          </BrutalButton>
          <BrutalButton link="anime">Temukan Anime → </BrutalButton>

          <BrutalButton link="manga">Temukan Manga →</BrutalButton>
        </div>
      </div>

      <div className="bg-yellow-400 p-10 h-[1200px] border-black border-2">
        <div className="mb-8">
          <H />
          <PSliderTopManga data={data.data} />
        </div>
        <div>
        <BrutalCard>
        <h1>
          Anime Terpopuler
        </h1>
        </BrutalCard>

        </div>
      </div>
      <div></div>
    </div>
  );
}
