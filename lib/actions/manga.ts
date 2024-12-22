"use server";

export const getAllTopManga = async () => {
  const response = await fetch(`${process.env.TOP_URL}/manga`);
  const data = await response.json();

  return data;
};

export const getTopMangaWithLimit = async (limit: number,page : number = 1) => {
    const response = await fetch(`${process.env.BASE_URL}/top/manga?limit=${limit}&page=${page}`);
    const data = await response.json();
    
    return data;
}

export const getMangaById = async (id: string) => {
  const response = await fetch(`${process.env.MANGA_URL}/${id}/full`);
  const data = await response.json();

  return data;
};

export const getMangaRecommendation = async (id: string) => {
  const response = await fetch(
    `${process.env.MANGA_URL}/${id}/recommendations`
  );
  const data = await response.json();

  return data;
};

export const getRandomMangaRecommendation = async () => {
    const requests = [];
    for (let i = 0; i < 4; i++) {
      requests.push(fetch(`${process.env.BASE_URL}/random/manga`));
    }
  
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map((response) => response.json()));
  
    return data;
  };

  export const getAllGenresManga = async () => {
    const response = await fetch(`${process.env.BASE_URL}/genres/manga`);
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




  export async function getManga(query: string, page: number = 1) {
    try {
      return await fetchWithRetry(`${process.env.BASE_URL}/manga?q=${query}&page=${page}`)
    } catch (error) {
      console.error('Failed to fetch anime:', error)
      throw new Error('Failed to fetch anime. Please try again later.')
    }
  }
  
  