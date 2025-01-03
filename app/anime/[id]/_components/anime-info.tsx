
import { IDetailAnime } from "@/types/detail/anime";

import AnimatedWrapper from "./animate-wrap";

export default function AnimeInfo({ data }: { data: IDetailAnime }) {
  const formatDate = (dateString: string | undefined) => {
    return dateString
      ? new Date(dateString).toLocaleDateString("id", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Not available";
  };

  const infoItems = [
    { label: "Format", value: data.type || "Unknown" },
    { label: "Episodes", value: data.episodes || "Unknown" },
    { label: "Status", value: data.status || "Unknown" },
    {
      label: "Aired",
      value: `${formatDate(data.aired?.from)} to ${formatDate(
        data.aired?.to
      )}`,
    },
    {
      label: "Season",
      value:
        data.season && data.year
          ? `${data.season} ${data.year}`
          : "Not available",
    },
    { label: "Duration", value: data.duration || "Unknown" },
    { label: "Rating", value: data.rating || "Unknown" },
    { label: "Source", value: data.source || "Unknown" },
    {
      label: "Studios",
      value:
        data.studios?.map((studio) => studio.name).join(", ") || "Unknown",
    },
    {
      label: "Producers",
      value:
        data.producers?.map((producer) => producer.name).join(", ") ||
        "Unknown",
    },
  ];
  return (
    <AnimatedWrapper
      className="grid grid-cols-2 gap-4 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {infoItems.map((item, index) => (
        <AnimatedWrapper
          key={item.label}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <p className="font-semibold">{item.label}</p>
          <p className="text-muted-foreground">{item.value}</p>
        </AnimatedWrapper>
      ))}
    </AnimatedWrapper>
  );
}
