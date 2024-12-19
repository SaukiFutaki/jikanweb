"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

interface SearchComponentProps {
  onSearch: (query: string) => Promise<void>;
}

export function SearchComponent({ onSearch }: SearchComponentProps) {
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') ?? '');

  const handleSearch = () => {
    startTransition(async () => {
      await onSearch(searchTerm);
    });
  };

  return (
    <div className="mb-12 space-y-8">
      <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4 font-mono">Search Anime</h2>
        <div className="flex gap-4">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Enter anime title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              className="pl-10 border-2 border-black text-lg"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Button
            onClick={handleSearch}
            disabled={isPending}
            className="bg-black text-white hover:bg-gray-800 text-lg px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
          >
            {isPending ? 'Searching...' : 'Search'}
          </Button>
        </div>
      </div>
    </div>
  );
}