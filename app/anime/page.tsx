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
  searchParams: Promise<{ q?: string; page?: string ;genres ?: string}>;
}) {
  const params = await searchParams;
  const query = params.q || "";
  const page = Number(params.page) || 1;
  const genres = params.genres || "";
  const limit = 12;
  // const topAnimeData = await getTopAnimeWithLimit(limit, page);
  const dataGenres = await getAllGenresAnime();
  const animeData = query
    ? await getAnime(query, page, genres)
    : await getTopAnimeWithLimit(limit, page);

  return (
    <div className=" bg-[#F4EFEA] p-8 gap-y-4 flex flex-col">
      <div className="flex items-center  mb-6 gap-x-4">
        <BrutalCard>
          <SearchComponent />
        </BrutalCard>

        <BrutalCard>
          <SelectGenre allGenres={dataGenres.data} isEnabled={!!query} />
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
