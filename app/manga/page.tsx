// import BrutalCard from "@/components/brutal-card";
import { getManga, getTopMangaWithLimit } from "@/lib/actions/manga";
import HeroMangaPopuler from "@/components/hmanga-populer";
import PaginationManga from "./pagination-manga";
import { Suspense } from "react";

export default async function Page({searchParams}:{  searchParams: Promise<{ q?: string; page?: string }>;}) {
  const query = (await searchParams).q || "";
  const page = Number((await searchParams).page) || 1;
  const limit = 12;
 const mangaData = query
    ? await getManga(query, page)
    : await getTopMangaWithLimit(limit, page);
  return (
    <div className="bg-[#F4EFEA] p-8 gap-y-4 flex flex-col">
       <div>
              <Suspense
                fallback={<div className="text-center text-2xl font-bold">anjay</div>}
              >
                <HeroMangaPopuler data={mangaData.data} />
              </Suspense>
            </div>
      <div>
        <PaginationManga data={mangaData} />
      </div>
    </div>
  );
}
