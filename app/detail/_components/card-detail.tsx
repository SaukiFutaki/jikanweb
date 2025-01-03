import { Rating } from "@/components/rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatNumberRating, formatScoreBy } from "@/lib/helper/formats";
import { IDataManga, IDataRecommendationManga } from "@/types/detail/manga";
import { BookOpen, Heart, Share2 } from "lucide-react";
import Image from "next/image";



export default function CardDetail({ data,dataRecommendation }: { data: IDataManga,dataRecommendation: IDataRecommendationManga[] }) {
       

  return (
    <div>
      {/* HERO SECTION */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <Image
            src={data.images.webp.large_image_url}
            alt="Manga Cover"
            fill
            className="h-full w-full object-cover brightness-50"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
          <div className="container flex gap-6 items-end">
            <Image
              src={data.images.webp.image_url}
              alt="Manga Cover"
              width={200}
              height={300}
              className="rounded-lg border-4 border-background shadow-xl"
            />
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold text-white">{data.title} / {data.title_japanese}</h1>
              <div className="flex gap-2">
                {data.genres.map((genre) => (
                  <Badge key={genre.name}>{genre.name}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read First Chapter
                </Button>
                <Button variant="outline">
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Library
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="container py-8">
        <Tabs defaultValue="info" className="space-y-6">
          <TabsList>
            <TabsTrigger value="info">Information</TabsTrigger>
            <TabsTrigger value="chapters">Chapters</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="info" className="space-y-6">
            {/* Rating and Stats */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center">
                        <Rating rating={data.score} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on {formatScoreBy(data.scored_by)} ratings
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">
                        {!data.chapters ? "N/A" : data.chapters}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Chapters
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">
                       {formatNumberRating(data.members)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Readers
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Synopsis</h2>
                <p className="text-muted-foreground">{data.synopsis}</p>
              </CardContent>
            </Card>

            {/* Related Manga */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">
                Recommended Manga by the same genre
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {dataRecommendation.map((manga) => (
                  <Card key={manga.entry.mal_id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center">
                        <Image
                          src={manga.entry.images.webp.large_image_url}
                          alt={manga.entry.title}
                          width={200}
                          height={300}
                          className="w-full object-cover aspect-square"
                        />
                        <h3 className="text-sm font-medium mt-2">{manga.entry.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="chapters" className="space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Chapter {100 - i}</h3>
                      <p className="text-sm text-muted-foreground">
                        Updated 2 days ago
                      </p>
                    </div>
                    <Button variant="outline">Read</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="gallery" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=200"
                    alt="Manga Art"
                    width={200}
                    height={300}
                    className="w-full object-cover aspect-square hover:scale-105 transition-transform"
                  />
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
