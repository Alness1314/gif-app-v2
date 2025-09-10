import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifs } from "../actions/get-gifs.action";

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifCache = useRef<Record<string, Gif[]>>({});

  const handleTermClick = async (term: string) => {
    if (gifCache.current[term]) {
      setGifs(gifCache.current[term]);
      return;
    }

    const responseGifs = await getGifs(term);
    setGifs(responseGifs);
  };

  const handleSearch = async (query: string) => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const responseGifs = await getGifs(query);
    setGifs(responseGifs);

    gifCache.current[query] = responseGifs;
  };

  return {
    gifs,
    handleTermClick,
    handleSearch,
    previousTerms,
  };
};
