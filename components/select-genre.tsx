"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Filter } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { IAnimeGenres } from "@/types/detail/anime";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function SelectGenre({
  allGenres,
  isEnabled,
}: {
  allGenres: IAnimeGenres[];
  isEnabled: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialGenres = searchParams.get("genres")?.split(",") || [];
  const [selectedGenres, setSelectedGenres] = useState<string[]>(initialGenres);
  const [isOpen, setIsOpen] = useState(false);

  const toggleGenre = (genreId: number) => {
    if (!isEnabled) return;

    const genreIdString = genreId.toString();
    const newSelected = selectedGenres.includes(genreIdString)
      ? selectedGenres.filter((g) => g !== genreIdString)
      : [...selectedGenres, genreIdString];

    setSelectedGenres(newSelected);

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    // Preserve search query if it exists
    const searchQuery = current.get("q");
    if (searchQuery) {
      current.set("q", searchQuery);
    }

    if (newSelected.length > 0) {
      current.set("genres", newSelected.join(","));
    } else {
      current.delete("genres");
    }

    current.delete("page"); // Reset to page 1 when changing genres

    const query = current.toString();
    const newUrl = query ? `/anime?${query}` : "/anime";
    router.push(newUrl);
  };

  // Clear genres when search is cleared
  useEffect(() => {
    if (!isEnabled && selectedGenres.length > 0) {
      setSelectedGenres([]);
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.delete("genres");
      const query = current.toString();
      const newUrl = query ? `/anime?${query}` : "/anime";
      router.push(newUrl);
    }
  }, [isEnabled, searchParams, router]);

  // Update selected genres when URL params change
  useEffect(() => {
    const urlGenres = searchParams.get("genres")?.split(",") || [];
    if (JSON.stringify(urlGenres) !== JSON.stringify(selectedGenres)) {
      setSelectedGenres(urlGenres);
    }
  }, [searchParams]);

  const isGenreSelected = (genreId: number) => {
    return selectedGenres.includes(genreId.toString());
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            className={`text-lg px-8 ${
              isEnabled 
                ? "bg-black text-white hover:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]" 
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!isEnabled}
          >
            <Filter className="mr-2 h-5 w-5" />
            Genres ({selectedGenres.length})
            {!isEnabled && (
              <span className="ml-2 text-xs">(Search to enable)</span>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <ScrollArea className="mt-8 max-h-[60vh] pr-4">
            <DialogTitle>
              Genres
              {!isEnabled && (
                <p className="text-sm text-gray-500 mt-2">
                  Genre filtering is only available when searching
                </p>
              )}
            </DialogTitle>
            <div className="grid grid-cols-2 gap-4">
              {allGenres.map((genre) => (
                <Button
                  key={genre.mal_id}
                  onClick={() => toggleGenre(genre.mal_id as number)}
                  disabled={!isEnabled}
                  className={`text-sm border-2 border-black ${
                    !isEnabled
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : isGenreSelected(genre.mal_id as number)
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)]`}
                >
                  {genre.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}