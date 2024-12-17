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
import Image from "next/image";
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Home() {
  // const data = await getAllTopManga();
  // console.log(data);
  const data = await getTopMangaWithLimit(4);

  // const animeList = [
  //   {
  //     id: 1,
  //     title: "Attack on Titan",
  //     description:
  //       "In a world where humanity lives inside cities surrounded by enormous walls due to the Titans, giant humanoid creatures who devour humans seemingly without reason.",
  //     image: "/placeholder.svg?height=200&width=400&text=Attack+on+Titan",
  //     tags: ["Action", "Drama", "Fantasy"],
  //   },
  //   {
  //     id: 2,
  //     title: "Demon Slayer",
  //     description:
  //       "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly.",
  //     image: "/placeholder.svg?height=200&width=400&text=Demon+Slayer",
  //     tags: ["Action", "Supernatural", "Historical"],
  //   },
  //   {
  //     id: 3,
  //     title: "One Piece",
  //     description:
  //       "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.",
  //     image: "/placeholder.svg?height=200&width=400&text=One+Piece",
  //     tags: ["Adventure", "Comedy", "Fantasy"],
  //   },
  // ];

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

      <div className="bg-yellow-400 p-10 h-[1200px] border-black border-2">
        <div className="mb-8">
          <H />
          <PSliderTopManga data={data.data} />
        </div>
        <div>
          <BrutalCard>
            <div className="flex flex-row justify-between mb-2 items-center">
              <h1 className="text-5xl">Manga Terpopuler</h1>
              <BrutalButton className="text-black flex justify-center items-center">
                Go to Manga →
              </BrutalButton>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <BrutalCard>
                <Image
                  loading="lazy"
                  width={200}
                  height={200}
                  alt=""
                  src={"https://cdn.myanimelist.net/images/manga/1/157897l.jpg"}
                  className="border-black border-2 rounded-lg"
                />
              </BrutalCard>
              <BrutalCard></BrutalCard>
              <BrutalCard></BrutalCard>
            </div>
          </BrutalCard>
        </div>
      </div>
      <div></div>
    </div>
  );
}
