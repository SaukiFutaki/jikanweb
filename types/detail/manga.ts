export interface IDataManga {
  mal_id: number;
  url: string;
  images: {
    webp: {
      large_image_url: string;
      image_url: string;
    };
  };

  synopsis: string;
  title: string;
  genres: {
    name: string;
  }[];
  chapters: number;
  score: number;
  scored: number;
  scored_by: number;
  rank: number;
  popularity: number;
  favorites: number;
}