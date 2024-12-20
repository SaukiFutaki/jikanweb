'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Input } from "@/components/ui/input"

export default function SearchForm({ initialQuery = '' }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-2xl font-bold mb-4 font-mono">Search Anime</h2>
      <Input
        type="text"
        name="query"
        
        placeholder="Enter anime title..."
        defaultValue={initialQuery}
        className="border-2 border-black text-lg"
        onChange={(e) => {
          const query = e.target.value
          startTransition(() => {
            if (query) {
                router.push(`/anime?q=${query}`)
              } else {
                router.push('/anime')
              }
          }) 
        }}
      />
      {isPending &&(
        <h1>
            sabar
        </h1>
      )}
    </div>
  )
}

