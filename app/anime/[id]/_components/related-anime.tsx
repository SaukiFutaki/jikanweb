import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IDetailAnime } from "@/types/detail/anime";
import { Link } from "lucide-react";
import AnimatedWrapper from "./animate-wrap";

export function RelatedAnime({ data }: { data: IDetailAnime }) {
  if (data.relations.length === 0) return null;
  console.log(data.relations.entries.length);
  return (
    <AnimatedWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-4">Related Anime</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.relations.map((relation, index) => (
          <AnimatedWrapper
            key={relation.relation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{relation.relation}</CardTitle>
              </CardHeader>
              <CardContent>
                {relation.entry.map((entry) => (
                  <Link
                    key={entry.mal_id}
                    href={`/anime/${entry.mal_id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {entry.name}
                  </Link>
                ))}
              </CardContent>
            </Card>
          </AnimatedWrapper>
        ))}
      </div>
    </AnimatedWrapper>
  );
}
