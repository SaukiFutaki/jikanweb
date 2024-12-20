// import { SearchComponent } from "@/components/search";
// import { searchAnime } from "@/lib/actions/anime";

// export default async function Page({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) {
//   const query = searchParams.q as string | undefined;
//   console.log(query)
//   const animeData = query ? await searchAnime(query) : null;

//   const handleSearch = async (searchQuery: string) => {
//     'use server';
//     return searchAnime(searchQuery);
//   };

//   return (
//     <div className="h-[1200px] text-black bg-[#F4EFEA]">
//       <div className="border-x-4 border-black mx-[8.25rem] h-full">
//         <div className="p-2">
//           <SearchComponent onSearch={handleSearch} />
//           {animeData && (
//             <div className="mt-8">
//               {/* Render your anime data here */}
//               <pre>{JSON.stringify(animeData, null, 2)}</pre>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }