import { createError, defineEventHandler, getQuery } from "h3";
import type { GetCharacters } from "../../../types/api";
import md5 from "md5";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 20;
  const search = query.search?.toString() || "";

  const baseUrl = process.env.BASE_URL;
  const publicKey = process.env.MARVEL_PUBLIC_KEY;
  const privateKey = process.env.MARVEL_PRIVATE_KEY;
  const ts = new Date().getTime().toString();
  const hash = md5(ts + privateKey + publicKey);

  const offset = (page - 1) * limit;

  let url = `${baseUrl}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

  if (search) {
    url += `&nameStartsWith=${encodeURIComponent(search)}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      total: 1564,
      characters: data.data.results,
      totalPages: Math.ceil(data.data.total / limit),
      currentPage: page,
    } as GetCharacters;
  } catch (error) {
    console.error("Error fetching Marvel characters:", error);
    throw createError({
      statusCode: 500,
      message: "Error fetching Marvel characters",
    });
  }
});
