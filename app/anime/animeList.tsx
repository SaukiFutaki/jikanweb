"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight, FilterIcon } from "lucide-react";

interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  genres: {
    name: string;
  }[];
}

interface AnimeData {
  data: Anime[];
  pagination: {
    has_next_page: boolean;
    last_visible_page: number;
  };
}

export default function AnimeList({ initialData }: { initialData: AnimeData }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [animeData, setAnimeData] = useState(initialData);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const query = searchParams.get("q") || "";
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    setAnimeData(initialData);
  }, [initialData]);

  const allGenres = Array.from(
    new Set(animeData.data.flatMap((anime) => anime.genres.map((g) => g.name)))
  );

  const filteredAnime = animeData.data.filter(
    (anime) =>
      selectedGenres.length === 0 ||
      selectedGenres.some((genre) => anime.genres.some((g) => g.name === genre))
  );

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const changePage = (newPage: number) => {
    router.push(`/anime?q=${query}&page=${newPage}`);
  };

  return (
    <>
      <div className="mb-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                <FilterIcon className="mr-2 h-5 w-5" />
                Filter ({selectedGenres.length})
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <ScrollArea className="mt-8 max-h-[60vh] pr-4">
                <div className="grid grid-cols-2 gap-4">
                  {allGenres.map((genre) => (
                    <Button
                      key={genre}
                      onClick={() => toggleGenre(genre)}
                      className={`text-sm border-2 border-black ${
                        selectedGenres.includes(genre)
                          ? "bg-black text-white"
                          : "bg-white text-black"
                      } shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)]`}
                    >
                      {genre}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>

        {selectedGenres.length > 0 && (
          <Button
            onClick={() => setSelectedGenres([])}
            className="bg-red-500 text-white hover:bg-red-600 text-sm px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)]"
          >
            Clear Filters
          </Button>
        )}
      </div>

      {/* Selected Genres */}
      {selectedGenres.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {selectedGenres.map((genre) => (
            <Button
              key={genre}
              onClick={() => toggleGenre(genre)}
              className="bg-black text-white hover:bg-gray-800 text-sm px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)]"
            >
              {genre} ✕
            </Button>
          ))}
        </div>
      )}

      {/* Anime Grid */}
      <div className="">
        {filteredAnime?.length > 0 ? ( 
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredAnime.map((anime) => (
              <div key={anime.mal_id}>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-7xl">
            kosong
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center items-center gap-4">
        <Button
          onClick={() => changePage(page - 1)}
          disabled={page === 1}
          className="bg-black text-white hover:bg-gray-800 text-lg px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] disabled:opacity-50"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <span className="text-xl font-bold">
          Page {page} of {animeData.pagination.last_visible_page}
        </span>
        <Button
          onClick={() => changePage(page + 1)}
          disabled={!animeData.pagination.has_next_page}
          className="bg-black text-white hover:bg-gray-800 text-lg px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] disabled:opacity-50"
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
