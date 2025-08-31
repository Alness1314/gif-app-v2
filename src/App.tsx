import { GifList } from "./gifs/components/GifList";
import { PreviewSearchs } from "./gifs/components/PreviewSearchs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const App = () => {
  const {gifs, previousTerms, handleTermClick, handleSearch} = useGifs();

  return (
    <div className="text-zinc-900 dark:text-zinc-100 p-15 flex flex-col items-center">
      {/*Header*/}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte tu gif"
      />

      {/*Search*/}
      <SearchBar placeHolder="Buscar elementos" onQuery={handleSearch} />

      {/*Previews*/}
      <PreviewSearchs searches={previousTerms} onClicked={handleTermClick} />

      {/*List Elements*/}
      <GifList data={gifs} />
    </div>
  );
};
