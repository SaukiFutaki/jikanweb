"use client";

import { shareTechmono } from "@/app/fonts";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import BrutalCard from "./brutal-card";
import { Button } from "./ui/button";

export function SearchComponent({initialQuery = ""}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get('query')
    startTransition(() => {
      router.push(`/anime?q=${query}`)
    })
  }

  return (
    <div className="mb-12">
      <BrutalCard>
      <form onSubmit={handleSubmit}>
        <h2 className={`${shareTechmono.className} text-2xl font-bold mb-4`}>
          Search Anime
        </h2>
        <div className="flex gap-4">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder={"Search Anime"}
              name="query"
              defaultValue={initialQuery}
              className=" border-b-4 border-r-4 border-black text-lg"
            />

          </div>
          <Button 
          type="submit"
          disabled={isPending}
          className="bg-black text-white hover:bg-gray-800 text-lg px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
        >
          {isPending ? 'Searching...' : 'Search'}
        </Button>

        </div>
      </form>
      </BrutalCard>
    </div>
  );
}
