"use client";
import { IDataAnime } from "@/types/detail/anime";
import BrutalButton from "../brutal-btn";
import BrutalCard from "../brutal-card";
import HeroAnimePopuler from "../hanime-populer";
import { Share_Tech_Mono } from "next/font/google";

interface Props {
  data: IDataAnime[];
}

const shareTechmono = Share_Tech_Mono({
  subsets : ["latin"],
  weight : "400"
})

export default function HeroAnime({ data }: Props) {
 
  return (
    <>
      <div className="mb-8 card-shadow"></div>

      <div>
        <div>
          <BrutalCard>
            <div className="flex flex-row justify-between mb-4 items-center">
              <h1 className={`${shareTechmono.className} text-5xl`}>Anime Terpopuler</h1>
              <div>
                <BrutalButton
                  link="anime"
                  className="text-black flex justify-center items-center"
                >
                  Go to All Anime →
                </BrutalButton>
              </div>
            </div>

            <div className="">
              <HeroAnimePopuler data={data} />
            </div>
          </BrutalCard>
        </div>
      </div>
    </>
  );
}
