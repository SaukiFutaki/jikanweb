export interface IDataAnime {
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
  members: number;
  title_japanese: string;
  trailer: {
    embed_url: string;
  };
  pagination: {
    last_visible_number: number;
    has_next_page: boolean;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}

export interface IDataRecommendationManga {
  entry: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    };
    title: string;
  };
}

export interface IAnimeGenres {
  mal_id: number;
  name: string;
  count: number;
}