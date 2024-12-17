// import { getAllTopManga } from "@/lib/actions/manga";
// import CardList from "./_components/card-list";
// import IndexDemo from "@/components/demo/ps";
// import { Card } from "@/components/ui/card";
import BrutalButton from "@/components/brutal-btn";
import BrutalCard from "@/components/brutal-card";
import PSliderTopManga from "@/components/p-slider-top";
import { getTopMangaWithLimit } from "@/lib/actions/manga";
import { Pixelify_Sans } from "next/font/google";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Home() {
  // const data = await getAllTopManga();
  // console.log(data);
  const data = await getTopMangaWithLimit(4);
 
  return (
    <div className={`${pixelify.className} bg-pink-400 h-[1200px] p-10  `}>
      <BrutalCard className="mb-20">
        <div className="flex flex-col justify-between items-start gap-4">
          <p className="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
            Your Ultimate Anime Streaming Platform
          </p>
          <p className="mt-2 outfit text-xl md:text-3xl lg:text-5xl">
            Watch thousands of anime series and movies, all in one place.
          </p>
          <BrutalButton link="anime">Explore anime </BrutalButton>
        </div>
      </BrutalCard>

      <div>
        <h1 className="text-4xl mb-2  inline-block ">
          Top Manga
          <div className="border-b-[3px] mt-1 border-black" />
        </h1>

        <PSliderTopManga data={data.data} />
      </div>
    </div>
  );
}
