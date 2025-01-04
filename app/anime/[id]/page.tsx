import { getAnimeById, getAnimeRecommendation } from "@/lib/actions/anime";

import { Rating } from "@/components/rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IDetailAnime } from "@/types/detail/anime";
import { Heart } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import AnimatedWrapper from "./_components/animate-wrap";
import AnimeInfo from "./_components/anime-info";
import { AnimeRecommendations } from "./_components/anime-recomendation";
import { BackButton } from "./_components/back-button";
import ExternalLink from "./_components/external-link";
// import { RelatedAnime } from "./_components/related-anime";
import BrutalButton from "@/components/brutal-btn";
import BrutalCard from "@/components/brutal-card";
import Share from "./_components/share";

interface PageProps {
  params: Promise<{ id: string }>;
}
interface AnimeResponse {
  data: IDetailAnime;
}

async function fetchAnimeData(id: string) {
  try {
    const [animeData, recommendations] = await Promise.all([
      getAnimeById(id) as Promise<AnimeResponse>,
      getAnimeRecommendation(id),
    ]);

    return {
      anime: animeData.data,
      recommendations: recommendations.data,
    };
  } catch (error) {
    console.error("Error fetching anime data:", error);
    return notFound();
  }
}

export default async function Page({ params }: PageProps) {
  // if (!(await params)?.id) return notFound();

  const { anime: data, recommendations } = await fetchAnimeData((await params).id);

  return (
    <div className="bg-[#F4EFEA] border-2 border-black">
      <AnimatedWrapper className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedWrapper
            className="md:col-span-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={
                  data.images?.webp?.large_image_url ||
                  data.images?.jpg?.large_image_url ||
                  "/placeholder.svg?height=500&width=350"
                }
                alt={data.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-4 space-y-2">
              <Button className="w-full text-black" variant="default">
                <Heart className="mr-2 h-4 w-4" />
                Add to Library
              </Button>
              <Share />
              {/* <TrailerPopover youtubeId={anime.trailer?.youtube_id} /> */}
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper
            className="md:col-span-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
            {data.title_japanese && (
              <h2 className="text-xl text-muted-foreground mb-4">
                {data.title_japanese}
              </h2>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              {data.genres?.map((genre) => (
                <BrutalButton
                  key={genre.mal_id}
                  disabled
                  className="rounded-full"
                >
                  {genre.name}
                </BrutalButton>
              )) || (
                <Badge variant="secondary">Genre information unavailable</Badge>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <BrutalCard>
                <p className="text-sm text-muted-foreground">Score</p>
                <div className="flex items-center gap-2">
                  <Rating rating={data.score} />
                </div>
                <p className="text-xs text-muted-foreground">
                  {data.scored_by?.toLocaleString()} users
                </p>
              </BrutalCard>
              <BrutalCard>
                <p className="text-sm text-muted-foreground">Ranked</p>
                <p className="text-2xl font-bold">#{data.rank}</p>
              </BrutalCard>
              <BrutalCard>
                <p className="text-sm text-muted-foreground">Popularity</p>
                <p className="text-2xl font-bold">#{data.popularity}</p>
              </BrutalCard>
              <BrutalCard>
                <p className="text-sm text-muted-foreground">Members</p>
                <p className="text-2xl font-bold">
                  {data.members?.toLocaleString()}
                </p>
              </BrutalCard>
              <BrutalCard>
                <p className="text-sm text-muted-foreground">Favorites</p>
                <p className="text-2xl font-bold">
                  {data.favorites?.toLocaleString()}
                </p>
              </BrutalCard>
              <BrutalCard>
                <p className="text-sm text-slate-700">Type</p>
                <p className="text-2xl font-bold">{data.type}</p>
              </BrutalCard>
            </div>
            <AnimeInfo data={data} />
            <Separator className="my-6" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Synopsis</h3>
              <p className="text-muted-foreground">{data.synopsis}</p>
              {data.background && (
                <>
                  <h3 className="text-2xl font-bold">Background</h3>
                  <p className="text-muted-foreground">{data.background}</p>
                </>
              )}
            </div>
          </AnimatedWrapper>
        </div>
        <Separator className="my-8" />
        {/* <RelatedAnime data={data} /> */}
        <Separator className="my-8" />
        <AnimeRecommendations recommendations={recommendations} />
        <Separator className="my-8" />
        <ExternalLink data={data} />
      </AnimatedWrapper>
    </div>
  );
}
