"use server";

export const getAllTopAnime = async () => {
  const response = await fetch(`${process.env.TOP_URL}/anime`);
  const data = await response.json();

  return data;
};

export const getTopAnimeWithLimit = async (limit: number) => {
    const response = await fetch(`${process.env.BASE_URL}/top/anime?limit=${limit}`);
    const data = await response.json();
    
    return data;
}

export const getAnimeById = async (id: string) => {
  const response = await fetch(`${process.env.ANIME_URL}/${id}/full`);
  const data = await response.json();

  return data;
};

export const getAnimeRecommendation = async (id: string) => {
  const response = await fetch(
    `${process.env.ANIME_URL}/${id}/recommendations`
  );
  const data = await response.json();

  return data;
};

export const getRandomAnimeRecommendation = async () => {
    const requests = [];
    for (let i = 0; i < 4; i++) {
      requests.push(fetch(`${process.env.BASE_URL}/random/manga`));
    }
  
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map((response) => response.json()));
  
    return data;
  };


  export const searchAnime = async (query: string) => {
    if (!query) return [];
    
    const response = await fetch(`${process.env.BASE_URL}/anime?q=${query}`);
    const data = await response.json();
    console.log(data)
    return data;
  }
  
  