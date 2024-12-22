import { Suspense } from "react";

import BrutalCard from "@/components/brutal-card";
import HeroAnimePopuler from "@/components/hanime-populer";
import SearchComponent from "@/components/search";
import SelectGenre from "@/components/select-genre";
import {
  getAllGenresAnime,
  getAnime,
  getTopAnimeWithLimit,
} from "@/lib/actions/anime";
import PaginationAnime from "./pagination-anime";

export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {

  const query = (await searchParams).q || "";
  const page = Number((await searchParams).page) || 1;
  const limit = 12;
  // const topAnimeData = await getTopAnimeWithLimit(limit, page);
  const dataGenres = await getAllGenresAnime();
  const animeData = query
  ? await getAnime(query, page)
  : await getTopAnimeWithLimit(limit, page);


  return (
    <div className=" bg-[#F4EFEA] p-8 gap-y-4 flex flex-col">
      <div className="flex items-center  mb-6 gap-x-4">
        <BrutalCard>
          <SearchComponent />
        </BrutalCard>

        <BrutalCard>
          <SelectGenre allGenres={dataGenres.data} />
        </BrutalCard>
      </div>

      <div>
        <Suspense
          fallback={<div className="text-center text-2xl font-bold">anjay</div>}
        >
          <HeroAnimePopuler data={animeData.data} />
        </Suspense>
      </div>



      <div>
        <PaginationAnime data={animeData} />
      </div>

    </div>
  );
}
