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
    members : number;
    title_japanese: string;
    trailer :{
      embed_url : string
    }
  }
  
  export interface IDataRecommendationManga {
      entry : {
  
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
      }
  }