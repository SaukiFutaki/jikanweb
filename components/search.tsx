"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { useDebouncedCallback } from 'use-debounce';

export default function SearchComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const handleSearch = useDebouncedCallback((value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    if (value.trim()) {
      current.set("q", value.trim());
    } else {
      current.delete("q");
    }
    
    // Always reset to page 1 when search changes
    current.delete("page");
    
    // Preserve genres if any
    const query = current.toString();
    const newUrl = query ? `/anime?${query}` : "/anime";
    router.push(newUrl);
  }, 300); // 300ms delay

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    handleSearch(value);
  };

  // Sync input value with URL params
  useEffect(() => {
    const urlQuery = searchParams.get("q") || "";
    if (urlQuery !== searchQuery) {
      setSearchQuery(urlQuery);
    }
  }, [searchParams]);

  return (
    <div>
      <Input
        type="text"
        placeholder=". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
        value={searchQuery}
        onChange={(e) => handleInputChange(e.target.value)}
        className="border-2 border-black text-lg"
      />
    </div>
  );
}