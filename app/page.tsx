import { getAllTopManga } from "@/lib/actions/manga";
import CardList from "./_components/card-list";

export default async function Home() {
  const data = await getAllTopManga();
  console.log(data);
  return (
    <div>
      <CardList data={data.data} />
    </div>
  );
}
