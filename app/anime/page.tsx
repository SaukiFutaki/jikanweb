import { Suspense } from "react";

import AnimeList from "./animeList";
import SearchForm from "./searchForm";
import HeroAnimePopuler from "@/components/hanime-populer";
import { IDataAnime } from "@/types/detail/anime";
import { getAnime, getTopAnimeWithLimit } from "@/lib/actions/anime";

export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const query = searchParams.q || "";
  const page = Number(searchParams.page) || 1;
  const animeData = query
    ? await getAnime(query, page)
    : { data: [], pagination: { has_next_page: false, last_visible_page: 1 } };
  const topAnimeData = await getTopAnimeWithLimit(6);

  return (
    <div className="min-h-screen bg-[#F4EFEA] p-8">
      <div className="mb-8">
        <SearchForm initialQuery={query} />
      </div>

      {query ? (
        <Suspense
          fallback={
            <div className="text-center text-2xl font-bold">Loading...</div>
          }
        >
          <AnimeList initialData={animeData} />
        </Suspense>
      ) : (
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6 font-mono">Top Anime</h2>
          <HeroAnimePopuler data={topAnimeData.data as IDataAnime[]} />
        </div>
      )}
    </div>
  );
}
