import { createError, defineEventHandler } from "h3";
import md5 from "md5";
import { Character, ComicList, SeriesList } from "../../../types/api";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;  

  if (!id) {
    throw createError({
      statusCode: 400,
      message: "Character ID is required",
    });
  }

  const baseUrl = process.env.BASE_URL;
  const publicKey = process.env.MARVEL_PUBLIC_KEY;
  const privateKey = process.env.MARVEL_PRIVATE_KEY;
  const ts = new Date().getTime().toString();
  const hash = md5(ts + privateKey + publicKey);

  const params = `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const characterUrl = `${baseUrl}/characters/${id}?${params}`;
  const comicsUrl = `${baseUrl}/characters/${id}/comics?${params}&limit=10&orderBy=-focDate`;
  const seriesUrl = `${baseUrl}/characters/${id}/series?${params}&limit=10&orderBy=-startYear`;

  try {
    const [characterRes, comicsRes, seriesRes] = await Promise.all([
      fetch(characterUrl),
      fetch(comicsUrl),
      fetch(seriesUrl)
    ]);

    const [characterData, comicsData, seriesData] = await Promise.all([
      characterRes.json(),
      comicsRes.json(),
      seriesRes.json()
    ]);

    if (!characterData.data || characterData.data.results.length === 0) {
      throw createError({
        statusCode: 404,
        message: "Character not found",
      });
    }

    const character = characterData.data.results[0];
    
    return {
      name: character.name,
      id: character.id,
      description: character.description,
      thumbnail: character.thumbnail,
      comics: comicsData.data,
      series: seriesData.data,
    } as Character;
  } catch (error) {
    console.error("Error fetching Marvel data:", error);
    throw createError({
      statusCode: 500,
      message: "Error fetching Marvel data",
    });
  }
});
