"use client"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Filter } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { IAnimeGenres } from "@/types/detail/anime";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SelectGenre({
  allGenres,
}: {
  allGenres: IAnimeGenres[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialGenres = searchParams.get("genres")?.split(",") || [];
  const [selectedGenres, setSelectedGenres] = useState<string[]>(initialGenres);
  const [isOpen, setIsOpen] = useState(false);

  const toggleGenre = (genre: string) => {
    const newSelected = selectedGenres.includes(genre)
      ? selectedGenres.filter(g => g !== genre)
      : [...selectedGenres, genre];
    
    setSelectedGenres(newSelected);
    
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    if (newSelected.length > 0) {
      current.set("genres", newSelected.join(","));
    } else {
      current.delete("genres");
    }
    
    current.delete("page"); // Reset to page 1 when changing genres
    
    const query = current.toString();
    const newUrl = query ? `?${query}` : "/";
    router.push(newUrl);
  };

  useEffect(() => {
    // Update selected genres when URL params change
    const urlGenres = searchParams.get("genres")?.split(",") || [];
    if (JSON.stringify(urlGenres) !== JSON.stringify(selectedGenres)) {
      setSelectedGenres(urlGenres);
    }
  }, [searchParams]);

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
            <Filter className="mr-2 h-5 w-5" />
            Genres ({selectedGenres.length})
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <ScrollArea className="mt-8 max-h-[60vh] pr-4">
        <DialogTitle>Genres</DialogTitle>
            <div className="grid grid-cols-2 gap-4">
              {allGenres.map((genre, index) => (
                <Button
                  key={index}
                  onClick={() => toggleGenre(genre.name)}
                  className={`text-sm border-2 border-black ${
                    selectedGenres.includes(genre.name)
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