// import { getAllTopManga } from "@/lib/actions/manga";
// import CardList from "./_components/card-list";
// import IndexDemo from "@/components/demo/ps";
// import { Card } from "@/components/ui/card";
import BrutalCard from "@/components/brutal-card";
import BrutalButton from "@/components/brutal-btn";
import { Pixelify_Sans } from "next/font/google";
import Demoindex from "@/components/demo/ps";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400"],
})


export default async function Home() {
  // const data = await getAllTopManga();
  // console.log(data);
  return (
    <div className={`${pixelify.className} bg-pink-400 h-[1200px] p-10  `} >
      <BrutalCard>
        <div className="flex flex-col justify-between items-start gap-4">
          <p className="mt-4 outfit text-2xl md:text-5xl lg:text-7xl">
            Your Ultimate Anime Streaming Platform
           
          </p>
          <p className="mt-2 outfit text-xl md:text-3xl lg:text-5xl">
          Watch thousands of anime series and movies, all in one place.
          </p>
          <BrutalButton link="anime">
          Explore anime
          </BrutalButton>
        </div>
      </BrutalCard>

      <Demoindex />
    </div>
  );
}
