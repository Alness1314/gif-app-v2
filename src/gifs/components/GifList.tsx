import type { Gif } from "../interfaces/gif.interface"


interface Props {
    data: Gif[],
}

export const GifList = ({data}:Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr pt-5">
        {data.map((gif) => (
          <div
            key={gif.id}
            className="h-80 w-full flex flex-col bg-zinc-100 border border-zinc-200 rounded-lg shadow-sm dark:bg-zinc-800 dark:border-zinc-700 overflow-hidden"
          >
            {/* Imagen fija arriba */}
            <div className="h-60 w-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={gif.url}
                alt={gif.title}
              />
            </div>

            {/* Contenedor que empuja el título al fondo */}
            <div className="flex-1 flex flex-col justify-end p-4">
              <h5 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mt-auto">
                {gif.title.trim()}
              </h5>
            </div>
          </div>
        ))}
      </div>
  )
}
