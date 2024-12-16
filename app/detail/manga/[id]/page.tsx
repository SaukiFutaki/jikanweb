import { getMangaById } from "@/lib/actions/manga";
import React from "react";
import CardDetail from "../../_components/card-detail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const data = await getMangaById(id);
  console.log(data);
  return (
    <div className="min-h-screen bg-background">
      <CardDetail data={data.data} />
    </div>
  );
}
