"use server"


export const getAllTopManga = async () => {
    const response = await fetch(`${process.env.TOP_URL}/manga`)
    const data = await response.json()

    return data
}

export const getMangaById = async (id: string) => {
    const response = await fetch(`${process.env.MANGA_URL}/${id}/full`)
    const data = await response.json()

    return data
}