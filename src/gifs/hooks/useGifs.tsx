import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifs } from "../actions/get-gifs.action";

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClick = (term: string) => {
    handleFetch(term);
  };

  const handleSearch = async (query: string) => {
    const fixQuery = query.toLowerCase().trim();
    if (!fixQuery) return;

    if (previousTerms.includes(fixQuery)) return;

    setPreviousTerms((prev) => {
      const next = [fixQuery, ...prev.filter((t) => t !== fixQuery)];
      return next.slice(0, 8);
    });

    handleFetch(query);
  };

  const handleFetch = async (query: string) => {
    try {
      const responseGifs = await getGifs(query);
      setGifs(responseGifs);
    } catch (err) {
      console.error("Error obteniendo gifs:", err);
      setGifs([]); 
    }
  };

  return {
    gifs,
    handleTermClick,
    handleSearch,
    previousTerms,
  };
};
