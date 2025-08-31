import { useEffect, useState } from "react";

interface Props {
  placeHolder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeHolder = "Buscar", onQuery }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query);
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="p-5 flex flex-col items-center w-full max-w-md">
      <div className="w-full flex flex-row gap-3 items-baseline">
        <input
          type="text"
          id="Buscar"
          className="bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-s focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeHolder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKey}
          required
        />
        <button
          type="button"
          className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 active:bg-gray-900 dark:active:bg-gray-900"
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
    </div>
  );
};
