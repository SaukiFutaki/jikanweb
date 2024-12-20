'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface AnimeCardProps {
  id: string
  title: string
  description: string
  coverImage: string
  genres: string[]
}

export function AnimeCard({ id, title, description, coverImage, genres }: AnimeCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card className="border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
      <CardContent className="p-0">
        <div className="relative h-48">
          {!imageLoaded && (
            <Skeleton className="absolute inset-0 rounded-t-sm" />
          )}
          <Image
            src={coverImage}
            alt={title}
            layout="fill"
            objectFit="cover"
            className={`rounded-t-sm transition-opacity duration-300`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </div>
        <div className="p-4 space-y-4">
          <h2 className="text-2xl font-bold line-clamp-1">{title}</h2>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {genres.slice(0, 3).map((genre) => (
              <Badge key={genre} variant="outline" className="border-2 border-black">
                {genre}
              </Badge>
            ))}
          </div>
          <Button 
            className="w-full bg-black text-white hover:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
            asChild
          >
            <Link href={`/detail/anime/${id}`}>
              View Details →
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

