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
  
  
  export const getAllGenresAnime = async () => {
    const response = await fetch(`${process.env.BASE_URL}/genres/anime`);
    const data = await response.json();
  
    return data;
  }


  async function fetchWithRetry(url: string, retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, { next: { revalidate: 60 } })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return await response.json()
      } catch (error) {
        if (i === retries - 1) throw error
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
      }
    }
  }


  export async function getAnime(query: string, page: number) {
    try {
      return await fetchWithRetry(`https://api.jikan.moe/v4/anime?q=${query}&page=${page}&limit=12`)
    } catch (error) {
      console.error('Failed to fetch anime:', error)
      throw new Error('Failed to fetch anime. Please try again later.')
    }
  }
  
  