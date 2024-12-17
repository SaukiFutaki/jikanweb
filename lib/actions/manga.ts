"use server";

export const getAllTopManga = async () => {
  const response = await fetch(`${process.env.TOP_URL}/manga`);
  const data = await response.json();

  return data;
};

export const getTopMangaWithLimit = async (limit: number) => {
    const response = await fetch(`${process.env.BASE_URL}/top/manga?limit=${limit}`);
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
