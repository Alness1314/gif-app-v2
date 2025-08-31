import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifs = async (query: string): Promise<Gif[]> => {
  const response = await giphyApi.get<GiphyResponse>("/search", {
    params: {
      q: query,
      limit: 30,
    },
  });

  return response.data.data.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.images.original.url,
    width: Number(item.images.original.width),
    height: Number(item.images.original.height),
  }));
};
