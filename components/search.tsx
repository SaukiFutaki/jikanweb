"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, FormEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


export default function SearchComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    if (searchQuery.trim()) {
      current.set("q", searchQuery.trim());
      current.delete("page"); // Reset to page 1 when searching
    } else {
      current.delete("q");
      current.delete("page");
    }
    
    // Preserve selected genres if any
    const query = current.toString();
    const newUrl = query ? `?${query}` : "/";
    router.push(newUrl);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder=". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-2 border-black text-lg"
          />
        </div>
        <Button
          type="submit"
          className="bg-black text-white hover:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
        >
          Search
        </Button>
      </form>
    </div>
  );
}